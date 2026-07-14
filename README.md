# Allen's Portfolio

A concise, public portfolio presenting Allen's projects, experience, and certifications for admissions reviewers, recruiters, and fellow developers.

**Live site:** [PASTE_LIVE_LINK_HERE](PASTE_LIVE_LINK_HERE)

## Technology

The site is built with plain HTML5, CSS3, and vanilla JavaScript. It has no third-party dependencies, package manager, framework, or build step.

## Project structure

```text
.
├── index.html          # Page structure and static introductory content
├── data.js             # Portfolio projects, screenshots, captions, and links
├── script.js           # Rendering logic for the data-driven sections
├── style.css           # Layout, responsive design, and visual styling
└── assets/images/      # Project and experience images
```

Portfolio content is kept in `data.js`. Add or update project and experience entries there without changing the layout code. `script.js` renders that content, while `style.css` controls presentation and responsive behavior.

## Viewing locally

Open `index.html` directly in a browser. No installation or local server is required.

## Publishing with GitHub Pages

Push the repository to GitHub, then open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save. GitHub Pages will publish the static files without a build step.
