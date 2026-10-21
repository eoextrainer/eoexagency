const image = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const models = [
  { name: "Albina", image: "photo-1534528741775-53994a69daeb", compCard: "assets/comp-cards/albina.pdf" },
  { name: "Tristan", image: "photo-1500648767791-00dcc994a43e" },
  { name: "Florine", src: "assets/models/florine.jpg", compCard: "assets/comp-cards/florine.pdf" },
  { name: "Conan", image: "photo-1506794778202-cad84cf45f1d" },
  { name: "Jenna", image: "photo-1515886657613-9f3515b0c78f" },
  { name: "Sosthene", image: "photo-1506794778202-cad84cf45f1d" },
  { name: "Fernando", image: "photo-1500648767791-00dcc994a43e" },
  { name: "Alicia", image: "photo-1529139574466-a303027c1d8b" },
  { name: "Henri", image: "photo-1506794778202-cad84cf45f1d" },
  { name: "Keira", image: "photo-1539109136881-3be0616acf4b" },
  { name: "Patrycja", image: "photo-1509631179647-0177331693ae" },
  { name: "Ornella", image: "photo-1525507119028-ed4c629a60a3" },
  { name: "Linda", image: "photo-1515886657613-9f3515b0c78f" },
  { name: "Antenor", image: "photo-1506794778202-cad84cf45f1d" }
];

const portfolios = [
  {
    title: "Runways",
    label: "01 / Movement",
    description: "A striking point of view, from first fitting to final walk.",
    image: "photo-1539109136881-3be0616acf4b",
    gallery: [
      ["photo-1539109136881-3be0616acf4b", "Runway / silhouette"],
      ["photo-1509631179647-0177331693ae", "Runway / backstage"],
      ["photo-1529139574466-a303027c1d8b", "Runway / movement"],
      ["photo-1525507119028-ed4c629a60a3", "Runway / detail"],
      ["photo-1483985988355-763728e1935b", "Runway / collection"],
      ["photo-1515886657613-9f3515b0c78f", "Runway / finale"]
    ]
  },
  {
    title: "Editorial",
    label: "02 / Image",
    description: "Character-led stories made to stay with you.",
    image: "photo-1529139574466-a303027c1d8b",
    gallery: [
      ["photo-1529139574466-a303027c1d8b", "Editorial / portrait"],
      ["photo-1524504388940-b1c1722653e1", "Editorial / form"],
      ["photo-1534528741775-53994a69daeb", "Editorial / close-up"],
      ["photo-1509631179647-0177331693ae", "Editorial / styling"],
      ["photo-1515886657613-9f3515b0c78f", "Editorial / colour"],
      ["photo-1525507119028-ed4c629a60a3", "Editorial / detail"]
    ],
    film: {
      src: "assets/films/florine-eveningwear.mp4",
      poster: "photo-1525507119028-ed4c629a60a3",
      caption: "Florine / eveningwear film"
    }
  },
  {
    title: "Commercial",
    label: "03 / Campaign",
    description: "Human, memorable campaigns for brands with a story.",
    image: "photo-1483985988355-763728e1935b",
    gallery: [
      ["photo-1483985988355-763728e1935b", "Campaign / together"],
      ["photo-1529139574466-a303027c1d8b", "Campaign / expression"],
      ["photo-1509631179647-0177331693ae", "Campaign / wardrobe"],
      ["photo-1525507119028-ed4c629a60a3", "Campaign / texture"],
      ["photo-1515886657613-9f3515b0c78f", "Campaign / portrait"],
      ["photo-1524504388940-b1c1722653e1", "Campaign / story"]
    ],
    film: {
      src: "assets/films/albina-feature.mp4",
      poster: "photo-1483985988355-763728e1935b",
      caption: "Albina / celebration film"
    }
  },
  {
    title: "Cosmetics & Beauty",
    label: "04 / Beauty",
    description: "Beauty imagery that celebrates individuality and craft.",
    image: "photo-1524504388940-b1c1722653e1",
    gallery: [
      ["photo-1524504388940-b1c1722653e1", "Beauty / skin"],
      ["photo-1534528741775-53994a69daeb", "Beauty / portrait"],
      ["photo-1515886657613-9f3515b0c78f", "Beauty / colour"],
      ["photo-1529139574466-a303027c1d8b", "Beauty / light"],
      ["photo-1509631179647-0177331693ae", "Beauty / form"],
      ["photo-1525507119028-ed4c629a60a3", "Beauty / detail"]
    ]
  }
];

const opportunities = [
  {
    title: "Open Castings",
    image: "photo-1539109136881-3be0616acf4b",
    description: "Discover upcoming casting calls and meet our team in person.",
    tags: ["Paris", "Madrid", "Barcelona", "Berlin", "Milan", "London", "Copenhagen", "Bruxelles", "Geneva"],
    interest: "Become an EOEX model"
  },
  {
    title: "Partner Agencies",
    image: "photo-1483985988355-763728e1935b",
    description: "We welcome thoughtful agency relationships built on trust and shared ambition.",
    tags: ["FB Agency — Bruxelles", "JKC Agency — Milan"],
    interest: "Become an EOEX partner"
  },
  {
    title: "Fashion Designers",
    image: "photo-1509631179647-0177331693ae",
    description: "Meet designers looking for talent, perspective and new creative energy.",
    tags: ["La Maison Minteh", "Gilson V Couture", "Charles Edoh", "Linda Lither", "Isso", "Revolusum", "Kamila Ferreira"],
    interest: "Become an EOEX collaborator"
  },
  {
    title: "Event Organisers",
    image: "photo-1515886657613-9f3515b0c78f",
    description: "Create memorable live experiences with our event and production network.",
    tags: ["Biconic", "Infinity"],
    interest: "Become an EOEX partner"
  },
  {
    title: "Photography Studios",
    image: "photo-1529139574466-a303027c1d8b",
    description: "Connect with image-makers and studios shaping the next visual story.",
    tags: ["Moov Prod", "Luca", "Andrea", "Paulas Morena", "Studio Marguerite"],
    interest: "Become an EOEX collaborator"
  }
];

const esc = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

function renderModel(model, index) {
  const cardLink = model.compCard
    ? `<a class="pdf-link" href="${esc(model.compCard)}" target="_blank" rel="noreferrer">Open comp card <span aria-hidden="true">↗</span></a>`
    : `<p class="model-code">Comp card pending</p><p>An approved digital comp card will be added here.</p><a class="text-link" href="#join" data-interest="Become an EOEX model">Enquire <span aria-hidden="true">↗</span></a>`;
  return `
    <article class="model-card">
      <div class="model-card-inner">
        <div class="model-face model-front">
          <img src="${esc(model.src || image(model.image, 760))}" alt="${model.src ? `Approved EOEX portrait of ${esc(model.name)}` : `Editorial portrait placeholder for ${esc(model.name)}; replace with approved model photography`}" loading="lazy">
          <div class="model-caption"><div><p>EOEX / Model</p><h3>${esc(model.name)}</h3></div><span class="flip-cue" aria-hidden="true">↗</span></div>
          <button class="flip-trigger flip-cue" type="button" aria-label="Turn ${esc(model.name)}’s profile card" aria-expanded="false">↗</button>
        </div>
        <div class="model-face model-back${model.compCard ? " model-back--pdf" : ""}">
          ${model.compCard ? `<iframe class="comp-card-frame" title="${esc(model.name)}’s EOEX comp card preview" src="${esc(model.compCard)}#toolbar=0&navpanes=0&view=FitH" loading="lazy"></iframe>` : ""}
          <div class="model-back-content">
          <p class="back-brand">EOEX AGENCY</p>
          <p class="model-code">Profile ${String(index + 1).padStart(2, "0")}</p>
          <h3>${esc(model.name)}</h3>
          <p>${model.compCard ? "Discover the approved EOEX comp card for this profile." : "Profile details and approved comp card will be added here."}</p>
          ${cardLink}
          <button class="flip-back" type="button" aria-label="Return to ${esc(model.name)}’s portrait" aria-expanded="true">Back to portrait ↑</button>
          </div>
        </div>
      </div>
    </article>`;
}

document.querySelector("#model-grid-one").innerHTML = models.slice(0, 6).map(renderModel).join("");
document.querySelector("#model-grid-two").innerHTML = models.slice(6).map((model, index) => renderModel(model, index + 6)).join("");

document.querySelector("#portfolio-grid").innerHTML = portfolios.map((portfolio, index) => `
  <article class="portfolio-card">
    <div class="portfolio-card-inner">
      <div class="portfolio-face portfolio-front">
        <img src="${image(portfolio.image, 1150)}" alt="" loading="lazy">
        <div class="portfolio-card-content">
          <p class="eyebrow">${esc(portfolio.label)}</p>
          <h3>${esc(portfolio.title)}</h3>
        </div>
        <button class="flip-trigger flip-cue" type="button" aria-label="Turn ${esc(portfolio.title)} portfolio card" aria-expanded="false">↗</button>
      </div>
      <div class="portfolio-face portfolio-back">
        <p class="eyebrow">${esc(portfolio.label)}</p>
        <h3>${esc(portfolio.title)}</h3>
        <p>${esc(portfolio.description)}</p>
        <button type="button" data-gallery="${index}">Explore the gallery <span aria-hidden="true">↗</span></button>
      </div>
    </div>
  </article>
`).join("");

const opportunityTrack = document.querySelector("#opportunity-track");
opportunityTrack.innerHTML = opportunities.map((opportunity) => `
  <article class="opportunity-card">
    <div class="opportunity-inner">
      <div class="opportunity-face opportunity-front">
        <img src="${image(opportunity.image, 820)}" alt="" loading="lazy">
        <div class="opportunity-front-content"><p>EOEX / Network</p><h3>${esc(opportunity.title)}</h3></div>
        <button class="flip-trigger flip-cue" type="button" aria-label="Discover ${esc(opportunity.title)}" aria-expanded="false">↗</button>
      </div>
      <div class="opportunity-face opportunity-back">
        <p class="eyebrow">Open opportunity</p>
        <h3>${esc(opportunity.title)}</h3>
        <p>${esc(opportunity.description)}</p>
        <div class="opportunity-tags">${opportunity.tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>
        <button type="button" data-interest="${esc(opportunity.interest)}">Start an enquiry ↗</button>
      </div>
    </div>
  </article>
`).join("");

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
menuToggle.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
});

document.addEventListener("click", (event) => {
  const turnButton = event.target.closest(".flip-trigger, .flip-back");
  if (turnButton) {
    const card = turnButton.closest(".model-card, .opportunity-card");
    const flipped = card.classList.toggle("is-flipped");
    if (turnButton.classList.contains("flip-back")) card.classList.add("is-force-front");
    else card.classList.remove("is-force-front");
    card.querySelectorAll(".flip-trigger, .flip-back").forEach((button) => {
      button.setAttribute("aria-expanded", String(flipped));
    });
  }
});
document.querySelectorAll(".model-card").forEach((card) => {
  card.addEventListener("pointerleave", () => card.classList.remove("is-force-front"));
});

const agencyPage = document.querySelector("#agency-page");
const joinPage = document.querySelector("#join-page");
function updateRoute() {
  const joining = window.location.hash === "#join";
  agencyPage.hidden = joining;
  joinPage.hidden = !joining;
  if (joining) window.scrollTo(0, 0);
}
window.addEventListener("hashchange", updateRoute);
updateRoute();

const opportunityViewport = document.querySelector("#opportunity-viewport");
const carouselCurrent = document.querySelector("#carousel-current");
const carouselTotal = document.querySelector("#carousel-total");
let opportunityIndex = 0;
carouselTotal.textContent = String(opportunities.length).padStart(2, "0");

function updateCarousel() {
  const card = opportunityTrack.querySelector(".opportunity-card");
  if (!card) return;
  const gap = Number.parseFloat(getComputedStyle(opportunityTrack).gap) || 0;
  const maxIndex = Math.max(0, opportunityTrack.children.length - Math.floor(opportunityViewport.clientWidth / (card.getBoundingClientRect().width + gap)));
  opportunityIndex = Math.min(opportunityIndex, maxIndex);
  opportunityTrack.style.transform = `translateX(-${opportunityIndex * (card.getBoundingClientRect().width + gap)}px)`;
  carouselCurrent.textContent = String(opportunityIndex + 1).padStart(2, "0");
  document.querySelector('[data-carousel="prev"]').disabled = opportunityIndex === 0;
  document.querySelector('[data-carousel="next"]').disabled = opportunityIndex >= maxIndex;
}
document.querySelector('[data-carousel="prev"]').addEventListener("click", () => {
  opportunityIndex = Math.max(0, opportunityIndex - 1);
  updateCarousel();
});
document.querySelector('[data-carousel="next"]').addEventListener("click", () => {
  opportunityIndex += 1;
  updateCarousel();
});
window.addEventListener("resize", updateCarousel);
updateCarousel();

const galleryDialog = document.querySelector("#gallery-dialog");
const galleryGrid = document.querySelector("#gallery-grid");
const galleryTitle = document.querySelector("#gallery-title");
document.querySelector("#portfolio-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery]");
  if (!button) return;
  const portfolio = portfolios[Number(button.dataset.gallery)];
  galleryTitle.textContent = portfolio.title;
  const stills = portfolio.gallery.map(([photo, caption]) => `
    <figure class="gallery-item">
      <img src="${image(photo, 850)}" alt="${esc(caption)} — illustrative editorial image" loading="lazy">
      <figcaption>${esc(caption)}</figcaption>
    </figure>
  `).join("");
  const film = portfolio.film ? `
    <figure class="gallery-item gallery-video">
      <video controls preload="none" playsinline poster="${image(portfolio.film.poster, 850)}">
        <source src="${esc(portfolio.film.src)}" type="video/mp4">
        Your browser does not support embedded video.
      </video>
      <figcaption>${esc(portfolio.film.caption)}</figcaption>
    </figure>
  ` : "";
  galleryGrid.innerHTML = `${stills}${film}`;
  galleryDialog.showModal();
});
document.querySelector(".dialog-close").addEventListener("click", () => galleryDialog.close());
galleryDialog.addEventListener("click", (event) => {
  if (event.target === galleryDialog) galleryDialog.close();
});

function openJoin(interest) {
  window.location.hash = "join";
  if (interest) document.querySelector("#interest").value = interest;
}
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-interest]");
  if (!link) return;
  event.preventDefault();
  openJoin(link.dataset.interest);
});

document.querySelector("#inquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const formResult = document.querySelector("#form-result");
  if (formResult.dataset.objectUrl) URL.revokeObjectURL(formResult.dataset.objectUrl);
  const values = new FormData(form);
  const text = [
    "EOEX AGENCY — ENQUIRY",
    "",
    `Name: ${values.get("name")}`,
    `Email: ${values.get("email")}`,
    `Country / city: ${values.get("location") || "Not provided"}`,
    `Phone: ${values.get("phone") || "Not provided"}`,
    `Interest: ${values.get("interest")}`,
    "",
    "Message:",
    values.get("message") || "No message provided."
  ].join("\n");
  const file = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const name = String(values.get("name")).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "enquiry";
  const download = document.createElement("a");
  download.className = "form-download";
  download.href = url;
  download.download = `eoex-enquiry-${name}.txt`;
  download.textContent = "Download your enquiry ↗";
  formResult.dataset.objectUrl = url;
  formResult.replaceChildren(
    document.createTextNode("Your enquiry copy is ready. This page has not sent or stored your details."),
    document.createElement("br"),
    download
  );
});

window.addEventListener("pagehide", () => {
  const formResult = document.querySelector("#form-result");
  if (formResult.dataset.objectUrl) URL.revokeObjectURL(formResult.dataset.objectUrl);
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
document.querySelector("#join-year").textContent = String(new Date().getFullYear());
