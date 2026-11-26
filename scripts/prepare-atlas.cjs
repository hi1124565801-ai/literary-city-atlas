// Regenerate the browser catalog after editing atlas-data.js or collections.js:
// node scripts/prepare-atlas.cjs
const fs = require("node:fs");
const path = require("node:path");
global.window = {};
require("../atlas-data.js");
require("../collections.js");

const workCities = {
  lover: "西贡 / 湄公河",
  norwegian: "东京 / 神户",
  byakuyako: "大阪 / 东京",
  chengnan: "北京城南",
  dalloway: "伦敦",
  qingcheng: "上海 / 香港",
  yecao: "北京 / 广州 / 文本空间",
  solitude: "马孔多 / 加勒比海岸"
};

function mergeDataAdditions(base) {
  const additions = window.LITERARY_MAP_ADDITIONS;
  if (!additions) return base;
  const existingWorkIds = new Set((base.works || []).map((work) => work.id));
  const existingPlaceIds = new Set((base.places || []).map((place) => place.id));
  const existingSceneIds = new Set((base.scenes || []).map((scene) => scene.id));
  return {
    ...base,
    works: [...(base.works || []), ...(additions.works || []).filter((work) => !existingWorkIds.has(work.id))],
    places: [...(base.places || []), ...(additions.places || []).filter((place) => !existingPlaceIds.has(place.id))],
    scenes: [...(base.scenes || []), ...(additions.scenes || []).filter((scene) => !existingSceneIds.has(scene.id))]
  };
}

function buildPlaceModel(rawPlaces) {
  const groups = new Map();
  rawPlaces.forEach((raw) => {
    const key = placeKey(raw);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(raw);
  });

  return [...groups.entries()].map(([key, raws]) => {
    const primary = choosePrimaryRaw(raws);
    const geometry = geometryFor(primary);
    const entries = groupWorkEntries(raws);
    const aliases = unique(raws.flatMap((raw) => [raw.name, raw.modernName, raw.searchLabel]).filter(Boolean))
      .filter((alias) => alias !== primary.name);
    return {
      id: `place-${key}`,
      rawIds: raws.map((raw) => raw.id),
      primaryType: primary.type || "",
      types: unique(raws.map((raw) => raw.type).filter(Boolean)),
      name: cleanName(primary.name),
      aliases,
      city: cityFor(primary),
      country: primary.country || "",
      geometry,
      searchLabel: primary.searchLabel || primary.modernName || primary.name,
      context: entries.find((entry) => entry.context)?.context || primary.literaryNote || primary.evidenceSummary || "",
      note: primary.mapNote || primary.evidenceSummary || "",
      works: entries
    };
  });
}

function choosePrimaryRaw(raws) {
  return raws.slice().sort((a, b) => {
    const ap = precisionRank(a);
    const bp = precisionRank(b);
    return ap - bp || (b.mentions || 0) - (a.mentions || 0);
  })[0];
}

function groupWorkEntries(raws) {
  const byWork = new Map();
  raws.forEach((raw) => {
    if (!byWork.has(raw.workId)) byWork.set(raw.workId, []);
    byWork.get(raw.workId).push(raw);
  });
  return [...byWork.entries()].map(([workId, group]) => {
    const primary = choosePrimaryRaw(group);
    const passages = group.flatMap((raw) => passagesForRaw(raw));
    return {
      workId,
      context: primary.literaryNote || primary.evidenceSummary || "",
      placeNote: primary.mapNote || primary.evidenceSummary || "",
      passages: uniquePassages(passages)
    };
  });
}

function passagesForRaw(raw) {
  if (raw.passages && Array.isArray(raw.passages)) {
    return raw.passages
      .map((passage, index) => normalizePassage(passage, raw, index))
      .filter(Boolean);
  }

  const quotes = raw.quotes && Array.isArray(raw.quotes)
    ? raw.quotes
    : raw.quoteFull
      ? [raw.quoteFull]
      : raw.quote
        ? [raw.quote]
        : [];
  return quotes
    .map((quote, index) => String(quote || "").trim())
    .filter((quote) => isDisplayQuote(quote, raw))
    .map((quote, index) => ({
      id: `${raw.id}-passage-${index + 1}`,
      text: quote,
      language: raw.workId === "dalloway" ? "en" : "zh",
      context: passageContext(raw, index)
    }));
}

function normalizePassage(passage, raw, index) {
  if (!passage) return null;
  const source = typeof passage === "string" ? { text: passage } : passage;
  const quote = String(source.text || "").trim();
  if (!isDisplayQuote(quote, raw)) return null;
  return {
    id: source.id || `${raw.id}-passage-${index + 1}`,
    text: quote,
    language: source.language || (raw.workId === "dalloway" ? "en" : "zh"),
    translation: source.translation || "",
    original: source.original || "",
    type: source.type || "",
    context: source.sceneContext || source.context || passageContext(raw, index)
  };
}

function isDisplayQuote(quote, raw) {
  const plain = quote.replace(/[“”"'.。？！、，；：\s]/g, "");
  if (!plain) return false;
  const names = [raw.name, raw.modernName, raw.searchLabel].filter(Boolean).map((value) => String(value).replace(/\s/g, ""));
  if (names.some((name) => plain === name || name.includes(plain) && plain.length < 8)) return false;
  const chineseCount = (quote.match(/[\u4e00-\u9fff]/g) || []).length;
  if (chineseCount && chineseCount < 10) return false;
  if (!chineseCount && quote.length < 28) return false;
  return true;
}

function passageContext(raw, index) {
  if (raw.quoteLabel && !/原文|片段|excerpt/i.test(raw.quoteLabel)) return raw.quoteLabel;
  if (index === 0 && raw.role) return raw.role;
  return "";
}

function uniquePassages(passages) {
  const seen = new Set();
  return passages.filter((passage) => {
    const key = passage.text.replace(/\s+/g, "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function placeKey(raw) {
  if (raw.placeId) return slug(raw.placeId);
  const label = normalizePlaceLabel(raw.searchLabel || raw.modernName || raw.name);
  const coord = raw.lat != null && raw.lng != null ? `${Number(raw.lat).toFixed(5)},${Number(raw.lng).toFixed(5)}` : "unmapped";
  return slug(`${label}-${coord}`);
}

function geometryFor(raw) {
  if (raw.lat == null || raw.lng == null) {
    return { type: "unmapped" };
  }
  const type = precisionGeometry(raw);
  const geometry = {
    type,
    coordinates: [Number(raw.lng), Number(raw.lat)]
  };
  if (type !== "point") geometry.radiusMeters = radiusFor(raw, type);
  return geometry;
}

function precisionGeometry(raw) {
  if (raw.confidence === "ambiguous") return "area";
  if (raw.confidence === "likely") return "approximate";
  if (["regional", "area", "street_area", "district", "city"].includes(raw.precision)) return "area";
  if (["city", "district", "ambiguous_area", "mountain_range", "sea", "country", "city_memory"].includes(raw.type)) return "area";
  return "point";
}

function radiusFor(raw, type) {
  if (raw.geometry && raw.geometry.radiusMeters) return raw.geometry.radiusMeters;
  if (type === "area") {
    if (raw.type === "city" || raw.precision === "city") return 6500;
    if (raw.type === "country") return 200000;
    if (raw.type === "mountain_range" || raw.type === "sea") return 70000;
    if (raw.type === "district" || raw.precision === "district") return 2200;
    return 1200;
  }
  return raw.precision === "street_area" ? 700 : 420;
}

function precisionRank(raw) {
  const type = precisionGeometry(raw);
  if (type === "point") return 1;
  if (type === "approximate") return 2;
  return 3;
}

function cityFor(raw) {
  const label = raw.modernName || raw.searchLabel || raw.name || "";
  const pieces = label.split(/[，,\/]/).map((part) => part.trim()).filter(Boolean);
  if (pieces.length > 1) return pieces[0];
  if (raw.country === "日本") return workCities[raw.workId] || "日本";
  if (raw.country === "英国") return raw.workId === "dalloway" ? "伦敦及周边" : "英国";
  if (raw.country === "中国") return raw.workId === "chengnan" ? "北京" : "中国";
  if (raw.country === "越南") return label || "越南";
  return label || raw.country || "";
}

function cleanName(name) {
  return String(name || "").replace(/\s+/g, " ").trim();
}

function normalizePlaceLabel(label) {
  return String(label || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function slug(value) {
  return String(value || "place")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\u4e00-\u9fff.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

function unique(values) {
  return [...new Set(values.map((value) => String(value).trim()).filter(Boolean))];
}

function buildSceneModel(rawScenes, places) {
  const byRawId = new Map();
  places.forEach((place) => {
    place.rawIds.forEach((rawId) => byRawId.set(rawId, place));
  });
  return rawScenes.map((scene) => {
    const place = byRawId.get(scene.placeId);
    if (!place) return null;
    return {
      ...scene,
      placeId: place.id,
      rawPlaceId: scene.placeId,
      excerpts: (scene.excerpts || []).map((excerpt, index) => ({
        id: excerpt.id || `${scene.id}-excerpt-${index + 1}`,
        text: String(excerpt.text || "").trim(),
        kind: excerpt.kind || "narrative-scene",
        speaker: excerpt.speaker || "",
        language: excerpt.language || (scene.workId === "dalloway" ? "en" : "zh"),
        translation: excerpt.translation || "",
        original: excerpt.original || ""
      })).filter((excerpt) => excerpt.text)
    };
  }).filter(Boolean);
}


const raw = mergeDataAdditions(window.LOVER_MAP_DATA);
const places = buildPlaceModel(raw.places);
const scenes = buildSceneModel(raw.scenes, places);
const passageSearch = {};
for (const place of places) {
  passageSearch[place.id] = place.works.map(entry => entry.passages.map(
    passage => [passage.text, passage.translation || "", passage.context || ""].join(" ")
  ).join(" ")).join(" ").toLowerCase();
  place.works = place.works.map(({ workId, context, passages }) => ({
    workId, context, passageCount: passages.length
  }));
}
const firstWork = "chengnan";
const firstPlaces = places.filter(place => place.works.some(entry => entry.workId === firstWork));
const firstIds = new Set(firstPlaces.map(place => place.id));
const catalog = {
  works: raw.works, workCities, firstWork,
  placeCount: places.filter(place => place.geometry.coordinates).length,
  featuredCount: scenes.filter(scene => scene.featured).length,
  places: firstPlaces,
  scenes: scenes.filter(scene => scene.workId === firstWork)
};
const rest = {
  places: places.filter(place => !firstIds.has(place.id)),
  scenes: scenes.filter(scene => scene.workId !== firstWork)
};
function write(name, content) {
  fs.writeFileSync(path.join(__dirname, "..", name), content + "\n");
}
write("atlas-catalog.js", "window.ATLAS_CATALOG=" + JSON.stringify(catalog) + ";");
write("atlas-library.json", JSON.stringify(rest));
write("passage-search.json", JSON.stringify(passageSearch));
