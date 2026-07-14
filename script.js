"use strict";

const linkLabels = {
  liveDemo: "Live demo",
  repo: "Source code",
  video: "Demo video"
};

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

function createExternalLink(url, label) {
  if (!url) {
    return null;
  }

  const link = createElement("a", "button button-secondary", label);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  return link;
}

function renderProjects() {
  const projectList = document.querySelector("#project-list");
  projectList.textContent = "";

  projects.forEach((project) => {
    const article = createElement("article", "project-card");
    const content = createElement("div", "project-content");
    const heading = createElement("h3", null, project.title);
    const description = createElement("p", "project-description", project.description);
    const tags = createElement("ul", "tag-list");
    tags.setAttribute("aria-label", `${project.title} technologies`);

    project.tags.forEach((tag) => {
      tags.append(createElement("li", null, tag));
    });

    content.append(heading, description, tags);

    const actions = createElement("div", "project-actions");
    Object.entries(project.links).forEach(([type, url]) => {
      const link = createExternalLink(url, linkLabels[type] || type);

      if (link) {
        actions.append(link);
      }
    });

    if (actions.childElementCount > 0) {
      content.append(actions);
    }

    const gallery = createElement("div", "project-gallery");
    gallery.setAttribute("role", "group");
    gallery.setAttribute("aria-label", `${project.title} screenshots`);

    project.screenshots.forEach((source, index) => {
      const figure = createElement("figure", "screenshot-frame");
      const image = document.createElement("img");
      const imageNumber = index + 1;

      image.src = source;
      image.alt = `${project.title}: ${project.description} Screenshot ${imageNumber} of ${project.screenshots.length}.`;
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 1600;
      image.height = 900;

      const caption = createElement(
        "figcaption",
        null,
        `${project.title} — screenshot ${imageNumber}`
      );

      figure.append(image, caption);
      gallery.append(figure);
    });

    article.append(content, gallery);
    projectList.append(article);
  });
}

function renderExperience() {
  const experienceGrid = document.querySelector("#experience-grid");
  experienceGrid.textContent = "";

  experience.forEach((item) => {
    const article = createElement("article", "experience-card");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = createElement("figcaption", "experience-content");
    const titleRow = createElement("div", "experience-title-row");

    image.src = item.image;
    image.alt = `${item.title}: ${item.caption}`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 1600;
    image.height = 900;

    titleRow.append(createElement("h3", null, item.title));

    if (item.date) {
      titleRow.append(createElement("span", "date-badge", item.date));
    }

    caption.append(titleRow, createElement("p", null, item.caption));
    figure.append(image, caption);
    article.append(figure);
    experienceGrid.append(article);
  });
}

renderProjects();
renderExperience();
