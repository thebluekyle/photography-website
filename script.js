/* ============================================================
   KYLE CUDAL — SITE CONFIG
   Edit everything in this top block. That's all you need to touch.
   ============================================================ */

const SITE = {
  name:  "Kyle Cudal",
  email: "thebluekyle@gmail.com",
  location: "Based in Birmingham (willing to travel)",

  // Portrait of you, shown in the Info footer. Leave "" to hide it.
  portrait: "Media/web/kyle-portrait.jpg",

  // Personal footer bio (edit freely)
  bioLead: "Hello, I'm Kyle Cudal, a 22-year-old filmmaker and photographer. I bought my first camera in 2023, and it's been with me ever since. Since then, I've dedicated my time to developing my craft through self-directed projects, constantly experimenting, learning, and refining my visual style.",
  bioBody: "It's all personal work so far, which is exactly why I built this. What I really want to make is commercials, spec brand films for sport, fashion and any business, no matter how big or small. I'm just starting out and eager to hone my skills, so I'd happily take on almost any project. If this is what you're looking for, please contact me :))",

  // Your links (shown in the Info footer as icons only).
  // name = tooltip / screen-reader label, icon = which logo, url = where it goes.
  links: [
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/photography.by_kyle" },
    { name: "YouTube",   icon: "youtube",   url: "https://www.youtube.com/@kylecudal" },
    { name: "Substack",  icon: "substack",  url: "https://substack.com/@kylecudal" },
    { name: "Letterboxd",icon: "letterboxd",url: "https://letterboxd.com/kyle_cudal/" },
    { name: "Goodreads", icon: "goodreads", url: "https://www.goodreads.com/user/show/124695042-kyle" },
  ],
};

/* Fullscreen hero showreel.
   Leave videoSrc "" to keep the animated cinematic fallback.
   When you have a reel: put it in /Media and set videoSrc: "Media/showreel.mp4" */
const HERO = {
  videoSrc: "Media/web/showreel.mp4",
  poster:   "Media/web/showreel-poster.jpg",
};

/* ============================================================
   SELECTED WORK  (the horizontal filmstrip + the Index list)
   Each item:
     title   — project / subject name           → shows next to "(Title)"
     client  — who it was for                    → shows next to "(Client)"
     genre   — Photography / Film / Fashion / …  → shows next to "(Genre)"
     type    — "photo" or "film" (film shows a badge + plays on hover)
     color   — the background colour that floods in on hover  ★ the signature effect
     ratio   — "portrait"(default) | "wide" | "landscape" | "square"
     img     — "Media/photo.jpg"  (leave "" for a placeholder)
     video   — "Media/clip.mp4"   (optional; plays on hover + in the viewer)
   Add / remove items freely.
   ============================================================ */
const WORK = [
  // Local video: plays on hover, and full-screen when clicked.
  { title: "like him", client: "Personal", genre: "Film", type: "film", ratio: "landscape", color: "#7FB0A8", img: "Media/web/final-poster.jpg", video: "Media/web/final.mp4" },

  // Engagement Party film (its photos live further down, grouped with the project).
  { title: "Engagement Party", client: "Private", genre: "Event · Film", type: "film", ratio: "wide", color: "#3E8E82", img: "Media/web/ep-video-poster.jpg", video: "Media/web/ep-video.mp4", project: "engagement-party" },

  // A YouTube film. Set `youtube` to the video ID (the bit after ?v= or youtu.be/).
  // It shows the YouTube thumbnail and plays embedded when clicked.
  { title: "japan and seoul", client: "Personal", genre: "Travel · Film", type: "film", ratio: "wide", color: "#E9A0B4", youtube: "evEwoHI9elA", img: "", video: "", project: "seoul-japan-korea" },

  // Local video. ratio "tall" = 9:16 vertical.
  { title: "James", client: "Personal", genre: "Boxing · Edit", type: "film", ratio: "tall", color: "#E8615A", img: "Media/web/boxing-james-poster.jpg", video: "Media/web/boxing-james.mp4" },

  // A YouTube film (plays embedded when clicked).
  { title: "shot on iPhone", client: "Personal", genre: "Film", type: "film", ratio: "wide", color: "#B0A4D6", youtube: "C17ufU_5HO0", img: "", video: "" },

  { title: "Last Light",   client: "Personal", genre: "Portrait",    type: "photo", ratio: "landscape", color: "#E9A94F", img: "Media/web/contax-DSC00021.jpg", video: "" },
  { title: "Rush Hour",    client: "Personal", genre: "Street",      type: "photo", ratio: "portrait",  color: "#E4785C", img: "Media/web/contax-DSC01194.jpg", video: "" },
  { title: "Horse Guards", client: "Personal", genre: "Documentary", type: "photo", ratio: "portrait",  color: "#E3C567", img: "Media/web/contax-DSC01202.jpg", video: "" },
  { title: "Pines",        client: "Personal", genre: "Landscape",   type: "photo", ratio: "portrait",  color: "#8FAE86", img: "Media/web/contax-DSC01207.jpg", video: "" },
  { title: "Rapeseed",     client: "Personal", genre: "Landscape",   type: "photo", ratio: "portrait",  color: "#EBCE6B", img: "Media/web/contax-DSC01212.jpg", video: "" },
  { title: "Festival",     client: "Personal", genre: "Portrait",        type: "photo", ratio: "landscape", color: "#9DBBD4", img: "Media/web/x100v-DSCF5579.jpg", video: "" },
  // Bluebells is pulled up here so it leads the curated Photography strip.
  { title: "Bluebells",    client: "Personal", genre: "Landscape",        type: "photo", ratio: "landscape", color: "#5C6FB0", img: "Media/web/all-Untitled-3.jpg", video: "", featured: true },
  { title: "Stage Light",  client: "Personal", genre: "Music",           type: "photo", ratio: "portrait",  color: "#D26AA6", img: "Media/web/all-DSCF3010.jpg", video: "", featured: true },
  { title: "Leopard",      client: "Personal", genre: "Street",          type: "photo", ratio: "landscape", color: "#5FBDB8", img: "Media/web/x100v-DSCF5592.jpg", video: "", featured: true },
  { title: "Dappled",      client: "Personal", genre: "Still Life",      type: "photo", ratio: "portrait",  color: "#D9B98C", img: "Media/web/x100v-DSCF5604.jpg", video: "" },
  { title: "The Table",    client: "Personal", genre: "Food",            type: "photo", ratio: "portrait",  color: "#D4886B", img: "Media/web/x100v-DSCF5620.jpg", video: "", featured: true },
  { title: "Fixed",        client: "Personal", genre: "Street",          type: "photo", ratio: "landscape", color: "#A8C08D", img: "Media/web/x100v-DSCF5626.jpg", video: "", featured: true },

  // Seoul, Japan, Korea — travel series (X100V)
  { title: "Neon Rain",  client: "Seoul, Japan, Korea", genre: "Street",       type: "photo", ratio: "landscape", color: "#B57BA6", img: "Media/web/sjk-DSCF0139.jpg", video: "", project: "seoul-japan-korea", featured: true },
  { title: "Izakaya",    client: "Seoul, Japan, Korea", genre: "Street",       type: "photo", ratio: "portrait",  color: "#D5705C", img: "Media/web/sjk-DSCF0426.jpg", video: "", project: "seoul-japan-korea" },
  { title: "Last Train", client: "Seoul, Japan, Korea", genre: "Street",       type: "photo", ratio: "landscape", color: "#86A9C9", img: "Media/web/sjk-DSCF0440.jpg", video: "", project: "seoul-japan-korea", featured: true },
  { title: "Shrine",     client: "Seoul, Japan, Korea", genre: "Documentary",  type: "photo", ratio: "portrait",  color: "#C08A5A", img: "Media/web/sjk-DSCF0743.jpg", video: "", project: "seoul-japan-korea" },
  { title: "Oculus",     client: "Seoul, Japan, Korea", genre: "Architecture", type: "photo", ratio: "portrait",  color: "#8E96AE", img: "Media/web/sjk-DSCF9710.jpg", video: "", project: "seoul-japan-korea" },
  { title: "Moonrise",   client: "Seoul, Japan, Korea", genre: "Landscape",    type: "photo", ratio: "portrait",  color: "#6F8FB5", img: "Media/web/sjk-DSCF9731.jpg", video: "", project: "seoul-japan-korea" },

  // Newer additions (camera guessed from filenames — correct the genre if wrong)
  { title: "Cast Courts", client: "Personal", genre: "Documentary",  type: "photo", ratio: "landscape", color: "#7E9E86", img: "Media/web/all-DSC00030.jpg", video: "" },
  { title: "Light Leak",  client: "Personal", genre: "Film",    type: "photo", ratio: "landscape", color: "#E8B24A", img: "Media/web/all-DSC00901.jpg", video: "" },
  { title: "Canopy",      client: "Personal", genre: "Landscape",    type: "photo", ratio: "portrait",  color: "#9AA7B0", img: "Media/web/all-DSC01045.jpg", video: "", featured: true },
  { title: "Distortion",  client: "Personal", genre: "Music",       type: "photo", ratio: "portrait",  color: "#9B6FC0", img: "Media/web/all-DSCF3225.jpg", video: "" },
  { title: "Waterlilies", client: "Personal", genre: "Documentary",  type: "photo", ratio: "landscape", color: "#B8A96A", img: "Media/web/all-Untitled-4.jpg", video: "" },

  // Engagement Party — event photos (the film sits up top, second in the strip)
  { title: "The Setting",  client: "Private", genre: "Details",      type: "photo", ratio: "landscape", color: "#9DB588", img: "Media/web/ep-DSCF5675.jpg", video: "", project: "engagement-party", featured: true },
  { title: "Blooms",       client: "Private", genre: "Details",      type: "photo", ratio: "portrait",  color: "#E39AB4", img: "Media/web/ep-DSCF5699.jpg", video: "", project: "engagement-party" },
  { title: "Little Guest", client: "Private", genre: "Documentary",  type: "photo", ratio: "landscape", color: "#E8B4AC", img: "Media/web/ep-DSCF5819.jpg", video: "", project: "engagement-party", featured: true },
  { title: "The Gift",     client: "Private", genre: "Portrait",     type: "photo", ratio: "portrait",  color: "#3E9488", img: "Media/web/ep-DSCF5979.jpg", video: "", project: "engagement-party" },
  { title: "The Bangle",   client: "Private", genre: "Documentary",  type: "photo", ratio: "portrait",  color: "#D9B27A", img: "Media/web/ep-DSCF6009.jpg", video: "", project: "engagement-party", featured: true },
];

/* ============================================================
   PROJECTS  (case studies)
   Each project groups WORK items that share its `project` id.
   To add a work to a project, set that item's  project: "<id>"  above.
     id       — short slug, also the shareable URL (…/#/project/<id>)
     title    — project name (heading)
     client   — who it was for
     role     — what you did (e.g. "Photography & Film")
     date     — year / dates
     location — where
     cover    — the cover image (a Media/web/… path); coverRatio optional
     blurb    — a short paragraph shown at the top of the case study
   ============================================================ */
const PROJECTS = [
  {
    id: "seoul-japan-korea",
    title: "japan and seoul",
    client: "Personal",
    role: "Photography & Film",
    date: "2025",
    location: "South Korea & Japan",
    cover: "Media/web/sjk-DSCF0139.jpg",
    coverRatio: "landscape",
    blurb: "Two weeks across Seoul, Tokyo and Kyoto. Photos on the X100V and filmed on the a6700. I hope to capture the awe and wonder I experienced through my lens.",
  },
  {
    id: "engagement-party",
    title: "Engagement Party",
    client: "Private",
    role: "Photography & Film",
    date: "2026",
    location: "Birmingham",
    cover: "Media/web/ep-DSCF6009.jpg",
    coverRatio: "portrait",
    blurb: "My first ever paid gig, and I was so happy to be trusted with it. I spent the day trying to catch the candid, meaningful moments as they happened, the small glances and quiet in-betweens that make a day like this feel real. Thank you for having me.",
  },
];

/* ============================================================
   ↓↓↓  NOTHING BELOW HERE NEEDS EDITING  ↓↓↓
   ============================================================ */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Single-colour brand glyphs (inherit the text colour via currentColor) */
const SOCIAL_ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg>`,
  youtube:   `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" stroke-width="1.7"/><path d="M10.4 9.1v5.8l5-2.9-5-2.9Z" fill="currentColor"/></svg>`,
  substack:  `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="4" y="3.5" width="16" height="2.5"/><rect x="4" y="8.1" width="16" height="2.5"/><path d="M4 12.5h16V21l-8-4.5L4 21z"/></svg>`,
  letterboxd:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5.6" cy="12" r="3.5"/><circle cx="12" cy="12" r="3.5"/><circle cx="18.4" cy="12" r="3.5"/></svg>`,
  goodreads: `<svg viewBox="0 0 24 24" aria-hidden="true"><text x="12" y="18.5" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-size="21" font-weight="700" fill="currentColor">g</text></svg>`,
};

/* ---------- Bind config ---------- */
function bindText() {
  $$("[data-bind]").forEach((el) => { const k = el.dataset.bind; if (SITE[k] != null) el.textContent = SITE[k]; });

  const mail = $("#emailLink");
  if (mail) { mail.href = `mailto:${SITE.email}`; mail.textContent = SITE.email; }

  const portrait = $("#infoPortrait");
  if (portrait && SITE.portrait) { portrait.src = SITE.portrait; portrait.hidden = false; }

  const links = $("#infoLinks");
  if (links) {
    links.innerHTML = SITE.links.map((l) =>
      `<a href="${l.url}" target="_blank" rel="noopener noreferrer" aria-label="${l.name}" title="${l.name}">${SOCIAL_ICONS[l.icon] || l.name}</a>`).join("");
  }
  document.title = SITE.name;
}

/* ---------- Hero video + sound ---------- */
function initHero() {
  const video = $("#heroVideo");
  if (HERO.videoSrc) {
    video.src = HERO.videoSrc;
    if (HERO.poster) video.poster = HERO.poster;
    $(".hero__media").classList.add("has-video");
    video.play().catch(() => {});
  }
  const btn = $("#soundToggle");
  btn.addEventListener("click", () => {
    const on = btn.getAttribute("aria-pressed") === "true";
    const next = !on;
    btn.setAttribute("aria-pressed", String(next));
    btn.textContent = next ? "Sound Off" : "Sound On";  // label = the action available
    if (HERO.videoSrc) { video.muted = !next; if (next) video.play().catch(() => {}); }
  });
}

/* ---------- Media helper (image / placeholder) ---------- */
function mediaHTML(w, cls) {
  if (w.youtube) {
    // Use your own thumbnail if you set img, otherwise pull YouTube's
    const thumb = w.img || `https://i.ytimg.com/vi/${w.youtube}/maxresdefault.jpg`;
    const fallback = `https://i.ytimg.com/vi/${w.youtube}/hqdefault.jpg`;
    return `<img class="card__img" src="${thumb}" alt="${w.title}" loading="lazy"
              onerror="this.onerror=null;this.src='${fallback}'" />`;
  }
  if (w.video && w.img) return `<video class="card__vid" src="${w.video}" poster="${w.img}" muted loop playsinline preload="none"></video>`;
  if (w.video)          return `<video class="card__vid" src="${w.video}" muted loop playsinline preload="none"></video>`;
  if (w.img)            return `<img class="card__img" src="${w.img}" alt="${w.title}" loading="lazy" />`;
  return `<div class="card__placeholder"><span>${w.genre}</span></div>`;
}

/* ---------- Colour flood on hover ---------- */
const folio = $("#work");
function floodOn(color) { if (!prefersReduced()) folio.style.backgroundColor = color; }
function floodOff() { folio.style.backgroundColor = ""; }

/* ---------- Card markup ---------- */
function cardHTML(w, i) {
  return `
    <article class="card" data-index="${i}" data-ratio="${w.ratio || "portrait"}" tabindex="0" role="button" aria-label="${w.title}, ${w.genre}">
      <div class="card__tick"></div>
      <div class="card__media">
        ${w.type === "film" ? `<span class="card__badge">1.00</span>` : ""}
        ${mediaHTML(w)}
        <span class="card__zoom" aria-hidden="true">${w.youtube || w.video ? "▶" : "+"}</span>
      </div>
      <div class="card__meta">
        <div class="card__row"><span class="lbl">(Title)</span><span class="val">${w.title}</span></div>
        <div class="card__row"><span class="lbl">(Client)</span><span class="val">${w.client}</span></div>
        <div class="card__row"><span class="lbl">(Genre)</span><span class="val">${w.genre}</span></div>
      </div>
    </article>`;
}

/* ---------- Render the Photography + Videography strips ---------- */
function renderStrips() {
  // Each WORK item keeps its ORIGINAL index (used by the lightbox), then we
  // filter into the two strips by media type.
  const indexed = WORK.map((w, i) => ({ w, i }));
  const groups = {
    photo: indexed.filter(({ w }) => w.type !== "film"),
    film:  indexed.filter(({ w }) => w.type === "film"),
  };

  $$(".strip[data-strip]").forEach((strip) => {
    const kind = strip.dataset.strip;               // "photo" | "film"
    const all = groups[kind] || [];
    // If any items in this group are flagged `featured`, the strip shows only
    // those (your curated selection); "See all" still shows everything.
    const featured = all.filter(({ w }) => w.featured);
    const items = featured.length ? featured : all;
    strip.innerHTML = items.map(({ w, i }) => cardHTML(w, i)).join("");

    // Count label reflects the TOTAL of that type (matches "See all")
    const countEl = $(`[data-count="${kind}"]`);
    if (countEl) {
      const n = all.length;
      const noun = kind === "film" ? "film" : "photograph";
      countEl.textContent = `${n} ${noun}${n === 1 ? "" : "s"}`;
    }

    $$(".card", strip).forEach((card) => {
      const i = Number(card.dataset.index);
      const vid = $(".card__vid", card);
      const enter = () => { floodOn(WORK[i].color); if (vid) vid.play().catch(() => {}); };
      const leave = () => { floodOff(); if (vid) vid.pause(); };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      card.addEventListener("focus", enter);
      card.addEventListener("blur", leave);
      card.addEventListener("click", () => { if (!strip.classList.contains("did-drag")) openLightbox(i); });
      card.addEventListener("keydown", (e) => { if (e.key === "Enter") openLightbox(i); });
    });

    initStripScroll(strip);
  });
}

/* Drag-to-scroll + arrow buttons for the filmstrip.
   NOTE: we deliberately do NOT hijack the vertical wheel — the page must always
   scroll normally, even when the cursor is over a photo. Horizontal trackpad
   swipes and shift+wheel still scroll the strip natively. */
function initStripScroll(strip) {
  const wrap = strip.closest(".strip-wrap");
  // Arrow buttons — move roughly one card at a time
  const stepBy = () => {
    const card = strip.querySelector(".card");
    const gap = parseFloat(getComputedStyle(strip).columnGap) || 60;
    return card ? card.getBoundingClientRect().width + gap : strip.clientWidth * 0.7;
  };
  const prev = wrap && wrap.querySelector('.strip__arrow[data-dir="prev"]');
  const next = wrap && wrap.querySelector('.strip__arrow[data-dir="next"]');
  if (prev) prev.addEventListener("click", () => { strip.scrollBy({ left: -stepBy(), behavior: prefersReduced() ? "auto" : "smooth" }); hideHint(strip); });
  if (next) next.addEventListener("click", () => { strip.scrollBy({ left:  stepBy(), behavior: prefersReduced() ? "auto" : "smooth" }); hideHint(strip); });

  const updateArrows = () => {
    if (!prev || !next) return;
    const max = strip.scrollWidth - strip.clientWidth - 1;
    prev.disabled = strip.scrollLeft <= 0;
    next.disabled = strip.scrollLeft >= max;
  };
  strip.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows);
  updateArrows();

  // Left/right arrow keys when the strip has focus
  strip.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  { e.preventDefault(); strip.scrollBy({ left: -stepBy(), behavior: "smooth" }); }
    if (e.key === "ArrowRight") { e.preventDefault(); strip.scrollBy({ left:  stepBy(), behavior: "smooth" }); }
  });

  // Drag to pan. We only capture the pointer once movement passes a threshold,
  // so a plain click still reaches the card and opens the viewer.
  let down = false, startX = 0, startLeft = 0, dragged = false;
  strip.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    down = true; dragged = false; startX = e.clientX; startLeft = strip.scrollLeft;
  });
  strip.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (!dragged && Math.abs(dx) <= 6) return;        // still a click, not a drag
    if (!dragged) {
      dragged = true;
      strip.classList.add("is-dragging");
      strip.setPointerCapture(e.pointerId);
      hideHint(strip);
    }
    strip.scrollLeft = startLeft - dx;
  });
  const up = () => {
    down = false;
    strip.classList.remove("is-dragging");
    if (dragged) {                                    // swallow the click that follows a drag
      strip.classList.add("did-drag");
      setTimeout(() => strip.classList.remove("did-drag"), 120);
    }
  };
  strip.addEventListener("pointerup", up);
  strip.addEventListener("pointercancel", up);
  strip.addEventListener("scroll", () => hideHint(strip), { passive: true });

  // ── Touch/phone only: auto-colourise the card nearest the carousel's centre
  // as you scroll sideways, so you don't have to press-and-hold. On desktop
  // (a real mouse) this block is skipped and hover keeps working as before.
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    const syncActive = (doFlood) => {
      const cards = $$(".card", strip);
      if (!cards.length) return;
      const box = strip.getBoundingClientRect();
      const centerX = box.left + box.width / 2;
      let best = null, bestD = Infinity;
      cards.forEach((c) => {
        const r = c.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - centerX);
        if (d < bestD) { bestD = d; best = c; }
      });
      cards.forEach((c) => c.classList.toggle("is-active", c === best));   // colourise
      if (best && doFlood) {
        floodOn(WORK[Number(best.dataset.index)].color);                   // flood the bg
        const v = $(".card__vid", best); if (v) v.play().catch(() => {});
        $$(".card__vid", strip).forEach((vid) => { if (vid !== v) vid.pause(); });
      }
    };
    let ticking = false;
    strip.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; syncActive(true); });   // flood while swiping
    }, { passive: true });
    requestAnimationFrame(() => syncActive(false));   // colourise the first one on load (no flood yet)
  }
}
function hideHint(strip) {
  const wrap = strip.closest(".strip-wrap");
  const h = wrap && wrap.querySelector(".strip__hint");
  if (h) h.style.opacity = "0";
}

/* ---------- INDEX — centred scrolling catalogue with corner preview ---------- */
function indexPreviewMedia(w) {
  if (w.youtube) return `<img src="https://i.ytimg.com/vi/${w.youtube}/hqdefault.jpg" alt="" />`;
  if (w.video)   return `<video src="${w.video}" muted loop playsinline autoplay ${w.img ? `poster="${w.img}"` : ""}></video>`;
  if (w.img)     return `<img src="${w.img}" alt="" />`;
  return "";
}

let idxActive = -1;
function renderIndex() {
  const list = $("#indexList");
  const preview = $("#idxPreview");
  const leftMeta = $("#idxLeft");
  const rightMeta = $("#idxRight");

  list.innerHTML = WORK.map((w, i) => `
    <li class="index__row" data-index="${i}">
      <button class="index__link" type="button" aria-label="${w.title} — enlarge">${w.title}</button>
    </li>`).join("");

  const rows = $$(".index__row", list);

  function setActive(i) {
    if (i === idxActive || i < 0) return;
    idxActive = i;
    const w = WORK[i];
    rows.forEach((r) => r.classList.toggle("is-active", Number(r.dataset.index) === i));
    floodOn(w.color);
    leftMeta.textContent = w.type === "film" ? "Film" : "Photograph";
    rightMeta.textContent = w.genre;
    leftMeta.classList.add("is-visible");
    rightMeta.classList.add("is-visible");
    preview.innerHTML = indexPreviewMedia(w);
    preview.classList.add("is-visible");
    const v = preview.querySelector("video"); if (v) v.play().catch(() => {});
  }

  // Hover activates immediately; click enlarges.
  rows.forEach((row) => {
    const i = Number(row.dataset.index);
    row.addEventListener("mouseenter", () => setActive(i));
    $(".index__link", row).addEventListener("click", () => openLightbox(i));
  });

  function hideReadouts() {
    idxActive = -1;
    preview.classList.remove("is-visible");
    leftMeta.classList.remove("is-visible");
    rightMeta.classList.remove("is-visible");
    const v = preview.querySelector("video"); if (v) v.pause();
    floodOff();
  }

  // Scroll: the title nearest the vertical centre becomes active — but only
  // while the catalogue itself is on screen (never floating over the hero).
  let ticking = false;
  function updateByScroll() {
    ticking = false;
    if ($("#indexView").hidden) return;
    const centerY = window.innerHeight / 2;
    const lr = list.getBoundingClientRect();
    const onScreen = lr.top < centerY && lr.bottom > centerY;
    if (!onScreen) { hideReadouts(); return; }
    let best = -1, bestDist = Infinity;
    rows.forEach((row) => {
      const r = row.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - centerY);
      if (d < bestDist) { bestDist = d; best = Number(row.dataset.index); }
    });
    setActive(best);
  }
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true; requestAnimationFrame(updateByScroll);
  }, { passive: true });

  // Expose so the view toggle can prime it when Index is opened.
  renderIndex._sync = () => { idxActive = -1; updateByScroll(); };
}

/* ---------- View switch (Selected / Projects / Index) ---------- */
function setView(view) {
  const views = { selected: "#selectedView", projects: "#projectsView", index: "#indexView" };
  $$(".folio__view").forEach((b) => {
    const on = b.dataset.view === view;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", String(on));
  });
  Object.entries(views).forEach(([name, sel]) => { const el = $(sel); if (el) el.hidden = name !== view; });
  floodOff();
  // Clear the Index corner readouts whenever we're not in Index
  if (view !== "index") {
    idxActive = -1;
    $("#idxPreview").classList.remove("is-visible");
    $("#idxLeft").classList.remove("is-visible");
    $("#idxRight").classList.remove("is-visible");
    const v = $("#idxPreview video"); if (v) v.pause();
  } else if (renderIndex._sync) {
    requestAnimationFrame(renderIndex._sync);
  }
}

function initViews() {
  // In-section toggle
  $$(".folio__view").forEach((btn) => btn.addEventListener("click", () => setView(btn.dataset.view)));
  // Homepage nav links jump straight to a view (the href="#work" handles the scroll)
  $$("[data-view-link]").forEach((link) =>
    link.addEventListener("click", () => setView(link.dataset.viewLink)));
}

/* ---------- PROJECTS — cover cards + deep-linkable case study ---------- */
function projectWorks(id) {
  return WORK.map((w, i) => ({ w, i })).filter(({ w }) => w.project === id);
}

function renderProjects() {
  const grid = $("#projectsGrid");
  if (!grid) return;
  $("#projectsCount").textContent = `${PROJECTS.length} project${PROJECTS.length === 1 ? "" : "s"}`;

  grid.innerHTML = PROJECTS.map((p) => {
    const n = projectWorks(p.id).length;
    return `
      <button class="project-card" type="button" data-project="${p.id}" aria-label="${p.title} — see the project">
        <div class="project-card__media" data-ratio="${p.coverRatio || "landscape"}">
          <img class="project-card__img" src="${p.cover}" alt="${p.title}" loading="lazy" />
          <span class="project-card__more">See more from the project →</span>
        </div>
        <div class="project-card__foot">
          <span class="project-card__title">${p.title}</span>
          <span class="project-card__meta">${p.client} · ${n} piece${n === 1 ? "" : "s"}</span>
        </div>
      </button>`;
  }).join("");

  $$(".project-card", grid).forEach((card) =>
    card.addEventListener("click", () => { location.hash = `#/project/${card.dataset.project}`; }));
}

let projectOpen = false;
function projectTileMedia(w) {
  if (w.youtube) {
    // maxresdefault = 1280×720, true 16:9, sharp (no black bars). Fall back to
    // hqdefault only if a given video has no maxres available.
    const hi = `https://i.ytimg.com/vi/${w.youtube}/maxresdefault.jpg`;
    const lo = `https://i.ytimg.com/vi/${w.youtube}/hqdefault.jpg`;
    return `<img src="${hi}" alt="${w.title}" loading="lazy" onerror="this.onerror=null;this.src='${lo}'" />`;
  }
  if (w.video)   return `<video src="${w.video}" muted loop playsinline preload="none" ${w.img ? `poster="${w.img}"` : ""}></video>`;
  if (w.img)     return `<img src="${w.img}" alt="${w.title}" loading="lazy" />`;
  return "";
}

/* Shared full-screen overlay — used by both project case studies and the
   "See all photos / films" galleries. */
function galleryTile(w, i, cls) {
  return `
    <button class="${cls}" type="button" data-index="${i}" aria-label="${w.title} — ${w.type === "film" ? "play" : "enlarge"}">
      ${w.type === "film" ? `<span class="ptile__badge">▶</span>` : ""}
      ${projectTileMedia(w)}
      <span class="ptile__cap">${w.title}</span>
    </button>`;
}

function openOverlay({ title, meta, blurb, items }) {
  $("#projectTitle").textContent = title;
  $("#projectMeta").innerHTML = (meta || []).filter(([, v]) => v).map(([k, v]) =>
    `<div class="project__metarow"><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  $("#projectBlurb").textContent = blurb || "";

  // Films become a big feature up top; photos flow in a 2-column grid below.
  const films = items.filter(({ w }) => w.type === "film");
  const photos = items.filter(({ w }) => w.type !== "film");
  const featureHTML = films.length ? `<div class="project__feature">${films.map(({ w, i }) => galleryTile(w, i, "ftile")).join("")}</div>` : "";
  const gridHTML = photos.length ? `<div class="project__grid">${photos.map(({ w, i }) => galleryTile(w, i, "ptile")).join("")}</div>` : "";
  $("#projectGallery").innerHTML = featureHTML + gridHTML;
  $$(".ftile, .ptile", $("#projectGallery")).forEach((tile) =>
    tile.addEventListener("click", () => openLightbox(Number(tile.dataset.index))));

  const el = $("#projectView");
  el.classList.add("is-open");
  el.setAttribute("aria-hidden", "false");
  const sc = $(".project__scroll"); if (sc) sc.scrollTop = 0;
  document.body.style.overflow = "hidden";
  projectOpen = true;
}

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) { closeOverlay(); return; }
  openOverlay({
    title: p.title,
    meta: [["Client", p.client], ["Role", p.role], ["Date", p.date], ["Location", p.location]],
    blurb: p.blurb,
    items: projectWorks(id),
  });
}

function openAll(type) {   // "photo" | "film"
  const items = WORK.map((w, i) => ({ w, i }))
    .filter(({ w }) => (type === "film" ? w.type === "film" : w.type !== "film"));
  const n = items.length;
  openOverlay({
    title: type === "film" ? "Videography" : "Photography",
    meta: null,
    blurb: type === "film" ? `${n} film${n === 1 ? "" : "s"}` : `${n} photograph${n === 1 ? "" : "s"}`,
    items,
  });
}

function closeOverlay() {
  const el = $("#projectView");
  el.classList.remove("is-open");
  el.setAttribute("aria-hidden", "true");
  if (!$("#lightbox").classList.contains("is-open")) document.body.style.overflow = "";
  const v = $("#projectGallery video"); if (v) v.pause();
  projectOpen = false;
}

/* Hash routing:
     #/project/<id>       → a case study
     #/all/photo | film   → the "see all" gallery
   Clearing the hash closes the overlay. */
function syncRoute() {
  const h = location.hash; let m;
  if ((m = h.match(/^#\/project\/(.+)$/))) { setView("projects"); openProject(decodeURIComponent(m[1])); }
  else if ((m = h.match(/^#\/all\/(photo|film)$/))) { setView("selected"); openAll(m[1]); }
  else if (projectOpen) { closeOverlay(); }
}

function initProjects() {
  renderProjects();
  const backOrClose = () => {
    if (location.hash.startsWith("#/")) { history.length > 1 ? history.back() : (location.hash = ""); }
    else closeOverlay();
  };
  $("#projectClose").addEventListener("click", backOrClose);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectOpen && !$("#lightbox").classList.contains("is-open")) backOrClose();
  });
  // "See all photos / films" buttons on the section heads
  $$("[data-all]").forEach((btn) =>
    btn.addEventListener("click", () => { location.hash = `#/all/${btn.dataset.all}`; }));
  window.addEventListener("hashchange", syncRoute);
  syncRoute(); // handle a deep link on first load
}

/* ---------- Lightbox ---------- */
let lbIndex = 0;
function openLightbox(i) {
  lbIndex = i; renderLightbox();
  const lb = $("#lightbox");
  lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; $("#lightboxClose").focus();
}
function closeLightbox() {
  const lb = $("#lightbox");
  lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true");
  // Keep the body frozen if a project case study is still open underneath.
  if (!projectOpen) document.body.style.overflow = "";
  const v = $("#lightboxStage video"); if (v) v.pause();
  // Kill any embedded player so its audio stops
  if ($("#lightboxStage iframe")) $("#lightboxStage").innerHTML = "";
}
function stepLightbox(d) { lbIndex = (lbIndex + d + WORK.length) % WORK.length; renderLightbox(); }
function renderLightbox() {
  const w = WORK[lbIndex], stage = $("#lightboxStage");
  if (w.youtube)    stage.innerHTML = `<div class="lightbox__yt"><iframe src="https://www.youtube-nocookie.com/embed/${w.youtube}?autoplay=1&rel=0" title="${w.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  else if (w.video) stage.innerHTML = `<video src="${w.video}" controls autoplay playsinline ${w.img ? `poster="${w.img}"` : ""}></video>`;
  else if (w.img)   stage.innerHTML = `<img src="${w.img}" alt="${w.title}" />`;
  else              stage.innerHTML = `<div class="lightbox__ph"><span>Your ${w.type === "film" ? "film" : "photo"} here</span></div>`;
  $("#lightboxCaption").innerHTML = `<strong>${w.title}</strong> &nbsp;·&nbsp; ${w.client} · ${w.genre}`;
}
function initLightbox() {
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
  $("#lbNext").addEventListener("click", () => stepLightbox(1));
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!$("#lightbox").classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  bindText();
  initHero();
  renderStrips();
  renderIndex();
  initViews();
  initProjects();
  initLightbox();
});
