const levelButtons = document.querySelectorAll(".level-button");
const drawButton = document.querySelector(".draw-button");
const kataResult = document.querySelector("#kata-result");

let selectedLevel = "tous";
let pickedKata = null;

function getVisibleKatas() {
  if (selectedLevel === "tous") {
    return KATAS;
  }

  return KATAS.filter(function (kata) {
    return kata.level === selectedLevel;
  });
}

function getPreviewPath(kata) {
  return kata.starter.replace("index.html", "starter/index.html");
}

function createKataCard(kata) {
  const card = document.createElement("article");
  card.className = "kata-card level-" + kata.level + " picked";

  const previewLink = document.createElement("a");
  previewLink.className = "kata-preview";
  previewLink.href = kata.starter;
  previewLink.setAttribute("aria-label", "Ouvrir le kata " + kata.title);

  const preview = document.createElement("iframe");
  preview.src = getPreviewPath(kata);
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

  const summary = document.createElement("p");
  summary.textContent = kata.summary;

  const concepts = document.createElement("div");
  concepts.className = "concepts";

  kata.concepts.forEach(function (concept) {
    const tag = document.createElement("span");
    tag.textContent = concept;
    concepts.append(tag);
  });

  const actions = document.createElement("div");
  actions.className = "actions";

  const starterLink = document.createElement("a");
  starterLink.className = "button";
  starterLink.href = kata.starter;
  starterLink.textContent = "Ouvrir le kata";

  const resourcesLink = document.createElement("a");
  resourcesLink.className = "button";
  resourcesLink.href = kata.resources;
  resourcesLink.textContent = "Ressources";

  actions.append(starterLink, resourcesLink);
  content.append(level, title, summary, concepts, actions);
  card.append(previewLink, content);

  return card;
}

function renderPlaceholder() {
  kataResult.innerHTML = "";

  const placeholder = document.createElement("div");
  placeholder.className = "picker-placeholder";
  placeholder.innerHTML = `
    <p class="eyebrow">Aucun kata tire</p>
    <h2>Choisis un niveau, puis tire un kata.</h2>
    <p>Le resultat apparaitra ici avec son apercu iframe et les liens utiles.</p>
  `;

  kataResult.append(placeholder);
}

function renderResult() {
  kataResult.innerHTML = "";

  if (!pickedKata) {
    renderPlaceholder();
    return;
  }

  if (!getVisibleKatas().includes(pickedKata)) {
    pickedKata = null;
    renderPlaceholder();
    return;
  }

  kataResult.append(createKataCard(pickedKata));
}

function drawKata() {
  const availableKatas = getVisibleKatas();

  const randomIndex = Math.floor(Math.random() * availableKatas.length);
  pickedKata = availableKatas[randomIndex];
  renderResult();
}

levelButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectedLevel = button.dataset.level;
    pickedKata = null;

    levelButtons.forEach(function (currentButton) {
      currentButton.classList.toggle("active", currentButton === button);
    });

    renderResult();
  });
});

drawButton.addEventListener("click", drawKata);

renderResult();
