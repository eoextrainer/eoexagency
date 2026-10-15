(function () {
  function relAsset(basePath, relPath) {
    if (!basePath || !relPath) return "";
    return `${basePath}/${encodeURIComponent(relPath).replace(/%2F/g, "/")}`;
  }

  function stopMedia(modalBody) {
    modalBody.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  function renderModal(model, dict) {
    const assets = model.assets || {};
    const base = model.basePath || "";
    const headshot = relAsset(base, assets.headshot) || model.frontImagePath || "";
    const lookbookImgs = Array.isArray(assets.lookbook) ? assets.lookbook : [];
    const reels = Array.isArray(assets.reels) ? assets.reels : [];
    const polaroids = Array.isArray(assets.polaroids) ? assets.polaroids : [];

    const stats = [
      [dict("fields.height"), model.height || "-"],
      [dict("fields.bust"), model.bust || "-"],
      [dict("fields.waist"), model.waist || "-"],
      [dict("fields.hips"), model.hips || "-"],
      [dict("fields.shoes"), model.shoes || "-"],
      [dict("fields.hair"), model.hair || "-"],
      [dict("fields.eyes"), model.eyes || "-"],
      [dict("fields.dressSize"), model.dressSize || "-"]
    ]
      .map(([k, v]) => `<li><strong>${k}</strong> ${v}</li>`)
      .join("");

    const lookbookHtml = lookbookImgs.length
      ? `<h3>${dict("modal.lookbook")}</h3><div class="modal-gallery">${lookbookImgs
          .map((p) => `<img src="${relAsset(base, p)}" alt="${model.name}" loading="lazy">`)
          .join("")}</div>`
      : "";

    const reelsHtml = reels.length
      ? `<h3>${dict("modal.reels")}</h3><div class="modal-reels">${reels
          .map(
            (r) => `<figure><video controls preload="metadata" poster="${relAsset(base, r.poster || "")}"><source src="${relAsset(base, r.src || "")}" type="video/mp4"></video><figcaption>${r.title || ""}</figcaption></figure>`
          )
          .join("")}</div>`
      : "";

    const polaroidsHtml = polaroids.length
      ? `<h3>${dict("modal.polaroids")}</h3><div class="modal-gallery modal-gallery--small">${polaroids
          .map((p) => `<img src="${relAsset(base, p)}" alt="${model.name}" loading="lazy">`)
          .join("")}</div>`
      : "";

    return `
      <div class="modal-head">
        <div class="modal-portrait">
          ${headshot ? `<img src="${headshot}" alt="${model.name}">` : `<div class="modal-fallback">${model.name}</div>`}
        </div>
        <div class="modal-meta">
          <h2>${model.name} <span class="id">${(model.id || "").toUpperCase()}</span></h2>
          <p>${model.location || "Paris, FR"}</p>
          <ul class="modal-stats">${stats}</ul>
          <div class="modal-actions">
            ${model.lookbookPdfUrl ? `<a class="solid-link" href="${model.lookbookPdfUrl}" target="_blank" rel="noopener">${dict("gallery.lookbookPdf")}</a>` : ""}
            ${model.compcardPdfUrl ? `<a class="solid-link solid-link--ghost" href="${model.compcardPdfUrl}" target="_blank" rel="noopener">${dict("gallery.compcardPdf")}</a>` : ""}
          </div>
        </div>
      </div>
      ${lookbookHtml}
      ${reelsHtml}
      ${polaroidsHtml}
    `;
  }

  function getText(key) {
    if (typeof window.__eoexTranslate === "function") {
      return window.__eoexTranslate(key);
    }
    if (window.__frDict && window.__frDict[key]) return window.__frDict[key];
    return key;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("model-modal");
    const modalBody = document.getElementById("modal-body");
    if (!modal || !modalBody) {
      window.openModelModal = function noop() {};
      return;
    }

    function closeModal() {
      stopMedia(modalBody);
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      modalBody.innerHTML = "";
    }

    window.openModelModal = function openModelModal(model) {
      const dict = (key) => getText(key);

      modalBody.innerHTML = renderModal(model, dict);
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    modal.addEventListener("click", (event) => {
      if (event.target.matches("[data-close]") || event.target.classList.contains("modal-backdrop")) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    });
  });
})();
