const SUPPORTED_LANGS = ["fr", "en", "es", "it", "de"];
const DEFAULT_LANG = "fr";
const IS_PROD = !["localhost", "127.0.0.1"].includes(window.location.hostname);

const state = {
  lang: DEFAULT_LANG,
  dict: {},
  heroIndex: 0,
  heroTimer: null,
  heroPlaying: true,
  heroSlides: [
    {
      titleKey: "hero.slides.0.title",
      textKey: "hero.slides.0.text",
      videoSrc: "",
      poster: ""
    },
    {
      titleKey: "hero.slides.1.title",
      textKey: "hero.slides.1.text",
      videoSrc: "",
      poster: ""
    },
    {
      titleKey: "hero.slides.2.title",
      textKey: "hero.slides.2.text",
      videoSrc: "",
      poster: ""
    }
  ]
};

const schema = {
  model: ["id", "name", "gender"],
  showcase: ["id", "type", "title", "description"],
  calendar: ["day", "title", "note"]
};

function t(key) {
  if (state.dict[key]) {
    return state.dict[key];
  }
  if (state.lang !== DEFAULT_LANG && window.__frDict && window.__frDict[key]) {
    return window.__frDict[key];
  }
  if (!IS_PROD) {
    console.warn(`Missing i18n key: ${key}`);
  }
  return key;
}

async function loadJSON(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load: ${path}`);
  }
  return response.json();
}

function validateRows(rows, requiredFields, label) {
  const valid = [];
  rows.forEach((row, index) => {
    const missing = requiredFields.filter((field) => row[field] === undefined || row[field] === null || row[field] === "");
    if (missing.length) {
      console.warn(`${label} row skipped at index ${index}: missing ${missing.join(", ")}`);
      return;
    }
    valid.push(row);
  });
  return valid;
}

async function loadLanguage(lang) {
  const chosen = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  const frDict = await loadJSON("assets/i18n/fr.json");
  window.__frDict = frDict;
  const dict = chosen === "fr" ? frDict : await loadJSON(`assets/i18n/${chosen}.json`);

  if (IS_PROD) {
    const unresolved = Object.entries(dict).filter(([, value]) => typeof value === "string" && value.includes("REVIEW_REQUIRED"));
    if (unresolved.length) {
      throw new Error(`Locale ${chosen} has unresolved REVIEW_REQUIRED markers.`);
    }
  }

  state.lang = chosen;
  state.dict = dict;
  window.__eoexTranslate = t;
  localStorage.setItem("eoex_lang", chosen);
  document.documentElement.lang = chosen;
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    el.setAttribute("aria-label", t(key));
  });

  document.title = t("meta.title");
  const desc = document.querySelector("meta[name='description']");
  if (desc) {
    desc.setAttribute("content", t("meta.description"));
  }
}

function renderHero() {
  const track = document.getElementById("hero-track");
  track.innerHTML = "";
  state.heroSlides.forEach((slide) => {
    const item = document.createElement("article");
    item.className = "hero-slide";
    if (slide.videoSrc) {
      item.innerHTML = `
        <video autoplay muted loop playsinline preload="metadata" poster="${slide.poster}">
          <source src="${slide.videoSrc}" type="video/mp4">
        </video>
        <div class="hero-overlay">
          <h3>${t(slide.titleKey)}</h3>
          <p>${t(slide.textKey)}</p>
        </div>
      `;
    } else {
      item.innerHTML = `
        <div class="hero-placeholder" aria-hidden="true"></div>
        <div class="hero-overlay">
          <h3>${t(slide.titleKey)}</h3>
          <p>${t(slide.textKey)}</p>
        </div>
      `;
    }
    track.appendChild(item);
  });
  updateHeroPosition();
}

function updateHeroPosition() {
  const track = document.getElementById("hero-track");
  track.style.transform = `translateX(-${state.heroIndex * 100}%)`;
}

function nextHero(dir = 1) {
  const max = state.heroSlides.length;
  state.heroIndex = (state.heroIndex + dir + max) % max;
  updateHeroPosition();
}

function setupHeroControls() {
  document.querySelectorAll("[data-carousel='hero']").forEach((btn) => {
    btn.addEventListener("click", () => {
      nextHero(btn.dataset.dir === "next" ? 1 : -1);
    });
  });

  const toggle = document.getElementById("hero-play-toggle");
  toggle.addEventListener("click", () => {
    state.heroPlaying = !state.heroPlaying;
    toggle.textContent = state.heroPlaying ? t("hero.pause") : t("hero.play");
    if (state.heroPlaying) {
      startHeroAuto();
    } else {
      clearInterval(state.heroTimer);
    }
  });

  const root = document.getElementById("hero-carousel");
  setupSwipe(root, () => nextHero(1), () => nextHero(-1));
}

function startHeroAuto() {
  clearInterval(state.heroTimer);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  state.heroTimer = setInterval(() => {
    if (state.heroPlaying) {
      nextHero(1);
    }
  }, 5000);
}

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function shuffle(items) {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function renderModelGrid(models) {
  const grid = document.getElementById("model-grid");
  grid.innerHTML = "";
  const featuredModel = models.find((model) => model.featured === true);
  const randomPool = shuffle(models.filter((model) => model.featured !== true));
  const displayedModels = featuredModel
    ? [featuredModel, ...randomPool.slice(0, 15)]
    : randomPool.slice(0, 16);

  displayedModels.forEach((model) => {
      const genderLabel = (model.gender || "").charAt(0).toUpperCase() + (model.gender || "").slice(1);
      const frontFace = model.frontImagePath
        ? `
          <div class="model-face model-front model-front--image">
            <div class="model-front-media" role="img" aria-label="${model.name}" style="background-image: url('${model.frontImagePath}');"></div>
            <div class="model-front-overlay">
              <h3>${model.name}</h3>
              <p class="model-meta">${genderLabel} • ${t("gallery.tapHint")}</p>
            </div>
          </div>
        `
        : `
          <div class="model-face model-front">
            <div class="model-avatar">${initials(model.name)}</div>
            <h3>${model.name}</h3>
            <p class="model-meta">${genderLabel} • ${t("gallery.tapHint")}</p>
          </div>
        `;

      const measurements = [
        `<span>${t("fields.height")}: ${model.height || "-"}</span>`,
        model.bust ? `<span>${t("fields.bust")}: ${model.bust}</span>` : `<span>${t("fields.shoulders")}: ${model.shoulders || "-"}</span>`,
        `<span>${t("fields.waist")}: ${model.waist || "-"}</span>`,
        `<span>${t("fields.hips")}: ${model.hips || "-"}</span>`,
        `<span>${t("fields.shoes")}: ${model.shoes || "-"}</span>`,
        `<span>${t("fields.hair")}: ${model.hair || "-"}</span>`,
        `<span>${t("fields.eyes")}: ${model.eyes || "-"}</span>`,
        model.dressSize ? `<span>${t("fields.dressSize")}: ${model.dressSize}</span>` : ""
      ].join("");

      const cta = (model.lookbookPdfUrl || model.compcardPdfUrl)
        ? `
          <div class="model-cta-group">
            ${model.lookbookPdfUrl ? `<a href="${model.lookbookPdfUrl}" target="_blank" rel="noopener">${t("gallery.lookbookPdf")}</a>` : ""}
            ${model.compcardPdfUrl ? `<a href="${model.compcardPdfUrl}" target="_blank" rel="noopener">${t("gallery.compcardPdf")}</a>` : ""}
            <button type="button" class="model-modal-btn">${t("gallery.openDetails")}</button>
          </div>
        `
        : model.portfolioUrl
          ? `<div class="model-cta-group"><a href="${model.portfolioUrl}" target="_blank" rel="noopener">${t("gallery.portfolio")}</a><button type="button" class="model-modal-btn">${t("gallery.openDetails")}</button></div>`
          : `<div class="model-cta-group"><button type="button" class="model-modal-btn">${t("gallery.openDetails")}</button></div>`;

      const card = document.createElement("article");
      card.className = "model-card";
      card.tabIndex = 0;
      card.innerHTML = `
        <div class="model-inner">
          ${frontFace}
          <div class="model-face model-back">
            <div class="model-back-header">
              <strong>${model.name}</strong>
            </div>
            <div class="model-stat-grid">
              ${measurements}
            </div>
            ${cta}
          </div>
        </div>
      `;

      card.addEventListener("click", (event) => {
        if (event.target.closest("a") || event.target.closest("button")) {
          return;
        }
        card.classList.toggle("flipped");
      });
      card.addEventListener("keypress", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          card.classList.toggle("flipped");
        }
      });

      const detailButton = card.querySelector(".model-modal-btn");
      if (detailButton) {
        detailButton.addEventListener("click", (event) => {
          event.stopPropagation();
          if (window.openModelModal) {
            window.openModelModal(model);
          }
        });
      }

      grid.appendChild(card);
    });
}

function renderShowcase(items) {
  const laneRoot = document.getElementById("showcase-lanes");
  const types = ["runway", "editorial", "commercial"];
  laneRoot.innerHTML = "";

  types.forEach((type) => {
    const lane = document.createElement("section");
    const laneId = `lane-${type}`;
    const trackId = `track-${type}`;
    lane.className = "showcase-lane";
    lane.setAttribute("aria-label", t(`showcase.${type}`));
    lane.innerHTML = `
      <h3 class="showcase-title">${t(`showcase.${type}`)}</h3>
      <button class="carousel-btn prev" data-track="${trackId}" aria-label="Previous items">&#10094;</button>
      <div class="showcase-track" id="${trackId}" tabindex="0"></div>
      <button class="carousel-btn next" data-track="${trackId}" aria-label="Next items">&#10095;</button>
    `;

    const track = lane.querySelector(`#${trackId}`);
    items
      .filter((item) => item.type === type)
      .forEach((item) => {
        const card = document.createElement("article");
        card.className = "showcase-card";
        card.innerHTML = `
          <div class="media" role="img" aria-label="${t("showcase.mediaPlaceholder")}"></div>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        `;
        track.appendChild(card);
      });

    lane.querySelectorAll(".carousel-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const distance = track.clientWidth * 0.85;
        const dir = btn.classList.contains("next") ? 1 : -1;
        track.scrollBy({ left: dir * distance, behavior: "smooth" });
      });
    });

    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        track.scrollBy({ left: track.clientWidth * 0.85, behavior: "smooth" });
      }
      if (event.key === "ArrowLeft") {
        track.scrollBy({ left: -track.clientWidth * 0.85, behavior: "smooth" });
      }
    });

    setupSwipe(track, () => track.scrollBy({ left: track.clientWidth * 0.8, behavior: "smooth" }), () => track.scrollBy({ left: -track.clientWidth * 0.8, behavior: "smooth" }));

    laneRoot.appendChild(lane);
  });
}

function renderCalendar(events) {
  const root = document.getElementById("calendar-grid");
  root.innerHTML = "";
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  for (let day = 1; day <= 28; day += 1) {
    const event = events.find((item) => item.day === day);
    const date = new Date(year, month, day);
    const weekday = date.toLocaleDateString(state.lang, { weekday: "short" });
    const card = document.createElement("article");
    card.className = "calendar-cell";
    card.tabIndex = 0;
    card.innerHTML = `
      <p>${weekday}</p>
      <strong>${day}</strong>
      <div class="calendar-detail">
        <p><strong>${event ? event.title : t("calendar.noEvent")}</strong></p>
        <p>${event ? event.note : t("calendar.noEventText")}</p>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("reveal"));
    card.addEventListener("keypress", (eventKey) => {
      if (eventKey.key === "Enter" || eventKey.key === " ") {
        card.classList.toggle("reveal");
      }
    });
    root.appendChild(card);
  }
}

function setupSwipe(element, onLeft, onRight) {
  let startX = 0;
  let startY = 0;

  element.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  }, { passive: true });

  element.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (Math.abs(dx) < 30 || Math.abs(dx) < Math.abs(dy)) {
      return;
    }
    if (dx < 0) {
      onLeft();
    } else {
      onRight();
    }
  }, { passive: true });
}

function setupNavToggle() {
  const btn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-links");
  if (!btn || !menu) {
    return;
  }

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    btn.classList.toggle("open", !expanded);
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      btn.classList.remove("open");
      menu.classList.remove("open");
    });
  });
}

function setupLangSwitch() {
  const select = document.getElementById("lang-select");
  select.value = state.lang;
  select.addEventListener("change", async (event) => {
    const selectedLang = event.target.value;
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("lang", selectedLang);
    window.history.replaceState({}, "", nextUrl);
    await loadLanguage(selectedLang);
    await bootData();
  });
}

function getInitialLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl && SUPPORTED_LANGS.includes(fromUrl)) {
    return fromUrl;
  }
  return localStorage.getItem("eoex_lang") || DEFAULT_LANG;
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    ["name", "email", "project", "message"].forEach((field) => {
      const input = document.getElementById(field);
      const error = document.getElementById(`${field}-error`);
      if (!input.checkValidity()) {
        error.textContent = t(`contact.errors.${field}`);
        valid = false;
      } else {
        error.textContent = "";
      }
    });

    if (!valid) {
      status.textContent = t("contact.form.errorStatus");
      status.style.color = "#9b2f2f";
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    console.info("Contact form payload", payload);
    status.textContent = t("contact.form.successStatus");
    status.style.color = "#0f5d3f";
    form.reset();
  });
}

async function bootData() {
  const [modelsRaw, showcaseRaw, eventsRaw] = await Promise.all([
    loadJSON("assets/data/models.json"),
    loadJSON("assets/data/showcase.json"),
    loadJSON("assets/data/calendar-events.json")
  ]);

  const models = validateRows(modelsRaw, schema.model, "models");
  const showcase = validateRows(showcaseRaw, schema.showcase, "showcase");
  const events = validateRows(eventsRaw, schema.calendar, "calendar");

  renderHero();
  renderModelGrid(models);
  renderShowcase(showcase);
  renderCalendar(events);
}

async function init() {
  setupNavToggle();

  const preferred = getInitialLanguage();
  await loadLanguage(preferred);
  setupLangSwitch();
  setupHeroControls();
  setupContactForm();
  await bootData();
  startHeroAuto();
}

init().catch((error) => {
  console.error("EOEX SPA init failed", error);
  document.body.innerHTML = `<main class="shell"><h1>Initialization error</h1><p>${error.message}</p></main>`;
});
