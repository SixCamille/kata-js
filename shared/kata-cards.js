const KataCards = (function () {
  function withRoot(path, root) {
    if (!root || root === ".") {
      return path;
    }

    return root.replace(/\/$/, "") + "/" + path;
  }

  function getPreviewPath(kata, root) {
    return withRoot(kata.starter.replace("index.html", "starter/index.html"), root);
  }

  function createKataCard(kata, options) {
    const settings = options || {};
    const root = settings.root || ".";

    const card = document.createElement("article");
    card.className = "kata-card level-" + kata.level + (settings.picked ? " picked" : "");

    const previewLink = document.createElement("a");
    previewLink.className = "kata-preview";
    previewLink.href = withRoot(kata.starter, root);
    previewLink.setAttribute("aria-label", "Ouvrir le kata " + kata.title);

    const preview = document.createElement("iframe");
    preview.src = getPreviewPath(kata, root);
    preview.title = "Apercu du kata " + kata.title;
    preview.tabIndex = -1;
    preview.setAttribute("scrolling", "no");
    previewLink.append(preview);

    const content = document.createElement("div");
    content.className = "kata-card-content";

    const level = document.createElement("span");
    level.className = "level-tag";
    level.textContent = kata.level;

    const title = document.createElement("h2");
    title.textContent = kata.title;

    const progressSummary = typeof KataProgress !== "undefined" && kata.id
      ? KataProgress.createSummary(kata.id)
      : null;

    const actions = document.createElement("div");
    actions.className = "actions";

    const starterLink = document.createElement("a");
    starterLink.className = "button";
    starterLink.href = withRoot(kata.starter, root);
    starterLink.textContent = "Ouvrir le kata";

    if (progressSummary) {
      actions.append(progressSummary);
    }

    actions.append(starterLink);
    content.append(level, title);

    content.append(actions);
    card.append(previewLink, content);

    return card;
  }

  return {
    createKataCard: createKataCard
  };
})();
