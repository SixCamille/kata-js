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

function renderPlaceholder() {
  kataResult.innerHTML = "";

  const placeholder = document.createElement("div");
  placeholder.className = "picker-placeholder";
  placeholder.innerHTML = `
    <p class="eyebrow">Aucun kata tire</p>
    <h2>Choisis un niveau, puis tire un kata.</h2>
    <p>Le resultat apparaitra ici avec son apercu iframe et le lien vers le kata.</p>
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

  kataResult.append(KataCards.createKataCard(pickedKata, {
    root: "..",
    picked: true,
    showConcepts: true
  }));
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
