const levelButtons = document.querySelectorAll(".level-button");
const drawButton = document.querySelector(".draw-button");
const title = document.querySelector("#kata-title");
const level = document.querySelector("#kata-level");
const summary = document.querySelector("#kata-summary");
const concepts = document.querySelector("#kata-concepts");
const starterLink = document.querySelector("#starter-link");
const consigneLink = document.querySelector("#consigne-link");
const resourcesLink = document.querySelector("#resources-link");
const visual = document.querySelector("#kata-visual");

let selectedLevel = "facile";

function renderKata(kata) {
  title.textContent = kata.title;
  level.textContent = kata.level;
  summary.textContent = kata.summary;
  starterLink.href = kata.starter;
  consigneLink.href = kata.consigne;
  resourcesLink.href = kata.resources;
  visual.innerHTML = kata.visual;

  concepts.innerHTML = "";
  kata.concepts.forEach(function (concept) {
    const tag = document.createElement("span");
    tag.textContent = concept;
    concepts.append(tag);
  });
}

function drawKata() {
  const availableKatas = KATAS.filter(function (kata) {
    return kata.level === selectedLevel;
  });

  const randomIndex = Math.floor(Math.random() * availableKatas.length);
  renderKata(availableKatas[randomIndex]);
}

levelButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectedLevel = button.dataset.level;

    levelButtons.forEach(function (currentButton) {
      currentButton.classList.toggle("active", currentButton === button);
    });

    drawKata();
  });
});

drawButton.addEventListener("click", drawKata);

drawKata();
