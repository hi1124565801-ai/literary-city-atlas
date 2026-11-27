/* Only show reviewed photos explicitly associated with a place. Never match by distance. */
(() => {
  const photoRegistry = new Map();
  const instances = new WeakMap();
  const escape = value => String(value ?? "").replace(/[&<>"']/g, char =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const safeUrl = value => {
    if (!value) return "";
    try {
      const url = new URL(value, document.baseURI);
      return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  };
  const generatedOnly = place => place.works?.some(work =>
    window.LITERARY_PLACE_MEDIA?.workMediaModes?.[work.workId] === "generated");

  function curatedPhotos(place) {
    const sources = new Set();
    const photos = window.LITERARY_PLACE_MEDIA?.photos || [];
    return photos.filter(photo => {
      if (generatedOnly(place) && photo.type !== "generated") return false;
      if (photo.type === "nearby") return false;
      if (!photo.rawIds?.some(id => place.rawIds.includes(id))) return false;
      if (["historical-reference", "generated"].includes(photo.type) && !photo.referenceNote) return false;
      const key = photo.sourceUrl || photo.id;
      if (sources.has(key) || !(safeUrl(photo.url) || /^\.\/images\//.test(photo.url)) || !safeUrl(photo.sourceUrl)) return false;
      sources.add(key);
      photoRegistry.set(photo.id, photo);
      return true;
    }).slice(0, 8);
  }

  function html(place) {
    const photos = curatedPhotos(place);
    const referencesOnly = photos.length && photos.every(photo => photo.type === "historical-reference");
    const heading = generatedOnly(place) ? "场景影像" : referencesOnly ? "胡同旧影 · 风貌参考" : "此地影像";
    return `<section class="place-gallery${generatedOnly(place) ? " scene-gallery" : ""}" data-place-gallery aria-label="${escape(place.name)}的图片库" aria-roledescription="轮播">
      <header class="gallery-heading"><h4>${heading}</h4><span data-gallery-count></span></header>
      <div data-gallery-body></div>
      <div class="gallery-status" data-gallery-status role="status"></div>
    </section>`;
  }

  function photoHtml(photo, index, total) {
    const generated = photo.type === "generated";
    const type = photo.type === "generated" ? "AI 场景绘制" : photo.type === "still" ? "影视剧照" : photo.type === "historical-reference" ? "胡同旧影 · 风貌参考" : photo.type === "historical" ? "地点老照片" : "地点实景";
    const credit = [photo.sourceName, photo.photographer].filter(Boolean).join(" · ");
    return `<figure class="gallery-slide" role="group" aria-roledescription="幻灯片" aria-label="第 ${index + 1} 张，共 ${total} 张">
      <div class="gallery-image-wrap">
        <button class="gallery-photo-open" type="button" data-gallery-open="${escape(photo.id)}" aria-label="查看大图：${escape(photo.alt)}">
          <img src="${escape(photo.thumbnailUrl || photo.url)}" alt="${escape(photo.alt)}" loading="${index ? "lazy" : "eager"}" decoding="async" />
          <span class="gallery-image-error" hidden>图片暂时无法加载</span>
        </button>
        ${generated ? "" : `<span class="gallery-photo-type">${type}</span>`}
        ${generated ? "" : `<a class="gallery-credit" href="${escape(safeUrl(photo.sourceUrl))}" target="_blank" rel="noopener noreferrer" title="${escape(credit)}">来源：${escape(credit)}</a>`}
      </div>
      ${generated ? "" : `<figcaption><span>${escape(photo.caption || photo.alt)}</span>
        ${photo.license ? `<a href="${escape(safeUrl(photo.licenseUrl) || safeUrl(photo.sourceUrl))}" target="_blank" rel="noopener noreferrer">${escape(photo.license)}</a>` : ""}
      </figcaption>`}
      ${!generated && photo.referenceNote ? `<p class="gallery-reference-note">${escape(photo.referenceNote)}</p>` : ""}
    </figure>`;
  }

  function mount(target, place, { onOpen, isViewerOpen }) {
    const root = target.querySelector("[data-place-gallery]");
    if (!root) return;
    const body = root.querySelector("[data-gallery-body]");
    const status = root.querySelector("[data-gallery-status]");
    const count = root.querySelector("[data-gallery-count]");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const photos = curatedPhotos(place);
    let current = 0;
    let userPaused = motion.matches;
    let hovered = false;
    let touching = false;
    let interval;
    let track;
    let scrollTimer;

    function update() {
      count.textContent = photos.length > 1 ? `${current + 1} / ${photos.length}` : "";
      body.querySelectorAll("[data-gallery-dot]").forEach((button, index) => {
        button.setAttribute("aria-pressed", String(index === current));
      });
      const toggle = body.querySelector("[data-gallery-play]");
      if (toggle) {
        toggle.textContent = userPaused ? "播放" : "暂停";
        toggle.setAttribute("aria-label", userPaused ? "自动播放图片" : "暂停自动播放");
      }
      track?.setAttribute("aria-live", userPaused ? "polite" : "off");
    }

    function go(index, manual = false) {
      if (!track || !photos.length) return;
      if (manual) userPaused = true;
      current = (index + photos.length) % photos.length;
      track.scrollTo({ left: current * track.clientWidth, behavior: motion.matches ? "instant" : "smooth" });
      update();
    }

    function renderPhotos() {
      clearInterval(interval);
      if (!photos.length) {
        body.innerHTML = "";
        count.textContent = "";
        return;
      }
      body.innerHTML = `<div class="gallery-track" tabindex="0" aria-label="地点照片，左右方向键切换">${photos.map((photo, index) => photoHtml(photo, index, photos.length)).join("")}</div>
        <div class="gallery-controls" ${photos.length < 2 ? "hidden" : ""}>
          <button type="button" class="gallery-arrow" data-gallery-prev aria-label="上一张照片">‹</button>
          <div class="gallery-dots">${photos.map((_, index) => `<button type="button" data-gallery-dot="${index}" aria-label="显示第 ${index + 1} 张照片" aria-pressed="${index === current}"></button>`).join("")}</div>
          <button type="button" class="gallery-arrow" data-gallery-next aria-label="下一张照片">›</button>
          <button type="button" class="gallery-play" data-gallery-play></button>
        </div>`;
      track = body.querySelector(".gallery-track");
      track.addEventListener("scroll", () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          if (!track?.clientWidth) return;
          current = Math.max(0, Math.min(photos.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
          update();
        }, 120);
      }, { passive: true });
      track.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight"].includes(event.key) || event.target.closest("a")) return;
        event.preventDefault();
        go(current + (event.key === "ArrowRight" ? 1 : -1), true);
      });
      track.addEventListener("pointerdown", () => { touching = true; });
      track.addEventListener("wheel", () => { userPaused = true; update(); }, { passive: true });
      track.querySelectorAll("img").forEach(image => {
        const failed = () => {
          image.hidden = true;
          image.nextElementSibling.hidden = false;
          image.closest("button").disabled = true;
        };
        image.addEventListener("error", failed, { once: true });
        if (image.complete && !image.naturalWidth) failed();
      });
      go(Math.min(current, photos.length - 1));
      interval = setInterval(() => {
        if (photos.length < 2 || userPaused || hovered || touching || document.hidden ||
          isViewerOpen() || root.contains(document.activeElement) || !root.getClientRects().length) return;
        const bounds = root.getBoundingClientRect();
        const viewport = target.querySelector(".place-detail-content").getBoundingClientRect();
        if (bounds.bottom < viewport.top || bounds.top > viewport.bottom) return;
        go(current + 1);
      }, 5500);
    }

    function click(event) {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.hasAttribute("data-gallery-next")) go(current + 1, true);
      if (button.hasAttribute("data-gallery-prev")) go(current - 1, true);
      if (button.hasAttribute("data-gallery-dot")) go(Number(button.dataset.galleryDot), true);
      if (button.hasAttribute("data-gallery-play")) { userPaused = !userPaused; update(); }
      if (button.hasAttribute("data-gallery-open")) onOpen(button.dataset.galleryOpen);
    }
    const enter = () => { hovered = true; };
    const leave = () => { hovered = false; };
    const endTouch = () => { if (touching) { touching = false; userPaused = true; update(); } };
    const motionChange = () => { if (motion.matches) { userPaused = true; update(); } };
    const resize = new ResizeObserver(() => {
      if (track?.clientWidth) track.scrollTo({ left: current * track.clientWidth, behavior: "instant" });
    });
    resize.observe(root);
    root.addEventListener("click", click);
    root.addEventListener("pointerenter", enter);
    root.addEventListener("pointerleave", leave);
    window.addEventListener("pointerup", endTouch);
    window.addEventListener("pointercancel", endTouch);
    motion.addEventListener("change", motionChange);
    instances.set(target, () => {
      clearInterval(interval);
      clearTimeout(scrollTimer);
      resize.disconnect();
      root.removeEventListener("click", click);
      root.removeEventListener("pointerenter", enter);
      root.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerup", endTouch);
      window.removeEventListener("pointercancel", endTouch);
      motion.removeEventListener("change", motionChange);
    });
    renderPhotos();
    status.textContent = photos.length ? "" : generatedOnly(place) ? "此地场景影像待补充。" : "暂未收录与此地点相关的照片。";
    status.hidden = Boolean(photos.length);
  }

  window.PlaceGallery = {
    html, mount,
    unmount(target) { instances.get(target)?.(); instances.delete(target); },
    photoById(id) { return photoRegistry.get(id); }
  };
})();
