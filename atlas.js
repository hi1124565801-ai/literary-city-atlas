const typeLabels = {
  city: "城市",
  district: "城区",
  town: "城镇",
  river_crossing: "渡口",
  river: "河流",
  ambiguous_area: "区域",
  coastal_place: "海岸",
  mountain_range: "山脉",
  city_site: "城市地点",
  street: "街道",
  island: "岛屿",
  coast: "海岸",
  sea: "海域",
  canal: "运河",
  transport_node: "交通节点",
  school: "学校",
  house: "住宅",
  threshold: "门槛",
  room: "房间",
  micro_scene: "微场景",
  vehicle_scene: "车辆",
  restaurant: "饭店",
  property_area: "房产区域",
  port: "港口",
  port_site: "港口地点",
  route_fragment: "路线片段",
  cafe: "咖啡馆",
  terrace: "平台",
  airport: "机场",
  library: "图书馆",
  station: "车站",
  park: "公园",
  waterfront: "水岸",
  slope: "坡道",
  bar: "酒吧",
  bookstore: "书店",
  sanatorium: "疗养院",
  pasture: "牧场",
  hutong: "胡同",
  well_site: "井窝子",
  gate: "城门",
  theater: "戏园",
  lane: "巷",
  venue: "场所",
  shop: "商铺",
  cemetery: "义地",
  road: "街路",
  former_site: "旧址",
  clock_tower: "钟楼",
  bookshop: "书店",
  flower_shop: "花店",
  royal_site: "王室地点",
  landmark: "地标",
  medical_street: "医疗街区",
  museum: "博物馆",
  memory_estate: "记忆庄园",
  country: "国家",
  city_memory: "记忆城市",
  square: "广场",
  police_station: "警署",
  pawnshop: "当铺",
  bank: "银行",
  noodle_shop: "面店",
  supermarket: "超市",
  apartment: "公寓",
  hotel: "酒店",
  office: "事务所",
  company: "公司",
  university: "大学",
  computer_shop: "电脑店",
  boutique: "精品店",
  textual_space: "文本空间",
  fictional_site: "虚构地点"
};

const zhWorkTitles = {
  lover: "情人",
  norwegian: "挪威的森林",
  byakuyako: "白夜行",
  chengnan: "城南旧事",
  dalloway: "达洛维夫人",
  qingcheng: "倾城之恋",
  yecao: "野草",
  solitude: "百年孤独"
};

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

const text = {
  documentTitle: "小说城市漫游图",
  navSubtitle: "文学 CityWalk",
  heroTitle: "小说城市漫游图",
  heroDek: "沿着小说中的地点，重新进入一座城市。",
  explorerEyebrow: "文学漫游",
  searchPlaceholder: "搜索地点、街道、作品或作者...",
  allWorks: "全部作品",
  allWorksAuthor: "跨作品地图",
  allWorksCity: "世界文学地点",
  places: "地点",
  works: "作品",
  passages: "幕场景",
  featuredScenes: "精选场景",
  allPlaces: "全部地点",
  storyMode: "按故事顺序漫游",
  storyIdle: "请先选择一个文学场景，再开始故事漫游。",
  notInStory: "这个地点暂未加入故事漫游。",
  firstScene: "已经是第一幕",
  lastScene: "已经是最后一幕",
  activeStoryPrefix: "正在按",
  routeAdded: "已加入我的漫游",
  routeRemoved: "已从我的漫游移除",
  addToRoute: "加入我的漫游",
  removeFromRoute: "移出我的漫游",
  previousScene: "上一幕",
  nextScene: "下一幕",
  navigatePoint: "导航到这里",
  navigateApproximate: "前往大致区域",
  navigateArea: "进入该区域",
  noMappedPlaces: "无法准确定位的地点",
  precisionApproximate: "大致位置",
  precisionArea: "区域范围",
  literaryContext: "场景介绍",
  placeNote: "地点说明",
  continueReading: "继续阅读这一幕",
  collapseReading: "收起引文",
  viewOriginal: "查看原文",
  viewTranslation: "查看译文",
  copyPlace: "复制地点名称",
  copied: "地点名称已复制",
  copyFailed: "复制失败",
  viewExternal: "在外部地图中查看",
  closeDetail: "关闭地点详情",
  fitAll: "显示全部地点",
  basemapLoading: "底图正在加载",
  basemapSwitched: "底图源已切换",
  basemapOffline: "底图暂时没有加载出来，文学地点仍可继续浏览。",
  collapsePanel: "折叠地点面板",
  expandPanel: "展开地点面板",
  expandSheet: "展开地点面板",
  collapseSheet: "收起地点面板",
  aboutTitle: "关于这张文学地图",
  aboutBody: "这张地图从小说中的空间出发，选取发生在城市中的相遇、独白、记忆、冲突与重要场景。地点并不只是故事的背景，也参与塑造人物如何感受、行动与回忆。",
  aboutCopyright: "在“精选漫游”中，你可以按照小说的叙事顺序阅读这些场景；遇到想亲自去看的地方，也可以加入“我的漫游”。小说原文与封面版权属于各自权利方；地图策展、地点说明和界面为本项目内容。",
  loadErrorTitle: "地图暂时没有渲染出来",
  loadErrorData: "地点数据没有加载成功。",
  loadErrorLeaflet: "地图库没有加载成功。请确认 vendor/leaflet/leaflet.js 存在。"
};

const geometryRadii = {
  point: 0,
  approximate: 520,
  area: 1250
};

const worldLatitudeLimit = 85.05112878;
const verticalWorldBounds = L.latLngBounds(
  [-worldLatitudeLimit, -10000],
  [worldLatitudeLimit, 10000]
);

const workThemes = {
  all: { accent: "#783e50", deep: "#5d2f3e", tint: "#eee2e2", pattern: "grid" },
  lover: { accent: "#7a4351", deep: "#5e303c", tint: "#f2e6e4", pattern: "river" },
  norwegian: { accent: "#596b5c", deep: "#3f5243", tint: "#e8ede5", pattern: "contour" },
  byakuyako: { accent: "#565d6d", deep: "#3e4554", tint: "#e8e9ed", pattern: "grid" },
  chengnan: { accent: "#a27646", deep: "#78542f", tint: "#f1e9da", pattern: "grid" },
  dalloway: { accent: "#687784", deep: "#4b5965", tint: "#e6ebed", pattern: "river" },
  qingcheng: { accent: "#8a4653", deep: "#66323d", tint: "#f1e3e4", pattern: "contour" },
  yecao: { accent: "#687166", deep: "#4d574c", tint: "#e8ebe4", pattern: "constellation" },
  solitude: { accent: "#997144", deep: "#72512f", tint: "#f0e7d8", pattern: "river" }
};

const baseLayerProviders = [
  {
    name: "OpenStreetMap",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    options: {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  },
  {
    name: "Esri Light Gray",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      maxZoom: 16,
      attribution: "Tiles &copy; Esri"
    }
  }
];

let map;
let data;
let atlasPlaces = [];
let unmappedPlaces = [];
let visiblePlaces = [];
let literaryScenes = [];
let selectedScopeMode = "featured";
let myRouteStops = [];
let myWalk = null;
let markers = new Map();
let renderedLayers = [];
let clusterFeatures = [];
let coverMarkers = [];
let baseLayer = null;
let baseLayerIndex = 0;
let baseLayerState = null;
let selectedWork = "all";
let selectedStory = "all";
let activeStoryWorkId = null;
let activeStoryTitle = null;
let selectedPlaceId = null;
let selectedSceneId = null;
let hoveredPlaceId = null;
let visiblePlaceIds = [];
let toastTimer = null;
let markerFlashTimer = null;
let markerFlashRequest = 0;
let sheetState = "half";
let mapWheelPanActive = false;
let mapWheelPanTimer = null;
let mapWheelPanFrame = null;
let mapWheelPanDelta = { x: 0, y: 0 };

const walkStorageKey = "literary-atlas-my-walk-v2";

const placeList = document.querySelector("#placeList");
const workTabs = document.querySelector("#workTabs");
const storyTabs = document.querySelector("#storyTabs");
const searchInput = document.querySelector("#search");
const scopeButtons = document.querySelectorAll("[data-scope-mode]");
const invitation = document.querySelector("#invitation");
const startScene = document.querySelector("#startScene");
const changeScene = document.querySelector("#changeScene");
const openingScenes = ["scene-cn-new-lianzi", "scene-md-big-ben", "scene-mekong-ferry"];
let invitationIndex = 0;
const routeStatus = document.querySelector("#routeStatus");
const stats = document.querySelector("#stats");
const bookCount = document.querySelector("#bookCount");
const shell = document.querySelector(".shell");
const panelToggle = document.querySelector("#panelToggle");
const sheetHandle = document.querySelector("#sheetHandle");
const detailCard = document.querySelector("#detailCard");
const sheetDetail = document.querySelector("#sheetDetail");
const toast = document.querySelector("#toast");
const aboutButton = document.querySelector("#aboutButton");
const aboutDrawer = document.querySelector("#aboutDrawer");
const walkEntry = document.querySelector("#walkEntry");
const walkEntryCount = document.querySelector("#walkEntryCount");
const mobileWalkCount = document.querySelector("#mobileWalkCount");
const walkDrawer = document.querySelector("#walkDrawer");
const walkPanelContent = document.querySelector("#walkPanelContent");
const bookshelf = document.querySelector("#bookshelf");
const mobileCurrentWork = document.querySelector("#mobileCurrentWork");
const mapWheelHint = document.querySelector("#mapWheelHint");
const mapTileStatus = document.querySelector("#mapTileStatus");
const photoViewer = document.querySelector("#photoViewer");
const photoViewerImage = document.querySelector("#photoViewerImage");
const photoViewerCaption = document.querySelector("#photoViewerCaption");
const mobileSheetKicker = document.querySelector("#mobileSheetKicker");
const mobileSheetTitle = document.querySelector("#mobileSheetTitle");

init().catch((error) => showFatal(error));

async function init() {
  if (!window.L) {
    throw new Error(text.loadErrorLeaflet);
  }
  data = await loadData();
  atlasPlaces = buildPlaceModel(data.places || []);
  literaryScenes = buildSceneModel(data.scenes || [], atlasPlaces);
  attachScenesToPlaces();
  unmappedPlaces = atlasPlaces.filter((place) => !place.geometry.coordinates);
  atlasPlaces = atlasPlaces.filter((place) => place.geometry.coordinates);
  loadMyWalk();
  setupMap();
  setupControls();
  applyStaticText();
  renderBookCount();
  buildBookshelf();
  render();
}

async function loadData() {
  if (window.LOVER_MAP_DATA) return mergeDataAdditions(window.LOVER_MAP_DATA);
  const response = await fetch("./data/lover-places.json");
  if (!response.ok) throw new Error(text.loadErrorData);
  return mergeDataAdditions(await response.json());
}

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

function showFatal(error) {
  document.body.classList.add("load-error");
  const message = document.createElement("div");
  message.className = "fatal";
  message.innerHTML = `
    <strong>${escapeHtml(text.loadErrorTitle)}</strong>
    <span>${escapeHtml(error.message || String(error))}</span>
  `;
  document.body.appendChild(message);
}

function setupMap() {
  map = L.map("map", {
    zoomControl: false,
    worldCopyJump: false,
    preferCanvas: true,
    dragging: true,
    scrollWheelZoom: false,
    doubleClickZoom: true,
    touchZoom: true,
    maxBounds: verticalWorldBounds,
    maxBoundsViscosity: 1,
    inertia: true,
    inertiaDeceleration: 2600,
    tap: false,
    wheelDebounceTime: 24,
    wheelPxPerZoomLevel: 84
  });
  const opening = placeById(sceneById(openingScenes[0])?.placeId);
  if (opening) map.setView(latLng(opening), 14);
  else map.fitWorld();
  window.__literaryMap = map;

  L.control.zoom({ position: "bottomright" }).addTo(map);
  setupMapWheelIsolation();
  setupBaseLayerFallback();

  map.on("click", (event) => {
    if (event.originalEvent && event.originalEvent.defaultPrevented) return;
    const cluster = nearestCluster(event.latlng);
    if (cluster) {
      zoomToCluster(cluster);
      return;
    }
    const place = nearestClickablePlace(event.latlng);
    if (place) {
      activatePlace(place.id, { keepZoom: true });
      return;
    }
    clearSelectedPlace();
  });

  map.on("moveend", () => {
    if (!mapWheelPanActive) renderMapLayers();
  });

  requestAnimationFrame(() => {
    map.invalidateSize();
    updateMapViewportLimits();
  });
  window.addEventListener("resize", () => {
    map.invalidateSize();
    updateMapViewportLimits();
    renderMapLayers();
  });
}

function updateMapViewportLimits() {
  if (!map) return;
  const containerHeight = Math.max(256, map.getContainer().clientHeight);
  const minimumWorldZoom = Math.max(2, Math.ceil(Math.log2(containerHeight / 256)));
  map.setMinZoom(minimumWorldZoom);
  if (map.getZoom() < minimumWorldZoom) map.setZoom(minimumWorldZoom, { animate: false });
  map.panInsideBounds(verticalWorldBounds, { animate: false });
}

function setupBaseLayerFallback() {
  baseLayerIndex = 0;
  setMapTileStatus(text.basemapLoading);
  mountBaseLayer(baseLayerIndex);
}

function mountBaseLayer(index) {
  if (!map || !baseLayerProviders[index]) return;
  if (baseLayer) {
    baseLayer.off();
    map.removeLayer(baseLayer);
  }

  const provider = baseLayerProviders[index];
  baseLayerState = {
    provider,
    started: 0,
    loaded: 0,
    errors: 0,
    settled: false,
    fallbackTimer: null
  };

  baseLayer = L.tileLayer(provider.url, {
    crossOrigin: true,
    updateWhenIdle: true,
    keepBuffer: 3,
    ...provider.options
  });

  baseLayer.on("tileloadstart", () => {
    if (!baseLayerState) return;
    baseLayerState.started += 1;
  });

  baseLayer.on("tileload", () => {
    if (!baseLayerState) return;
    baseLayerState.loaded += 1;
    baseLayerState.settled = true;
    setMapTileStatus("");
    document.querySelector(".map-stage")?.classList.remove("basemap-offline");
  });

  baseLayer.on("tileerror", () => {
    if (!baseLayerState) return;
    baseLayerState.errors += 1;
    if (baseLayerState.errors >= 5 && baseLayerState.loaded === 0) switchBaseLayerOrFallback();
  });

  baseLayer.on("loading", () => setMapTileStatus(text.basemapLoading));
  baseLayer.on("load", () => {
    if (!baseLayerState) return;
    if (baseLayerState.loaded > 0) setMapTileStatus("");
    else switchBaseLayerOrFallback();
  });

  baseLayerState.fallbackTimer = window.setTimeout(() => {
    if (!baseLayerState || baseLayerState.loaded > 0) return;
    switchBaseLayerOrFallback();
  }, 4200);

  baseLayer.addTo(map);
}

function switchBaseLayerOrFallback() {
  if (!baseLayerState || baseLayerState.settled) return;
  baseLayerState.settled = true;
  window.clearTimeout(baseLayerState.fallbackTimer);

  if (baseLayerIndex < baseLayerProviders.length - 1) {
    baseLayerIndex += 1;
    setMapTileStatus(text.basemapSwitched);
    window.setTimeout(() => mountBaseLayer(baseLayerIndex), 280);
    return;
  }

  setMapTileStatus(text.basemapOffline);
  document.querySelector(".map-stage")?.classList.add("basemap-offline");
}

function setMapTileStatus(message) {
  if (!mapTileStatus) return;
  mapTileStatus.textContent = message;
  mapTileStatus.classList.toggle("visible", Boolean(message));
}

function setupMapWheelIsolation() {
  const container = map.getContainer();
  const wheelState = {
    streamMode: null,
    streamUntil: 0,
    zoomDelta: 0,
    zoomPoint: null,
    zoomFrame: null
  };

  container.addEventListener("wheel", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const mode = classifyMapWheel(event, wheelState);
    if (mode === "pan") {
      queueMapPan(event.deltaX, event.deltaY);
      return;
    }

    queueMapZoom(event, mode, wheelState);
  }, { passive: false });

  container.addEventListener("mouseenter", () => {
    if (!mapWheelHint || sessionStorage.getItem("literary-atlas-wheel-hint")) return;
    mapWheelHint.classList.add("visible");
    sessionStorage.setItem("literary-atlas-wheel-hint", "1");
    window.setTimeout(() => mapWheelHint.classList.remove("visible"), 2600);
  }, { once: true });
}

function classifyMapWheel(event, state) {
  if (event.ctrlKey) return "pinch";
  if (event.deltaMode !== 0) return "mouse";

  const now = performance.now();
  const hasHorizontalIntent = Math.abs(event.deltaX) > 0.5;
  const hasPreciseVerticalDelta = Math.abs(event.deltaY) > 0 && Math.abs(event.deltaY) < 48;
  const continuesTrackpadStream = state.streamMode === "pan" && now < state.streamUntil;
  const mode = hasHorizontalIntent || hasPreciseVerticalDelta || continuesTrackpadStream ? "pan" : "mouse";
  state.streamMode = mode;
  state.streamUntil = now + (mode === "pan" ? 180 : 90);
  return mode;
}

function queueMapPan(deltaX, deltaY) {
  mapWheelPanDelta.x += deltaX;
  mapWheelPanDelta.y += deltaY;
  mapWheelPanActive = true;
  clearTimeout(mapWheelPanTimer);
  mapWheelPanTimer = window.setTimeout(() => {
    mapWheelPanActive = false;
    renderMapLayers();
  }, 120);

  if (mapWheelPanFrame) return;
  mapWheelPanFrame = requestAnimationFrame(() => {
    const offset = L.point(mapWheelPanDelta.x, mapWheelPanDelta.y);
    mapWheelPanDelta = { x: 0, y: 0 };
    mapWheelPanFrame = null;
    if (offset.x || offset.y) map.panBy(offset, { animate: false, noMoveStart: true });
  });
}

function queueMapZoom(event, mode, state) {
  const multiplier = event.deltaMode === 1 ? 36 : event.deltaMode === 2 ? 360 : 1;
  state.zoomDelta += event.deltaY * multiplier;
  const bounds = map.getContainer().getBoundingClientRect();
  state.zoomPoint = L.point(event.clientX - bounds.left, event.clientY - bounds.top);
  if (state.zoomFrame) return;

  state.zoomFrame = requestAnimationFrame(() => {
    const threshold = mode === "pinch" ? 24 : 72;
    const steps = Math.max(-2, Math.min(2, Math.trunc(state.zoomDelta / threshold)));
    if (steps) {
      const nextZoom = Math.max(map.getMinZoom(), Math.min(map.getMaxZoom(), map.getZoom() - steps));
      map.setZoomAround(state.zoomPoint, nextZoom);
      state.zoomDelta -= steps * threshold;
    }
    state.zoomFrame = null;
  });
}

function setupControls() {
  document.querySelector("#fitAll").addEventListener("click", () => fitAllVisible());
  setupPanelToggle();
  setupAboutDrawer();
  setupSheetHandle();
  setupDetailInteractions();
  setupModeControls();
  document.querySelector("#openShelf").addEventListener("click", openBookshelf);
  document.querySelector("#closeShelf").addEventListener("click", () => bookshelf.close());
  bookshelf.addEventListener("click", event => {
    if (event.target !== bookshelf) return;
    const rect = bookshelf.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) bookshelf.close();
  });
  setupWalkDrawer();
  setupMobileNavigation();
  bookshelf.addEventListener("close", syncMobileNav);
  setupPhotoViewer();
  changeScene.addEventListener("click", () => {
    invitationIndex++;
    renderInvitation();
    const place = placeById(sceneById(startScene.dataset.scene)?.placeId);
    if (place && !selectedPlaceId) {
      const zoom = zoomFor(place);
      map.setView(latLng(place), zoom);
    }
  });
  startScene.addEventListener("click", () => {
    const scene = sceneById(startScene.dataset.scene);
    if (!scene) return;
    selectedWork = scene.workId;
    render();
    selectScene(scene.id, { zoom: true, flash: true });
    const detail = window.matchMedia("(max-width: 767px)").matches ? sheetDetail : detailCard;
    detail.querySelector("[data-detail-close]")?.focus({ preventScroll: true });
  });
  searchInput.addEventListener("input", render);
  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || bookshelf.open) return;
    if (photoViewer.classList.contains("open")) setPhotoViewerOpen(false);
    else if (walkDrawer.classList.contains("open")) setWalkOpen(false);
    else if (aboutDrawer.classList.contains("open")) setAboutOpen(false);
    else clearSelectedPlace();
  });
}

function setupModeControls() {
  scopeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedScopeMode = button.dataset.scopeMode || "featured";
      selectedPlaceId = null;
      selectedSceneId = null;
      render();
      fitAllVisible();
    });
  });
}

function setupDetailInteractions() {
  [detailCard, sheetDetail].filter(Boolean).forEach((target) => {
    ["click", "dblclick", "pointerdown", "touchstart", "wheel"].forEach((type) => {
      target.addEventListener(type, (event) => event.stopPropagation(), { passive: type !== "wheel" });
    });
  });
  setupSheetDragClose();
}

function setupSheetDragClose() {
  if (!sheetDetail) return;
  sheetDetail.addEventListener("pointerdown", (event) => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    if (!event.target.closest(".place-detail-header") || event.target.closest("button, a")) return;
    event.stopPropagation();
  });
}

function setupAboutDrawer() {
  if (!aboutButton || !aboutDrawer) return;
  aboutButton.addEventListener("click", () => setAboutOpen(true));
  aboutDrawer.querySelectorAll("[data-about-close]").forEach((element) => {
    element.addEventListener("click", () => setAboutOpen(false));
  });

}

function setAboutOpen(open) {
  if (!aboutDrawer) return;
  aboutDrawer.classList.toggle("open", open);
  aboutDrawer.setAttribute("aria-hidden", String(!open));
  syncMobileNav();
}

function setupSheetHandle() {
  if (!sheetHandle || !shell) return;
  let startY = 0;
  let lastY = 0;
  let pointerId = null;
  let dragged = false;
  let ignoreClick = false;

  sheetHandle.addEventListener("pointerdown", (event) => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    pointerId = event.pointerId;
    startY = event.clientY;
    lastY = event.clientY;
    dragged = false;
    sheetHandle.setPointerCapture(event.pointerId);
    shell.classList.add("sheet-dragging");
  });
  const trackDrag = (event) => {
    if (pointerId !== event.pointerId) return;
    lastY = event.clientY;
    const delta = event.clientY - startY;
    if (Math.abs(delta) > 6) dragged = true;
    shell.style.setProperty("--sheet-drag-y", `${delta}px`);
  };
  window.addEventListener("pointermove", trackDrag);
  const finishDrag = (event) => {
    if (pointerId == null || (event.pointerId != null && pointerId !== event.pointerId)) return;
    const delta = (event.clientY || lastY) - startY;
    shell.classList.remove("sheet-dragging");
    shell.style.removeProperty("--sheet-drag-y");
    pointerId = null;
    if (dragged) {
      ignoreClick = true;
      if (delta < -72) setSheetState(sheetState === "collapsed" ? "half" : "expanded");
      else if (delta > 110) setSheetState(sheetState === "expanded" ? "half" : "collapsed");
      window.setTimeout(() => { ignoreClick = false; }, 0);
    }
    dragged = false;
  };
  sheetHandle.addEventListener("pointerup", finishDrag);
  sheetHandle.addEventListener("pointercancel", finishDrag);
  sheetHandle.addEventListener("lostpointercapture", finishDrag);
  window.addEventListener("pointerup", finishDrag);
  window.addEventListener("pointercancel", finishDrag);
  sheetHandle.addEventListener("click", () => {
    if (ignoreClick) return;
    setSheetState(sheetState === "half" ? "expanded" : "half");
  });
  setSheetState("half");
}

function setSheetState(nextState) {
  if (!shell) return;
  sheetState = ["collapsed", "half", "expanded"].includes(nextState) ? nextState : "half";
  shell.classList.toggle("sheet-collapsed", sheetState === "collapsed");
  shell.classList.toggle("sheet-half", sheetState === "half");
  shell.classList.toggle("sheet-expanded", sheetState === "expanded");
  updateSheetHandleLabel();
  if (map) map.invalidateSize();
}

function applyStaticText() {
  document.documentElement.lang = "zh-CN";
  document.title = text.documentTitle;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (text[key]) element.textContent = text[key];
  });
  searchInput.placeholder = text.searchPlaceholder;
  const fitAll = document.querySelector("#fitAll");
  fitAll.title = text.fitAll;
  fitAll.setAttribute("aria-label", text.fitAll);
  if (aboutButton) {
    aboutButton.title = text.aboutTitle;
    aboutButton.setAttribute("aria-label", text.aboutTitle);
  }
  updatePanelToggleLabel();
  updateSheetHandleLabel();
}

function setupPanelToggle() {
  if (!panelToggle || !shell) return;
  panelToggle.addEventListener("click", () => {
    setPanelCollapsed(!shell.classList.contains("panel-collapsed"));
  });
}

function setPanelCollapsed(collapsed) {
  if (!panelToggle || !shell) return;
  shell.classList.toggle("panel-collapsed", collapsed);
  updatePanelToggleLabel();
  requestAnimationFrame(() => {
    map.invalidateSize();
    setTimeout(() => map.invalidateSize(), 240);
  });
}

function updatePanelToggleLabel() {
  if (!panelToggle || !shell) return;
  const collapsed = shell.classList.contains("panel-collapsed");
  panelToggle.setAttribute("aria-expanded", String(!collapsed));
  panelToggle.setAttribute("aria-label", collapsed ? text.expandPanel : text.collapsePanel);
  panelToggle.setAttribute("title", collapsed ? text.expandPanel : text.collapsePanel);
}

function updateSheetHandleLabel() {
  if (!sheetHandle || !shell) return;
  const expanded = sheetState === "expanded";
  sheetHandle.setAttribute("aria-label", expanded ? text.collapseSheet : text.expandSheet);
  sheetHandle.setAttribute("title", expanded ? text.collapseSheet : text.expandSheet);
  sheetHandle.setAttribute("aria-valuetext", sheetState);
}

function openBookshelf() {
  bookshelf.showModal();
  syncMobileNav();
  workTabs.querySelector('[aria-pressed="true"]')?.focus({ preventScroll: true });
}

function syncMobileNav() {
  const current = bookshelf.open ? "works" : walkDrawer.classList.contains("open") ? "walk" : aboutDrawer.classList.contains("open") ? "about" : "map";
  document.querySelectorAll("[data-mobile-view]").forEach(button => {
    const active = button.dataset.mobileView === current;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
}

function setupMobileNavigation() {
  syncMobileNav();
  document.querySelector('[data-mobile-view="works"]').addEventListener("click", openBookshelf);
  document.querySelector("#mobileWorkButton").addEventListener("click", openBookshelf);
  document.querySelector('[data-mobile-view="map"]').addEventListener("click", () => setSheetState("collapsed"));
  document.querySelector('[data-mobile-view="walk"]').addEventListener("click", () => setWalkOpen(true));
  document.querySelector('[data-mobile-view="about"]').addEventListener("click", () => setAboutOpen(true));
  document.querySelector("#mobileSearchButton").addEventListener("click", () => {
    clearSelectedPlace();
    setSheetState("expanded");
    requestAnimationFrame(() => searchInput.focus());
  });
}

function setupPhotoViewer() {
  if (!photoViewer) return;
  photoViewer.querySelectorAll("[data-photo-close]").forEach((element) => {
    element.addEventListener("click", () => setPhotoViewerOpen(false));
  });
}

function render() {
  applyWorkTheme();
  visiblePlaces = orderedPlaces(filteredPlaces());
  visiblePlaceIds = visiblePlaces.map((place) => place.id);
  if (selectedPlaceId && !visiblePlaceIds.includes(selectedPlaceId)) {
    selectedPlaceId = null;
    selectedSceneId = null;
  }
  updateModeControls();
  renderStats(visiblePlaces);
  renderWorkTabs();
  renderStoryTabs();
  renderInvitation();
  renderRouteStatus();
  renderWalkSummary();
  renderMobileSheetSummary();
  renderMapLayers();
  renderCoverMarkers(visiblePlaces);
  renderList(visiblePlaces);
  renderDetail(selectedPlaceId ? atlasPlaces.find((place) => place.id === selectedPlaceId) : null);
}

function renderInvitation() {
  const scenes = selectedWork === "all"
    ? openingScenes.map(sceneById).filter(Boolean)
    : featuredScenesForCurrentWork().sort((a, b) => sceneSortValue(a) - sceneSortValue(b));
  const readable = scenes.filter(scene => visiblePlaceIds.includes(scene.placeId));
  invitation.hidden = selectedScopeMode !== "featured" || Boolean(searchInput.value.trim()) || !readable.length;
  if (invitation.hidden) return;
  const scene = readable[invitationIndex % readable.length];
  const place = placeById(scene.placeId);
  document.querySelector("#invitationTitle").textContent = scene.sceneTitle;
  document.querySelector("#invitationSource").textContent = sceneSourceLabel(scene) + " · " + (place.city || place.name);
  startScene.dataset.scene = scene.id;
  startScene.setAttribute("aria-label", "读这一幕：" + scene.sceneTitle);
  changeScene.hidden = readable.length < 2;
}

function renderMobileSheetSummary() {
  const place = selectedPlaceId ? placeById(selectedPlaceId) : null;
  const scene = selectedSceneId ? sceneById(selectedSceneId) : null;
  if (mobileSheetKicker) mobileSheetKicker.textContent = place ? (place.city || "文学地点") : `${visiblePlaces.length} 个文学地点`;
  if (mobileSheetTitle) mobileSheetTitle.textContent = place ? (scene?.sceneTitle || place.name) : "向上滑动浏览地点与场景";
}

function selectScene(sceneId, options = {}) {
  const scene = sceneById(sceneId);
  if (!scene) return false;
  selectedSceneId = scene.id;
  selectedPlaceId = scene.placeId;
  setActiveStoryScope(scene);
  const place = placeById(scene.placeId);
  if (!place) return false;
  focusSelectedPlace(place, options);
  return true;
}

function filteredPlaces() {
  const query = searchInput.value.trim().toLowerCase();
  const basePlaces = selectedScopeMode === "featured"
    ? placesFromScenes(featuredScenesForCurrentWork())
    : atlasPlaces;

  return basePlaces.filter(place => matchesPlace(place, query));
}

function matchesPlace(place, query) {
  const workMatch = selectedWork === "all" || place.works.some((entry) => entry.workId === selectedWork);
  const storyMatch = selectedStory === "all" || place.scenes.some((scene) => sceneMatchesCurrentSelection(scene));
  if (!workMatch || !storyMatch) return false;
  if (!query) return true;
  const haystack = [
    place.name,
    place.aliases.join(" "),
    place.city,
    place.country,
    place.searchLabel,
    place.scenes.map((scene) => `${scene.storyTitle || ""} ${scene.sceneTitle} ${scene.sceneIntro} ${scene.excerpts.map((excerpt) => `${excerpt.text} ${excerpt.translation || ""}`).join(" ")}`).join(" "),
    place.works.map((entry) => [
      workTitle(entry.workId),
      workOriginalTitle(entry.workId),
      workAuthor(entry.workId),
      entry.context,
      entry.passages.map((passage) => `${passage.text} ${passage.translation || ""} ${passage.context || ""}`).join(" ")
    ].join(" ")).join(" ")
  ].join(" ").toLowerCase();
  return haystack.includes(query);
}

function orderedPlaces(places) {
  return places.slice().sort((a, b) => {
    const aw = minSceneOrder(a);
    const bw = minSceneOrder(b);
    if (aw !== bw) return aw - bw;
    return b.works.length - a.works.length || a.name.localeCompare(b.name, "zh-Hans-CN");
  });
}

function placesFromScenes(scenes) {
  const ids = new Set(scenes.map((scene) => scene.placeId));
  return atlasPlaces.filter((place) => ids.has(place.id));
}

function featuredScenesForCurrentWork() {
  return literaryScenes.filter((scene) => scene.featured && sceneMatchesCurrentSelection(scene));
}

function minSceneOrder(place) {
  const scenes = place.scenes.filter((scene) => sceneMatchesCurrentSelection(scene));
  if (scenes.length) return Math.min(...scenes.map((scene) => sceneSortValue(scene)));
  return minWorkOrder(place);
}

function sceneSortValue(scene) {
  const workOffset = selectedWork === "all" ? workOrder(scene.workId) * 1000 : 0;
  return workOffset + (scene.narrativeOrder || 999);
}

function minWorkOrder(place) {
  const works = data.works || [];
  return Math.min(...place.works.map((entry) => works.findIndex((work) => work.id === entry.workId)).filter((index) => index >= 0), 999);
}

function renderStats(places) {
  const workCount = new Set(places.flatMap((place) => place.works.map((entry) => entry.workId))).size;
  const sceneCount = scenesForPlaces(places).filter((scene) => selectedScopeMode !== "featured" || scene.featured).length;
  stats.innerHTML = `
    <div class="stat"><strong>${places.length}</strong><span>${escapeHtml(text.places)}</span></div>
    <div class="stat"><strong>${workCount}</strong><span>${escapeHtml(text.works)}</span></div>
    <div class="stat"><strong>${sceneCount}</strong><span>${escapeHtml(text.passages)}</span></div>
  `;
}

function renderBookCount() {
  const works = (data.works || []).filter((work) => work.id !== "all");
  const collectionCount = works.filter((work) => Array.isArray(work.stories) && work.stories.length).length;
  const novelCount = works.length - collectionCount;
  const featuredCount = literaryScenes.filter((scene) => scene.featured).length;
  const workText = collectionCount
    ? `${novelCount} 本小说 · ${collectionCount} 部作品集`
    : `${novelCount} 本小说`;
  if (bookCount) bookCount.innerHTML = `<strong>${featuredCount}</strong> 个精选场景 <span>${escapeHtml(workText)} · ${atlasPlaces.length} 个文学地点</span>`;
}

function coverAttributes(work, sizes) {
  const src = escapeAttr(work.cover);
  if (!work.coverThumb) return `src="${src}"`;
  return `src="${src}" srcset="${escapeAttr(work.coverThumb)} 96w, ${src} ${work.coverWidth}w" sizes="${sizes}"`;
}

function buildBookshelf() {
  const works = data.works || [{ id: "all", title: "全部作品" }];
  works.forEach((work) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "shelf-book";
    button.dataset.work = work.id;
    const theme = themeForWork(work.id);
    button.style.setProperty("--work-accent", theme.accent);
    button.style.setProperty("--work-tint", theme.tint);
    const cover = work.id === "all"
      ? ""
      : `<img ${coverAttributes(work, "(max-width: 767px) 33px, 45px")} alt="" width="52" height="70" loading="lazy" />`;
    button.innerHTML = `${cover}<span><strong>${escapeHtml(workTitle(work.id))}</strong>
      ${work.author ? `<small>${escapeHtml(work.author)}</small>` : ""}
      ${workCities[work.id] ? `<small>${escapeHtml(workCities[work.id])}</small>` : ""}
      </span>`;
    button.addEventListener("click", () => {
      bookshelf.close();
      searchInput.value = "";
      invitationIndex = 0;
      selectedWork = work.id;
      selectedPlaceId = null;
      selectedSceneId = null;
      selectedStory = "all";
      activeStoryWorkId = work.id === "all" ? null : work.id;
      activeStoryTitle = null;
      if (window.matchMedia("(max-width: 767px)").matches) setSheetState("half");
      render();
      fitAllVisible();
    });
    workTabs.appendChild(button);
  });
}

function renderWorkTabs() {
  for (const button of workTabs.children) {
    button.setAttribute("aria-pressed", String(button.dataset.work === selectedWork));
  }
  const works = data.works;
  mobileCurrentWork.textContent = selectedWork === "all" ? text.allWorks : workTitle(selectedWork);
  document.querySelector("#shelfSelection").textContent = mobileCurrentWork.textContent;
  const covers = selectedWork === "all" ? works.filter(work => work.cover).slice(0, 3) : [workById(selectedWork)];
  document.querySelector("#shelfSample").innerHTML = covers.map(work => `<img ${coverAttributes(work, "23px")} alt="" />`).join("");
}

function themeForWork(workId) {
  return workThemes[workId] || workThemes.all;
}

function applyWorkTheme() {
  const theme = themeForWork(selectedWork);
  const root = document.documentElement;
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-dark", theme.deep);
  root.style.setProperty("--work-tint", theme.tint);
  document.querySelector(".app-shell")?.setAttribute("data-atlas-pattern", theme.pattern);
}

function renderStoryTabs() {
  if (!storyTabs) return;
  const work = workById(selectedWork);
  const stories = work && Array.isArray(work.stories) ? work.stories : [];
  storyTabs.hidden = !stories.length;
  storyTabs.innerHTML = "";
  if (!stories.length) return;

  ["all", ...stories].forEach((storyTitle) => {
    const button = document.createElement("button");
    const isAll = storyTitle === "all";
    button.type = "button";
    button.className = selectedStory === storyTitle ? "active" : "";
    button.setAttribute("aria-pressed", String(selectedStory === storyTitle));
    button.innerHTML = isAll
      ? `<strong>全部篇目</strong><span>${escapeHtml(work.collectionCountLabel || `${stories.length} 篇`)}</span>`
      : `<strong>〈${escapeHtml(storyTitle)}〉</strong><span>${literaryScenes.filter((scene) => scene.workId === selectedWork && scene.storyTitle === storyTitle && scene.featured).length} 幕</span>`;
    button.addEventListener("click", () => {
      invitationIndex = 0;
      selectedStory = storyTitle;
      selectedPlaceId = null;
      selectedSceneId = null;
      activeStoryWorkId = selectedWork;
      activeStoryTitle = isAll ? null : storyTitle;
      render();
      fitAllVisible();
    });
    storyTabs.appendChild(button);
  });
}

function sceneMatchesCurrentSelection(scene) {
  const workMatch = selectedWork === "all" || scene.workId === selectedWork;
  const storyMatch = selectedStory === "all" || scene.storyTitle === selectedStory;
  return workMatch && storyMatch;
}

function sceneSourceLabel(scene) {
  if (!scene) return "";
  const collection = workById(scene.workId);
  const workLabel = `《${workTitle(scene.workId)}》${collection && collection.format ? collection.format : ""}`;
  return scene.storyTitle ? `${workLabel} · 〈${scene.storyTitle}〉` : workLabel;
}

function renderMapLayers() {
  clearMapLayers();
  markers = new Map();
  clusterFeatures = [];
  if (!map || !visiblePlaces.length) return;

  // Cluster the full set so counts remain stable at the viewport edges.
  const bounds = map.getBounds().pad(0.4);
  const clustered = clusteredPlaces(visiblePlaces);
  for (const cluster of clustered.clusters) {
    if (bounds.contains([cluster.lat, cluster.lng])) renderCluster(cluster);
  }
  for (const place of clustered.places) {
    if (place.id === selectedPlaceId || bounds.contains(latLng(place))) renderPlaceGeometry(place);
  }
  updateMarkerVisuals();
}

function clearMapLayers() {
  renderedLayers.forEach((layer) => layer.remove());
  renderedLayers = [];
}

function clusteredPlaces(places) {
  const zoom = map.getZoom();
  const spiderZoom = zoom >= 16;
  const byCoord = new Map();
  places.forEach((place) => {
    const key = coordinateKey(place.geometry.coordinates, 6);
    if (!byCoord.has(key)) byCoord.set(key, []);
    byCoord.get(key).push(place);
  });

  const spiderPlaces = [];
  const clusterCandidates = [];
  const pinnedPlaces = [];
  byCoord.forEach((group) => {
    if (group.length > 1 && spiderZoom) {
      spiderPlaces.push(...spiderfyGroup(group));
    } else {
      group.forEach((place) => {
        if (place.id === selectedPlaceId || place.id === hoveredPlaceId) pinnedPlaces.push(place);
        else clusterCandidates.push(place);
      });
    }
  });

  if (zoom >= 13) {
    return { clusters: [], places: [...clusterCandidates, ...spiderPlaces, ...pinnedPlaces] };
  }

  const grid = zoom < 5 ? 92 : zoom < 8 ? 78 : 64;
  const buckets = new Map();
  clusterCandidates.forEach((place) => {
    const point = map.latLngToContainerPoint(latLng(place));
    const key = `${Math.floor(point.x / grid)}:${Math.floor(point.y / grid)}`;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(place);
  });

  const clusters = [];
  const singles = [];
  buckets.forEach((group) => {
    if (group.length > 1) clusters.push(makeCluster(group));
    else singles.push(group[0]);
  });
  return { clusters, places: [...singles, ...spiderPlaces, ...pinnedPlaces] };
}

function makeCluster(group) {
  const lat = group.reduce((sum, place) => sum + place.geometry.coordinates[1], 0) / group.length;
  const lng = group.reduce((sum, place) => sum + place.geometry.coordinates[0], 0) / group.length;
  const works = new Set(group.flatMap((place) => place.works.map((entry) => entry.workId)));
  return { id: group.map((place) => place.id).join("|"), places: group, lat, lng, workCount: works.size };
}

function renderCluster(cluster) {
  const marker = L.marker([cluster.lat, cluster.lng], {
    interactive: false,
    keyboard: false,
    icon: L.divIcon({
      className: "atlas-cluster",
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      html: `<span>${cluster.places.length}</span>`
    }),
    zIndexOffset: 700
  }).addTo(map);
  renderedLayers.push(marker);
  clusterFeatures.push({ cluster, marker });
}

function renderPlaceGeometry(place) {
  const geometryType = place.geometry.type;
  if (selectedPlaceId === place.id && (geometryType === "area" || geometryType === "approximate")) {
    const range = L.circle(latLng(place), {
      radius: place.geometry.radiusMeters || geometryRadii[geometryType],
      color: themeForWork(selectedWork).deep,
      weight: 1.5,
      dashArray: "5 4",
      fillOpacity: 0.07,
      interactive: false,
      className: `location-range ${geometryType}-range`
    }).addTo(map);
    renderedLayers.push(range);
  }

  if (place.spider && place.spider.origin) {
    const line = L.polyline([place.spider.origin, latLng(place)], {
      interactive: false,
      className: "spider-line",
      weight: 1
    }).addTo(map);
    renderedLayers.push(line);
  }

  const marker = L.marker(latLng(place), {
    interactive: false,
    keyboard: false,
    icon: markerIcon(place),
    zIndexOffset: selectedPlaceId === place.id ? 1400 : 400
  }).addTo(map);
  markers.set(place.id, marker);
  renderedLayers.push(marker);
}

function markerIcon(place) {
  const routeOrder = routeStopOrder(place.id);
  const count = place.scenes.filter((scene) => sceneMatchesCurrentSelection(scene)).length ||
    place.works.reduce((sum, entry) => sum + Math.max(1, entry.passages.length), 0);
  const classes = [
    "atlas-marker",
    `geometry-${place.geometry.type}`,
    selectedPlaceId === place.id ? "active" : "",
    hoveredPlaceId === place.id ? "hover" : "",
    routeOrder ? "in-route" : "",
    place.spider ? "spider" : ""
  ].filter(Boolean).join(" ");
  return L.divIcon({
    className: classes,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    html: `<span class="pin">${escapeHtml(routeOrder ? String(routeOrder) : count > 1 ? String(count) : "")}</span>
      ${selectedPlaceId === place.id ? `<span class="reading-place-label">${escapeHtml(place.name)}</span>` : ""}`
  });
}

function updateMarkerVisuals() {
  markers.forEach((marker, placeId) => {
    const element = marker.getElement();
    if (!element) return;
    element.classList.toggle("active", selectedPlaceId === placeId);
    element.classList.toggle("hover", hoveredPlaceId === placeId);
    marker.setZIndexOffset(selectedPlaceId === placeId || hoveredPlaceId === placeId ? 1400 : 400);
  });
}

function renderCoverMarkers(places) {
  coverMarkers.forEach((marker) => marker.remove());
  coverMarkers = [];

  const visibleWorkIds = new Set(places.flatMap((place) => place.works.map((entry) => entry.workId)));
  const works = (data.works || []).filter((work) => work.id !== "all" && work.cover && visibleWorkIds.has(work.id));

  works.forEach((work) => {
    const anchor = places.find((place) => place.rawIds.includes(work.coverAnchorPlaceId)) ||
      atlasPlaces.find((place) => place.rawIds.includes(work.coverAnchorPlaceId)) ||
      places.find((place) => place.works.some((entry) => entry.workId === work.id));
    if (!anchor || !anchor.geometry.coordinates) return;
    const offset = Array.isArray(work.coverOffset) ? work.coverOffset : [0, 0];

    const marker = L.marker(latLng(anchor), {
      interactive: false,
      keyboard: false,
      icon: L.divIcon({
        className: "book-cover-icon",
        iconSize: [96, 128],
        iconAnchor: [48, 116],
        html: `
          <span class="cover-pin" style="--pin-color:${escapeAttr(work.color || "#171a17")};--cover-x:${escapeAttr(offset[0])}px;--cover-y:${escapeAttr(offset[1])}px">
            <img ${coverAttributes(work, "(max-width: 767px) 44px, 64px")} alt="${escapeAttr(workTitle(work.id))} 封面" loading="lazy" />
            <span class="cover-title">${escapeHtml(workTitle(work.id))}</span>
          </span>
        `
      }),
      zIndexOffset: 950
    }).addTo(map);
    coverMarkers.push(marker);
  });
}

function renderList(places) {
  const previousScrollTop = placeList.scrollTop;
  const cards = document.createDocumentFragment();
  places.forEach((place) => {
    const scene = primarySceneForPlace(place);
    const card = document.createElement("article");
    card.className = `place-card ${selectedPlaceId === place.id ? "active" : ""}`;
    card.dataset.placeId = place.id;
    if (scene) card.dataset.sceneId = scene.id;
    card.tabIndex = 0;
    const sceneWork = scene ? sceneSourceLabel(scene) : place.works.map((entry) => `《${workTitle(entry.workId)}》`).join(" · ");
    const added = isInRoute(place.id, scene && scene.id);
    const sceneLabel = scene ? scene.sceneTitle : "小说中的地点";
    const intro = scene ? scene.sceneIntro : placeSceneIntro(place);
    const routeOrder = routeStopOrder(place.id);
    card.innerHTML = `
      <span class="place-index geometry-${place.geometry.type}" aria-hidden="true">${routeOrder ? escapeHtml(String(routeOrder)) : ""}</span>
      <div class="place-content">
        <h3>${escapeHtml(place.name)}<span class="modern">${escapeHtml(sceneLabel)}</span></h3>
        <div class="meta">
          <span>${escapeHtml(sceneWork)}</span>
          <span>${escapeHtml(place.city)}${place.country ? ` · ${escapeHtml(place.country)}` : ""}</span>
          ${added ? `<span>${escapeHtml(text.routeAdded)}</span>` : ""}
        </div>
        <p class="summary">${escapeHtml(intro || place.context || place.note || "")}</p>
      </div>
    `;
    card.addEventListener("click", () => activatePlace(place.id, { sceneId: scene && scene.id, source: "list", flash: true }));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activatePlace(place.id, { sceneId: scene && scene.id, source: "list", flash: true });
      }
    });
    card.addEventListener("mouseenter", () => {
      hoveredPlaceId = place.id;
      updateMarkerVisuals();
    });
    card.addEventListener("mouseleave", () => {
      if (hoveredPlaceId === place.id) {
        hoveredPlaceId = null;
        updateMarkerVisuals();
      }
    });
    cards.appendChild(card);
  });
  placeList.replaceChildren(cards);

  const query = searchInput.value.trim().toLowerCase();
  const unmapped = unmappedPlaces.filter(place => matchesPlace(place, query));
  renderUnmappedList(unmapped);
  if (query && !places.length && !unmapped.length) {
    const empty = document.createElement("div");
    empty.className = "empty-places";
    empty.innerHTML = '<p>当前范围内没有匹配的地点。</p><button type="button">清除搜索</button>';
    empty.querySelector("button").addEventListener("click", () => {
      searchInput.value = "";
      render();
      searchInput.focus();
    });
    placeList.appendChild(empty);
  }
  requestAnimationFrame(() => {
    placeList.scrollTop = previousScrollTop;
  });
}

function renderUnmappedList(places) {
  if (!places.length) return;
  const details = document.createElement("details");
  details.className = "unmapped-list";
  details.innerHTML = `
    <summary>${escapeHtml(text.noMappedPlaces)} · ${places.length}</summary>
    ${places.map((place) => `
      <article>
        <strong>${escapeHtml(place.name)}</strong>
        <span>${escapeHtml(place.works.map((entry) => `《${workTitle(entry.workId)}》`).join(" · "))}</span>
        <p>${escapeHtml(placeSceneIntro(place))}</p>
      </article>
    `).join("")}
  `;
  placeList.appendChild(details);
}

function activatePlace(placeId, options = {}) {
  const place = atlasPlaces.find((item) => item.id === placeId);
  if (!place) return;
  const sceneId = options.sceneId || selectedSceneIdForPlace(place);

  if (selectedPlaceId === placeId && (!options.sceneId || selectedSceneId === sceneId)) {
    clearSelectedPlace();
    return;
  }

  selectedPlaceId = placeId;
  selectedSceneId = sceneId;
  const scene = sceneById(sceneId);
  if (scene) setActiveStoryScope(scene);
  else if (!sceneId) activeStoryWorkId = selectedWork === "all" ? null : selectedWork;
  focusSelectedPlace(place, options);
}

function focusSelectedPlace(place, options = {}) {
  document.querySelectorAll(".place-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.placeId === place.id);
  });
  const activeCard = document.querySelector(`.place-card[data-place-id="${CSS.escape(place.id)}"]`);
  if (activeCard && !(shell && shell.classList.contains("panel-collapsed"))) {
    activeCard.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  if (shell && window.matchMedia("(max-width: 767px)").matches) {
    setSheetState("half");
  }

  renderMapLayers();
  if (options.zoom === true) {
    const zoom = zoomFor(place);
    map.setView(latLng(place), zoom, { animate: true });
  } else if (!options.skipPan) {
    map.panTo(latLng(place), { animate: true });
  }
  renderDetail(place);
  renderMobileSheetSummary();
  renderRouteStatus();
  updateMarkerVisuals();
  if (options.flash) flashPlaceMarker(place.id);
}

function flashPlaceMarker(placeId) {
  const requestId = ++markerFlashRequest;
  let flashed = false;
  const applyFlash = () => {
    if (flashed || requestId !== markerFlashRequest) return;
    const marker = markers.get(placeId);
    const element = marker && marker.getElement();
    if (!element) return;
    flashed = true;
    clearTimeout(markerFlashTimer);
    element.classList.remove("flash");
    void element.offsetWidth;
    element.classList.add("flash");
    markerFlashTimer = window.setTimeout(() => element.classList.remove("flash"), 1100);
  };

  map.once("moveend", () => requestAnimationFrame(applyFlash));
  window.setTimeout(applyFlash, 380);
}

function clearSelectedPlace() {
  if (!selectedPlaceId) return;
  selectedPlaceId = null;
  selectedSceneId = null;
  activeStoryWorkId = selectedWork === "all" ? null : selectedWork;
  activeStoryTitle = selectedStory === "all" ? null : selectedStory;
  document.querySelectorAll(".place-card.active").forEach((card) => card.classList.remove("active"));
  renderDetail(null);
  renderMobileSheetSummary();
  renderRouteStatus();
  renderMapLayers();
}

function nearestCluster(latlng) {
  if (!clusterFeatures.length) return null;
  const clickPoint = map.latLngToContainerPoint(latlng);
  let best = null;
  let bestDistance = Infinity;
  clusterFeatures.forEach((feature) => {
    const point = map.latLngToContainerPoint([feature.cluster.lat, feature.cluster.lng]);
    const distance = clickPoint.distanceTo(point);
    if (distance <= 28 && distance < bestDistance) {
      best = feature.cluster;
      bestDistance = distance;
    }
  });
  return best;
}

function nearestClickablePlace(latlng) {
  if (!visiblePlaces.length) return null;
  const clickPoint = map.latLngToContainerPoint(latlng);
  let best = null;
  let bestDistance = Infinity;

  visiblePlaces.forEach((place) => {
    const renderedMarker = markers.get(place.id);
    const markerLatLng = renderedMarker ? renderedMarker.getLatLng() : latLng(place);
    const point = map.latLngToContainerPoint(markerLatLng);
    const distance = clickPoint.distanceTo(point);
    const threshold = place.geometry.type === "area" ? 26 : 20;
    if (distance <= threshold && distance < bestDistance) {
      best = place;
      bestDistance = distance;
    }
  });

  return best;
}

function zoomToCluster(cluster) {
  const bounds = L.latLngBounds(cluster.places.map((place) => latLng(place)));
  if (bounds.isValid() && !bounds.getNorthEast().equals(bounds.getSouthWest())) {
    map.fitBounds(bounds.pad(0.35));
  } else {
    map.setView([cluster.lat, cluster.lng], Math.min(map.getZoom() + 2, 18), { animate: true });
  }
}

function zoomFor(place) {
  if (place.geometry.type === "area") return 13;
  if (place.geometry.type === "approximate") return 14;
  return 15;
}

function fitAllVisible() {
  if (!visiblePlaces.length) return;
  const bounds = L.latLngBounds([
    ...visiblePlaces.map((place) => latLng(place)),
    ...coverMarkers.map((marker) => marker.getLatLng())
  ]);
  map.fitBounds(bounds.pad(0.15));
}

function renderDetail(place) {
  const targets = [detailCard, sheetDetail].filter(Boolean);
  targets.forEach((target) => {
    if (!place) {
      target.classList.remove("visible");
      target.setAttribute("aria-hidden", "true");
      window.setTimeout(() => {
        if (!target.classList.contains("visible")) target.innerHTML = "";
      }, 220);
      return;
    }
    target.innerHTML = detailHtml(place);
    target.classList.add("visible");
    target.setAttribute("aria-hidden", "false");
    target.querySelectorAll("[data-detail-copy]").forEach((button) => {
      button.addEventListener("click", () => copyText(button.dataset.detailCopy, button));
    });
    target.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.addEventListener("click", () => togglePassageLanguage(button));
    });
    target.querySelectorAll("[data-detail-close]").forEach((button) => {
      button.addEventListener("click", clearSelectedPlace);
    });
    target.querySelectorAll("[data-scene-select]").forEach((button) => {
      button.addEventListener("click", () => {
        selectScene(button.dataset.sceneSelect, { skipPan: true });
      });
    });
    target.querySelectorAll("[data-scene-nav]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.sceneNav;
        moveScene(direction);
        const nextFocus = target.querySelector(`[data-scene-nav="${direction}"]:enabled`) || target.querySelector("[data-scene-nav]:enabled");
        nextFocus?.focus({ preventScroll: true });
      });
    });
    target.querySelectorAll("[data-route-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const scroll = target.querySelector(".place-detail-content").scrollTop;
        toggleRouteStop(button.dataset.placeId, button.dataset.sceneId);
        target.querySelector(".place-detail-content").scrollTop = scroll;
        target.querySelector("[data-route-toggle]").focus({ preventScroll: true });
      });
    });
    target.querySelectorAll("[data-open-walk]").forEach((button) => {
      button.addEventListener("click", () => setWalkOpen(true));
    });
    target.querySelectorAll("[data-navigate-place]").forEach((button) => {
      button.addEventListener("click", () => navigateToPlace(place));
    });
    target.querySelectorAll("[data-photo-open]").forEach((button) => {
      button.addEventListener("click", () => openPhoto(button.dataset.photoOpen));
    });
    target.querySelectorAll(".place-photo img").forEach((image) => {
      image.addEventListener("error", () => image.closest(".place-photo")?.classList.add("photo-failed"), { once: true });
    });
  });
}

function detailHtml(place) {
  const precision = precisionHint(place);
  const scenes = scenesForPlace(place).filter((scene) => sceneMatchesCurrentSelection(scene));
  const scene = selectedSceneForPlace(place, scenes);
  if (scene && selectedSceneId !== scene.id) {
    selectedSceneId = scene.id;
    setActiveStoryScope(scene);
  }
  const storyState = scene && selectedScopeMode === "featured" ? storyStateForScene(scene) : null;
  const scenePosition = storyState ? scenePositionText(scene, storyState) : "";
  const routeAdded = scene ? isInRoute(place.id, scene.id) : isInRoute(place.id);
  return `
    <div class="place-detail-panel">
      <header class="place-detail-header">
        <div class="place-detail-meta">
          <h3>${escapeHtml(place.name)}</h3>
          <p class="detail-place">${escapeHtml(place.city)}${place.country ? ` · ${escapeHtml(place.country)}` : ""}</p>
          ${scenePosition ? `<p class="scene-position">${escapeHtml(scenePosition)}</p>` : ""}
          ${precision ? `<p class="precision-note">${escapeHtml(precision)}</p>` : ""}
        </div>
        <button type="button" class="place-detail-close" data-detail-close aria-label="${escapeAttr(text.closeDetail)}" title="${escapeAttr(text.closeDetail)}">
          <span aria-hidden="true"></span>
        </button>
      </header>
      <div class="place-detail-content">
        ${scene ? sceneDetailHtml(scene, place) : placeWithoutSceneHtml(place)}
        ${scenes.length > 1 ? sceneSwitcherHtml(scenes) : ""}
        <div class="walk-actions">
          ${navigationButtonHtml(place)}
          <button type="button" data-route-toggle aria-pressed="${routeAdded}" data-place-id="${escapeAttr(place.id)}" data-scene-id="${escapeAttr(scene ? scene.id : "")}">
            ${escapeHtml(routeAdded ? "已加入漫游" : text.addToRoute)}
          </button>
          ${routeAdded ? `<button type="button" class="view-walk" data-open-walk>查看我的漫游</button>` : ""}
        </div>
        ${placePhotoHtml(place)}
        ${literaryFoodHtml(scene, place)}
        <p class="detail-search">${escapeHtml(place.searchLabel || place.name)}</p>
        <div class="detail-actions">
          <button type="button" data-detail-copy="${escapeAttr(place.name)}">${escapeHtml(text.copyPlace)}</button>
          <a href="${mapsUrl(place)}" target="_blank" rel="noreferrer">${escapeHtml(text.viewExternal)}</a>
        </div>
      </div>
      ${storyState ? storyNavigationHtml(storyState) : ""}
    </div>
  `;
}

function sceneDetailHtml(scene, place) {
  const work = workById(scene.workId);
  const original = workOriginalTitle(scene.workId);
  const rest = scene.excerpts.slice(1);
  return `
    <section class="scene-entry">
      <p class="scene-work">${escapeHtml(sceneSourceLabel(scene))}${original && original !== workTitle(scene.workId) ? ` · ${escapeHtml(original)}` : ""}${work && work.author ? ` · ${escapeHtml(work.author)}` : ""}</p>
      <h4>${escapeHtml(scene.sceneTitle)}</h4>
      ${scene.sceneIntro ? `<p class="scene-intro">${escapeHtml(scene.sceneIntro)}</p>` : ""}
      ${scene.excerpts[0] ? excerptHtml(scene.excerpts[0]) : ""}
      ${rest.length ? `
        <details class="more-passages">
          <summary>${escapeHtml(text.continueReading)}</summary>
          ${rest.map((excerpt) => excerptHtml(excerpt)).join("")}
        </details>
      ` : ""}
    </section>
  `;
}

function placePhotoHtml(place) {
  const photo = photosForPlace(place)[0];
  if (!photo) return "";
  return `
    <figure class="place-photo">
      <button type="button" data-photo-open="${escapeAttr(photo.id)}" aria-label="查看${escapeAttr(place.name)}的照片">
        <img src="${escapeAttr(photo.thumbnailUrl || photo.url)}" alt="${escapeAttr(photo.alt)}" loading="lazy" />
      </button>
      <figcaption>
        <span>${escapeHtml(photo.caption || "")}</span>
        <a href="${escapeAttr(photo.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(photo.sourceName)} · ${escapeHtml(photo.photographer || "")}${photo.license ? ` · ${escapeHtml(photo.license)}` : ""}</a>
      </figcaption>
    </figure>
  `;
}

function photosForPlace(place) {
  const photos = (window.LITERARY_PLACE_MEDIA && window.LITERARY_PLACE_MEDIA.photos) || [];
  return photos.filter((photo) => {
    const rawMatch = Array.isArray(photo.rawIds) && photo.rawIds.some((id) => place.rawIds.includes(id));
    const searchMatch = photo.matchSearch && String(place.searchLabel || "").includes(photo.matchSearch);
    return rawMatch || searchMatch;
  });
}

function openPhoto(photoId) {
  const photos = (window.LITERARY_PLACE_MEDIA && window.LITERARY_PLACE_MEDIA.photos) || [];
  const photo = photos.find((item) => item.id === photoId);
  if (!photo || !photoViewer || !photoViewerImage || !photoViewerCaption) return;
  photoViewerImage.src = photo.url;
  photoViewerImage.alt = photo.alt;
  photoViewerCaption.innerHTML = `${escapeHtml(photo.caption || "")} <a href="${escapeAttr(photo.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(photo.sourceName)} · ${escapeHtml(photo.photographer || "")} · ${escapeHtml(photo.license || "")}</a>`;
  setPhotoViewerOpen(true);
}

function setPhotoViewerOpen(open) {
  if (!photoViewer) return;
  photoViewer.classList.toggle("open", open);
  photoViewer.setAttribute("aria-hidden", String(!open));
  if (!open && photoViewerImage) photoViewerImage.removeAttribute("src");
}

function literaryFoodHtml(scene, place) {
  const reference = literaryFoodReference(scene, place);
  if (!reference) return "";
  return `
    <section class="literary-food">
      <p class="section-kicker">书中味道</p>
      <h5>${escapeHtml(reference.name)}</h5>
      <p>${escapeHtml(reference.context)}</p>
      ${reference.excerpt ? `<blockquote>${escapeHtml(reference.excerpt)}</blockquote>` : ""}
      <div class="nearby-food">
        <strong>今天附近可体验</strong>
        <span>附近餐饮数据尚未接入。</span>
      </div>
    </section>
  `;
}

function literaryFoodReference(scene, place) {
  const foodTypes = new Set(["restaurant", "cafe", "bar", "noodle_shop"]);
  const isFoodPlace = foodTypes.has(place.primaryType);
  const excerpts = scene ? scene.excerpts.map((item) => item.text) : [];
  const explicitText = [place.name, place.context, ...excerpts].join(" ");
  const foodPattern = /饭店|餐馆|咖啡|酒吧|茶室|食堂|荞麦面|乌冬面|拉面|八珍梅|茉莉香片|金巴利|饮料|午餐|吃饭/;
  if (!isFoodPlace && !foodPattern.test(explicitText)) return null;
  const excerpt = excerpts.find((item) => foodPattern.test(item)) || "";
  return {
    name: place.name,
    context: scene?.sceneIntro || place.context || "作品在这里留下了一处明确的饮食或餐饮场景。",
    excerpt
  };
}

function placeWithoutSceneHtml(place) {
  return `
    <section class="scene-entry">
      <p class="scene-work">${escapeHtml(place.works.map((entry) => `《${workTitle(entry.workId)}》`).join(" · "))}</p>
      <h4>在小说中的场景</h4>
      <p class="scene-intro">${escapeHtml(placeSceneIntro(place))}</p>
    </section>
  `;
}

function placeSceneIntro(place) {
  const entries = place.works.filter((entry) => selectedWork === "all" || entry.workId === selectedWork);
  const context = entries.find((entry) => entry.context)?.context || place.context || place.note;
  if (context) return context;
  const workNames = entries.map((entry) => `《${workTitle(entry.workId)}》`).join("、");
  return `${place.name}出现在${workNames || "小说"}的城市空间中，与人物的行动和记忆相连。`;
}

function sceneSwitcherHtml(scenes) {
  return `
    <div class="scene-switcher" aria-label="此地点的其他文学场景">
      ${scenes.map((scene) => `
        <button type="button" data-scene-select="${escapeAttr(scene.id)}" class="${scene.id === selectedSceneId ? "active" : ""}">
          ${escapeHtml(scene.sceneTitle)}
        </button>
      `).join("")}
    </div>
  `;
}

function excerptHtml(excerpt) {
  const alternate = excerpt.translation || excerpt.original;
  return `
    <figure class="detail-quote" data-passage-id="${escapeAttr(excerpt.id)}">
      <blockquote data-primary="${escapeAttr(excerpt.text)}" data-alt="${escapeAttr(alternate || "")}" data-showing="primary">${escapeHtml(excerpt.text)}</blockquote>
      ${alternate ? `<button type="button" class="passage-toggle" data-lang-toggle>${escapeHtml(excerpt.translation ? text.viewOriginal : text.viewTranslation)}</button>` : ""}
    </figure>
  `;
}

function workEntryHtml(entry) {
  const work = workById(entry.workId);
  const original = workOriginalTitle(entry.workId);
  const passageCount = entry.passages.length;
  const [firstPassage, ...rest] = entry.passages;
  return `
    <section class="work-entry">
      <header>
        <strong>《${escapeHtml(workTitle(entry.workId))}》</strong>
        ${original && original !== workTitle(entry.workId) ? `<span>${escapeHtml(original)}</span>` : ""}
        ${work && work.author ? `<em>${escapeHtml(work.author)}</em>` : ""}
      </header>
      ${entry.context ? `<p class="detail-note"><span>${escapeHtml(text.literaryContext)}</span>${escapeHtml(entry.context)}</p>` : ""}
      ${firstPassage ? passageHtml(firstPassage) : ""}
      ${rest.length ? `
        <details class="more-passages">
          <summary>${escapeHtml(text.continueReading)} ${rest.length} 段</summary>
          ${rest.map((passage) => passageHtml(passage)).join("")}
        </details>
      ` : ""}
      ${!passageCount && entry.placeNote ? `<p class="detail-note"><span>${escapeHtml(text.placeNote)}</span>${escapeHtml(entry.placeNote)}</p>` : ""}
    </section>
  `;
}

function passageHtml(passage) {
  const alternate = passage.translation || passage.original;
  return `
    <figure class="detail-quote" data-passage-id="${escapeAttr(passage.id)}">
      ${passage.context ? `<figcaption>${escapeHtml(passage.context)}</figcaption>` : ""}
      <blockquote data-primary="${escapeAttr(passage.text)}" data-alt="${escapeAttr(alternate || "")}" data-showing="primary">${escapeHtml(passage.text)}</blockquote>
      ${alternate ? `<button type="button" class="passage-toggle" data-lang-toggle>${escapeHtml(passage.translation ? text.viewOriginal : text.viewTranslation)}</button>` : ""}
    </figure>
  `;
}

function togglePassageLanguage(button) {
  const figure = button.closest(".detail-quote");
  const blockquote = figure ? figure.querySelector("blockquote") : null;
  if (!blockquote || !blockquote.dataset.alt) return;
  const showingAlt = blockquote.dataset.showing === "alt";
  blockquote.textContent = showingAlt ? blockquote.dataset.primary : blockquote.dataset.alt;
  blockquote.dataset.showing = showingAlt ? "primary" : "alt";
  button.textContent = showingAlt ? text.viewOriginal : text.viewTranslation;
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

function attachScenesToPlaces() {
  const placesById = new Map(atlasPlaces.map(place => [place.id, place]));
  for (const place of atlasPlaces) place.scenes = [];
  for (const scene of literaryScenes) placesById.get(scene.placeId).scenes.push(scene);
  for (const place of atlasPlaces) {
    place.scenes.sort((a, b) => (a.narrativeOrder || 999) - (b.narrativeOrder || 999));
  }
}

function scenesForPlace(place) {
  return place && place.scenes ? place.scenes : [];
}

function scenesForPlaces(places) {
  const ids = new Set(places.map((place) => place.id));
  return literaryScenes.filter((scene) => ids.has(scene.placeId));
}

function sceneById(sceneId) {
  return literaryScenes.find((scene) => String(scene.id) === String(sceneId));
}

function primarySceneForPlace(place) {
  const candidates = scenesForPlace(place).filter((scene) => sceneMatchesCurrentSelection(scene));
  const pool = selectedScopeMode === "featured" ? candidates.filter((scene) => scene.featured) : candidates;
  return pool[0] || candidates[0] || null;
}

function selectedSceneIdForPlace(place) {
  const scene = primarySceneForPlace(place);
  return scene ? scene.id : "";
}

function selectedSceneForPlace(place, candidates = scenesForPlace(place)) {
  return candidates.find((scene) => String(scene.id) === String(selectedSceneId)) || primarySceneForPlace(place);
}

function storyScenesForActiveWork() {
  if (!activeStoryWorkId) return [];
  return literaryScenes
    .filter((scene) => {
      const sameWork = String(scene.workId) === String(activeStoryWorkId);
      const sameStory = !activeStoryTitle || String(scene.storyTitle || "") === String(activeStoryTitle);
      const hasOrder = Number.isFinite(Number(scene.narrativeOrder));
      const inScope = selectedScopeMode === "featured" ? scene.featured : true;
      return sameWork && sameStory && hasOrder && inScope;
    })
    .sort((a, b) => {
      const orderDiff = Number(a.narrativeOrder) - Number(b.narrativeOrder);
      if (orderDiff) return orderDiff;
      return String(a.id).localeCompare(String(b.id));
    });
}

function storyStateForScene(scene) {
  if (!scene) return null;
  setActiveStoryScope(scene);
  const sequence = storyScenesForActiveWork();
  const index = sequence.findIndex((item) => String(item.id) === String(scene.id));
  if (activeStoryWorkId && selectedSceneId && index === -1) {
    console.warn("Selected scene is not present in the active story sequence", {
      activeStoryWorkId,
      selectedSceneId,
      storySceneIds: sequence.map((item) => item.id)
    });
  }
  return { sequence, index };
}

function moveScene(direction) {
  if (!selectedSceneId) return;
  const sequence = storyScenesForActiveWork();
  const index = sequence.findIndex((scene) => String(scene.id) === String(selectedSceneId));
  if (index < 0) return;
  const nextIndex = direction === "previous" ? index - 1 : index + 1;
  if (nextIndex < 0 || nextIndex >= sequence.length) return;
  const next = sequence[nextIndex];
  if (!next || next.id === selectedSceneId) return;
  selectScene(next.id, { skipPan: next.placeId === selectedPlaceId });
}

function scenePositionText(scene, storyState = storyStateForScene(scene)) {
  const sequence = storyState.sequence;
  const index = storyState.index;
  if (index < 0) return "";
  const storyLabel = activeStoryTitle ? `〈${activeStoryTitle}〉` : `《${workTitle(scene.workId)}》`;
  return `${text.activeStoryPrefix}${storyLabel}漫游 · 第 ${index + 1} / ${sequence.length} 幕`;
}

function setActiveStoryScope(scene) {
  if (!scene) return;
  activeStoryWorkId = scene.workId;
  const isSpecificCollectionStory = selectedWork === scene.workId && selectedStory !== "all";
  activeStoryTitle = isSpecificCollectionStory ? (scene.storyTitle || selectedStory) : null;
}

function storyNavigationHtml(storyState) {
  const { sequence, index } = storyState;
  if (index < 0 || sequence.length < 2) return "";
  const previous = sequence[index - 1];
  const next = sequence[index + 1];
  return `<nav class="scene-pager" aria-label="按故事顺序翻阅">
    <button type="button" data-scene-nav="previous" ${previous ? "" : "disabled"}>← 上一幕</button>
    <button type="button" data-scene-nav="next" ${next ? "" : "disabled"}>
      <small>${next ? "下一幕 →" : "已读到最后一幕"}</small>
      ${next ? `<strong>${escapeHtml(next.sceneTitle)}</strong>` : ""}
    </button>
  </nav>`;

}

function routeStopOrder(placeId) {
  const index = myRouteStops.findIndex((stop) => stop.placeId === placeId);
  return index >= 0 ? index + 1 : 0;
}

function isInRoute(placeId, sceneId = "") {
  return myRouteStops.some((stop) => String(stop.placeId) === String(placeId));
}

function toggleRouteStop(placeId, sceneId = "") {
  if (!placeId) return;
  const place = placeById(placeId);
  const fallbackScene = place ? primarySceneForPlace(place) : null;
  const resolvedSceneId = sceneId || (fallbackScene && fallbackScene.id) || "";
  const scene = sceneById(resolvedSceneId) || fallbackScene;
  const index = myRouteStops.findIndex((stop) => stop.placeId === placeId);
  if (index >= 0) {
    myRouteStops.splice(index, 1);
    showToast(text.routeRemoved);
  } else {
    myRouteStops.push({
      id: `walk-stop-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      placeId,
      sceneId: resolvedSceneId,
      workId: scene?.workId || place?.works[0]?.workId || "",
      addedAt: new Date().toISOString(),
      status: myRouteStops.length ? "unvisited" : "current"
    });
    showToast(`已加入我的漫游 · 第 ${myRouteStops.length} 站`, "查看路线", () => setWalkOpen(true));
  }
  myWalk.updatedAt = new Date().toISOString();
  saveMyWalk();
  render();
}

function defaultMyWalk() {
  const now = new Date().toISOString();
  return {
    id: "my-literary-walk",
    title: "我的文学漫游",
    stops: [],
    orderingMode: "custom",
    createdAt: now,
    updatedAt: now
  };
}

function loadMyWalk() {
  myWalk = defaultMyWalk();
  try {
    const stored = JSON.parse(localStorage.getItem(walkStorageKey) || "null");
    if (stored && Array.isArray(stored.stops)) {
      myWalk = { ...myWalk, ...stored, stops: stored.stops.filter((stop) => stop && stop.placeId) };
    }
  } catch {
    localStorage.removeItem(walkStorageKey);
  }
  myRouteStops = myWalk.stops;
}

function saveMyWalk() {
  if (!myWalk) return;
  myWalk.stops = myRouteStops;
  myWalk.updatedAt = new Date().toISOString();
  localStorage.setItem(walkStorageKey, JSON.stringify(myWalk));
}

function setupWalkDrawer() {
  if (!walkDrawer) return;
  walkEntry?.addEventListener("click", () => setWalkOpen(true));
  walkDrawer.querySelectorAll("[data-walk-close]").forEach((element) => {
    element.addEventListener("click", () => setWalkOpen(false));
  });

}

function setWalkOpen(open) {
  if (!walkDrawer) return;
  if (open) renderWalkSummary();
  walkDrawer.classList.toggle("open", open);
  walkDrawer.setAttribute("aria-hidden", String(!open));
  syncMobileNav();
}

function renderWalkSummary() {
  const count = myRouteStops.length;
  if (walkEntryCount) walkEntryCount.textContent = count;
  if (mobileWalkCount) {
    mobileWalkCount.textContent = count;
    mobileWalkCount.hidden = count === 0;
  }
  if (!walkPanelContent) return;
  if (!count) {
    walkPanelContent.innerHTML = `
      <div class="walk-empty">
        <span aria-hidden="true">↝</span>
        <h3>你的漫游还是空的。</h3>
        <p>从地图中加入一个想亲自走到的文学地点。</p>
        <button type="button" data-walk-explore>回到地图探索</button>
      </div>
    `;
    walkPanelContent.querySelector("[data-walk-explore]")?.addEventListener("click", () => {
      setWalkOpen(false);
      setSheetState("half");
    });
    return;
  }

  const works = unique(myRouteStops.map((stop) => stop.workId).filter(Boolean));
  const cities = unique(myRouteStops.map((stop) => placeById(stop.placeId)?.city).filter(Boolean));
  const modeLabels = { narrative: "故事顺序", walking: "步行建议", custom: "自定义顺序" };
  walkPanelContent.innerHTML = `
    <section class="walk-overview">
      <div><strong>${count}</strong><span>个地点</span></div>
      <div><strong>${works.length}</strong><span>部作品</span></div>
      <div><strong>${cities.length}</strong><span>座城市</span></div>
    </section>
    <p class="walk-cities">${escapeHtml(cities.join(" · "))}</p>
    <div class="walk-ordering" role="group" aria-label="路线排序方式">
      ${["narrative", "walking", "custom"].map((mode) => `<button type="button" data-walk-mode="${mode}" class="${myWalk.orderingMode === mode ? "active" : ""}">${modeLabels[mode]}</button>`).join("")}
    </div>
    <p class="walk-distance-note">${myWalk.orderingMode === "walking" ? "按地点间地理距离给出建议站点顺序；尚未生成真实步行路线。" : "路线距离将在生成真实步行路线后计算。"}</p>
    <ol class="walk-stop-list" aria-label="漫游地点">
      ${myRouteStops.map((stop, index) => walkStopHtml(stop, index)).join("")}
    </ol>
    <div class="walk-footer-actions">
      <button type="button" class="start-walk" data-start-walk>开始漫游</button>
      <button type="button" data-clear-walk>清空路线</button>
    </div>
  `;
  bindWalkPanelInteractions();
}

function walkStopHtml(stop, index) {
  const place = placeById(stop.placeId);
  const scene = sceneById(stop.sceneId);
  if (!place) return "";
  return `
    <li class="walk-stop" data-walk-stop-id="${escapeAttr(stop.id)}" draggable="true">
      <button type="button" class="walk-drag-handle" aria-label="拖动调整${escapeAttr(place.name)}的顺序" title="拖动排序"><span aria-hidden="true">⋮⋮</span></button>
      <span class="walk-stop-number">${index + 1}</span>
      <button class="walk-stop-copy stop-link" type="button" data-show-stop aria-label="在地图上查看${escapeAttr(place.name)}">
        <strong>${escapeHtml(place.name)}</strong>
        <span>${escapeHtml(place.city)}${scene ? ` · ${escapeHtml(workTitle(scene.workId))}` : ""}</span>
      </button>
      <div class="walk-stop-actions">
        <button type="button" data-stop-move="up" aria-label="上移${escapeAttr(place.name)}" ${index === 0 ? "disabled" : ""}>↑</button>
        <button type="button" data-stop-move="down" aria-label="下移${escapeAttr(place.name)}" ${index === myRouteStops.length - 1 ? "disabled" : ""}>↓</button>
        <button type="button" data-stop-remove aria-label="移除${escapeAttr(place.name)}">×</button>
      </div>
    </li>
  `;
}

function bindWalkPanelInteractions() {
  walkPanelContent.querySelectorAll("[data-walk-mode]").forEach((button) => {
    button.addEventListener("click", () => setWalkOrdering(button.dataset.walkMode));
  });
  walkPanelContent.querySelectorAll(".walk-stop").forEach((item) => {
    const stopId = item.dataset.walkStopId;
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", stopId);
      event.dataTransfer.effectAllowed = "move";
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
    item.addEventListener("dragover", (event) => event.preventDefault());
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      reorderWalkStop(event.dataTransfer.getData("text/plain"), stopId);
    });
    item.querySelector("[data-show-stop]").addEventListener("click", () => openWalkStop(myRouteStops.find(stop => stop.id === stopId)));
    item.querySelector("[data-stop-remove]")?.addEventListener("click", () => removeWalkStop(stopId));
    item.querySelectorAll("[data-stop-move]").forEach((button) => {
      button.addEventListener("click", () => moveWalkStop(stopId, button.dataset.stopMove === "up" ? -1 : 1));
    });
    setupLongPressReorder(item.querySelector(".walk-drag-handle"), stopId);
  });
  walkPanelContent.querySelector("[data-clear-walk]")?.addEventListener("click", clearMyWalk);
  walkPanelContent.querySelector("[data-start-walk]")?.addEventListener("click", startMyWalk);
}

function setupLongPressReorder(handle, stopId) {
  if (!handle) return;
  let timer = null;
  let active = false;
  handle.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") return;
    timer = window.setTimeout(() => {
      active = true;
      handle.setPointerCapture(event.pointerId);
      handle.closest(".walk-stop")?.classList.add("dragging");
    }, 320);
  });
  handle.addEventListener("pointermove", (event) => {
    if (!active) return;
    event.preventDefault();
    const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".walk-stop");
    if (target?.dataset.walkStopId && target.dataset.walkStopId !== stopId) reorderWalkStop(stopId, target.dataset.walkStopId, false);
  });
  const finish = () => {
    window.clearTimeout(timer);
    if (active) {
      active = false;
      saveMyWalk();
      renderWalkSummary();
    }
  };
  handle.addEventListener("pointerup", finish);
  handle.addEventListener("pointercancel", finish);
}

function setWalkOrdering(mode) {
  myWalk.orderingMode = mode;
  if (mode === "narrative") {
    myRouteStops.sort((a, b) => {
      const aScene = sceneById(a.sceneId);
      const bScene = sceneById(b.sceneId);
      const workDiff = workOrder(a.workId) - workOrder(b.workId);
      if (workDiff) return workDiff;
      return Number(aScene?.narrativeOrder || 999) - Number(bScene?.narrativeOrder || 999);
    });
  }
  if (mode === "walking") myRouteStops = suggestedGeographicOrder(myRouteStops);
  myWalk.stops = myRouteStops;
  saveMyWalk();
  render();
}

function suggestedGeographicOrder(stops) {
  if (stops.length < 3) return stops.slice();
  const remaining = stops.slice(1);
  const ordered = [stops[0]];
  while (remaining.length) {
    const current = placeById(ordered[ordered.length - 1].placeId);
    let closestIndex = 0;
    let closestDistance = Infinity;
    remaining.forEach((stop, index) => {
      const candidate = placeById(stop.placeId);
      if (!current || !candidate) return;
      const [lngA, latA] = current.geometry.coordinates;
      const [lngB, latB] = candidate.geometry.coordinates;
      const distance = (latA - latB) ** 2 + (lngA - lngB) ** 2;
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    ordered.push(remaining.splice(closestIndex, 1)[0]);
  }
  return ordered;
}

function reorderWalkStop(sourceId, targetId, rerender = true) {
  const sourceIndex = myRouteStops.findIndex((stop) => stop.id === sourceId);
  const targetIndex = myRouteStops.findIndex((stop) => stop.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) return;
  const [stop] = myRouteStops.splice(sourceIndex, 1);
  myRouteStops.splice(targetIndex, 0, stop);
  myWalk.orderingMode = "custom";
  saveMyWalk();
  if (rerender) render();
}

function moveWalkStop(stopId, direction) {
  const index = myRouteStops.findIndex((stop) => stop.id === stopId);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= myRouteStops.length) return;
  [myRouteStops[index], myRouteStops[target]] = [myRouteStops[target], myRouteStops[index]];
  myWalk.orderingMode = "custom";
  saveMyWalk();
  render();
}

function removeWalkStop(stopId) {
  const index = myRouteStops.findIndex((stop) => stop.id === stopId);
  if (index < 0) return;
  myRouteStops.splice(index, 1);
  saveMyWalk();
  render();
}

function clearMyWalk() {
  myRouteStops.splice(0);
  myWalk.orderingMode = "custom";
  saveMyWalk();
  render();
}

function startMyWalk() {
  const first = myRouteStops[0];
  if (!first) return;
  myRouteStops.forEach((stop, index) => { stop.status = index === 0 ? "current" : "unvisited"; });
  saveMyWalk();
  openWalkStop(first);
}

function openWalkStop(stop) {
  const place = stop && placeById(stop.placeId);
  if (!place) return;
  const scene = sceneById(stop.sceneId);
  selectedWork = scene?.workId || stop.workId || "all";
  selectedStory = "all";
  selectedScopeMode = scene?.featured ? "featured" : "all";
  searchInput.value = "";
  selectedPlaceId = place.id;
  selectedSceneId = scene?.id || null;
  activeStoryWorkId = scene?.workId || null;
  activeStoryTitle = null;
  setWalkOpen(false);
  render();
  focusSelectedPlace(place, { zoom: true, flash: true });
  const detail = window.matchMedia("(max-width: 767px)").matches ? sheetDetail : detailCard;
  detail.querySelector("[data-detail-close]")?.focus({ preventScroll: true });
}

function navigationButtonHtml(place) {
  if (!place.geometry.coordinates) return "";
  const label = place.geometry.type === "area"
    ? text.navigateArea
    : place.geometry.type === "approximate"
      ? text.navigateApproximate
      : text.navigatePoint;
  return `<button type="button" class="primary-walk" data-navigate-place>${escapeHtml(label)}</button>`;
}

function navigateToPlace(place) {
  const urlWithoutOrigin = mapsDirectionUrl(place);
  const popup = window.open("about:blank", "_blank");
  if (!navigator.geolocation) {
    if (popup) popup.location.href = urlWithoutOrigin;
    else window.open(urlWithoutOrigin, "_blank", "noreferrer");
    return;
  }
  navigator.geolocation.getCurrentPosition((position) => {
    const url = mapsDirectionUrl(place, `${position.coords.latitude},${position.coords.longitude}`);
    if (popup) popup.location.href = url;
    else window.open(url, "_blank", "noreferrer");
  }, () => {
    if (popup) popup.location.href = urlWithoutOrigin;
    else window.open(urlWithoutOrigin, "_blank", "noreferrer");
  }, { enableHighAccuracy: true, timeout: 4200, maximumAge: 60000 });
}

function mapsDirectionUrl(place, origin = "") {
  const [lng, lat] = place.geometry.coordinates || [];
  const destination = lat != null && lng != null ? `${lat},${lng}` : place.searchLabel || place.name;
  const params = new URLSearchParams({
    api: "1",
    destination,
    travelmode: "walking"
  });
  if (origin) params.set("origin", origin);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function updateModeControls() {
  scopeButtons.forEach((button) => {
    const active = button.dataset.scopeMode === selectedScopeMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderRouteStatus() {
  if (!routeStatus) return;
  const showStoryGuide = selectedScopeMode === "featured";
  routeStatus.hidden = !showStoryGuide;
  if (!showStoryGuide) {
    routeStatus.innerHTML = "";
    return;
  }
  const storyCount = activeStoryWorkId ? storyScenesForActiveWork().length : featuredScenesForCurrentWork().length;
  const storyText = activeStoryWorkId
    ? activeStoryTitle
      ? `《${workTitle(activeStoryWorkId)}》 · 〈${activeStoryTitle}〉`
      : `《${workTitle(activeStoryWorkId)}》的精选场景`
    : "选择一本书，或从地图打开一幕";
  const routeText = myRouteStops.length ? `我的漫游已收藏 ${myRouteStops.length} 个地点` : `${storyCount} 幕可读`;
  routeStatus.innerHTML = `
    <span>${escapeHtml(storyText)}</span>
    <em>${escapeHtml(routeText)}</em>
  `;
}

function placeById(placeId) {
  return atlasPlaces.find((place) => place.id === placeId);
}

function precisionHint(place) {
  if (place.geometry.type === "approximate") return text.precisionApproximate;
  if (place.geometry.type === "area") return text.precisionArea;
  return "";
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

function latLng(place) {
  return [place.geometry.coordinates[1], place.geometry.coordinates[0]];
}

function coordinateKey(coordinates, precision = 5) {
  return `${coordinates[0].toFixed(precision)},${coordinates[1].toFixed(precision)}`;
}

function spiderfyGroup(group) {
  const origin = latLng(group[0]);
  const center = map.latLngToContainerPoint(origin);
  const radius = 34;
  return group.map((place, index) => {
    const angle = (Math.PI * 2 * index) / group.length - Math.PI / 2;
    const point = L.point(center.x + Math.cos(angle) * radius, center.y + Math.sin(angle) * radius);
    const coord = map.containerPointToLatLng(point);
    return {
      ...place,
      geometry: {
        ...place.geometry,
        coordinates: [coord.lng, coord.lat]
      },
      spider: { origin }
    };
  });
}

function workById(workId) {
  return (data.works || []).find((work) => work.id === workId);
}

function workOrder(workId) {
  const index = (data.works || []).findIndex((work) => work.id === workId);
  return index >= 0 ? index : 999;
}

function workTitle(workId) {
  const work = workById(workId);
  return zhWorkTitles[workId] || (work && work.title) || workId;
}

function workOriginalTitle(workId) {
  const work = workById(workId);
  if (!work) return "";
  if (workId === "dalloway") return "Mrs Dalloway";
  return work.originalTitle || "";
}

function workAuthor(workId) {
  const work = workById(workId);
  return work && work.author ? work.author : "";
}

function typeLabel(key) {
  return typeLabels[key] || key;
}

async function copyText(value, button) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const input = document.createElement("textarea");
      input.value = value;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.focus();
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    showToast(text.copied);
    if (button) {
      const old = button.textContent;
      button.textContent = text.copied;
      setTimeout(() => {
        button.textContent = old;
      }, 1100);
    }
  } catch {
    showToast(text.copyFailed);
  }
}

function showToast(message, actionLabel = "", action = null) {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  const messageElement = toast.querySelector("span");
  const actionButton = toast.querySelector("button");
  if (messageElement) messageElement.textContent = message;
  if (actionButton) {
    actionButton.hidden = !actionLabel;
    actionButton.textContent = actionLabel;
    actionButton.onclick = actionLabel && action ? () => {
      action();
      toast.classList.remove("visible");
    } : null;
  }
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, actionLabel ? 4200 : 1800);
}

function mapsUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.searchLabel || place.name)}`;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
