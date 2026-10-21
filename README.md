# EOEX Agency

A static, responsive agency website designed for GitHub Pages.

## Languages

The site includes a native language selector for French, English, Spanish,
Italian, Portuguese, and German. French is the first-visit default; the
selected language is saved in the browser for future visits.

## Preview

Open `index.html` directly, or serve the repository root with any static web
server. No build step or dependency installation is required.

## Content notes

- The model roster and opportunity listings follow the supplied brief.
- Supplied model photos and films are matched to profiles by filename and
  appear in the model galleries. Each portfolio gallery uses media only from
  its matching `assets/beauty/`, `assets/editorial/`, `assets/runway/`, or
  `assets/commercial/` folder. The home hero carousel uses only videos from
  `assets/hero-carousel/`; the separate `assets/covers/` images are used for
  portfolio tile covers. All 75 videos from `assets/runway/` are optimized
  and included in the runway gallery.
- Profiles without matching assets retain illustrative portraits until
  approved material is provided.
- Comp-card PDFs are available for 12 profiles. Profiles still awaiting a
  comp card include an enquiry link and any available photo or film gallery.
- The JOIN US form validates the inquiry and downloads a local copy. It does
  not send or store personal information; connect an approved form service
  before accepting live inquiries.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` publishes the repository
root when changes are pushed to `main`.