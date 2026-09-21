const KATA_MEMOS = {
  "mot-de-passe": {
    title: "Afficher / masquer",
    sections: [
      {
        title: "Notions du pense-bete",
        items: [
          {
            title: "Selection DOM",
            text: "querySelector recupere le premier element qui correspond au selecteur CSS.",
            code: `const field = document.querySelector("input");
const button = document.querySelector("button");`
          },
          {
            title: "Evenements et conditions",
            text: "Un clic declenche une fonction. Une condition choisit quoi faire selon l'etat actuel.",
            code: `button.addEventListener("click", function () {
  if (isVisible) {
    // cas visible
  }
});`
          }
        ]
      },
      {
        title: "Specifique au kata",
        items: [
          {
            title: "Type d'un input",
            text: "Le champ peut alterner entre un affichage masque et un affichage lisible.",
            code: `field.type = "text";
field.type = "password";`
          },
          {
            title: "Etat booleen",
            text: "Un booleen memorise si le mot de passe est actuellement visible.",
            code: `let isVisible = false;
isVisible = !isVisible;`
          }
        ]
      }
    ]
  },
  "image-flip": {
    title: "Image qui flip",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Declencher le changement",
            items: [
              {
                title: "Selectionner la carte",
                text: "La carte est un bouton. Tu peux donc la selectionner puis ecouter son clic.",
                code: `const card = document.querySelector(".card");`
              },
              {
                title: "Alterner une classe",
                text: "L'objectif JS est de changer un etat visuel. La classe sert de pont entre le clic et le CSS.",
                code: `card.classList.toggle("is-flipped");`
              }
            ]
          }
        ]
      },
      {
        id: "css",
        label: "CSS",
        sections: [
          {
            title: "Effet 3D",
            items: [
              {
                title: "Perspective",
                text: "Le parent peut donner de la profondeur. Plus la valeur est petite, plus l'effet est marque.",
                code: `main {
  perspective: 900px;
}`
              },
              {
                title: "Espace 3D",
                text: "La carte qui tourne doit conserver ses faces dans un espace 3D.",
                code: `.card {
  transform-style: preserve-3d;
  transition: transform 320ms ease;
}`
              }
            ]
          },
          {
            title: "Faces de la carte",
            items: [
              {
                title: "Masquer l'envers",
                text: "Chaque face peut cacher son envers pendant la rotation.",
                code: `.front,
.back {
  backface-visibility: hidden;
}`
              },
              {
                title: "Preparer le verso",
                text: "Le verso commence deja retourne. Quand la carte pivote, il se retrouve lisible.",
                code: `.back {
  transform: rotateY(180deg);
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "yeux-souris": {
    title: "Suivre le pointeur",
    sections: [
      {
        title: "Notions du pense-bete",
        items: [
          {
            title: "Souris",
            text: "Sur un evenement de souris, on peut lire la position du pointeur dans la fenetre.",
            code: `document.addEventListener("mousemove", function (event) {
  console.log(event.clientX, event.clientY);
});`
          },
          {
            title: "Modifier un element",
            text: "Le DOM peut modifier le style d'un element en reaction a l'utilisateur.",
            code: `pupil.style.transform = "translate(8px, -4px)";`
          }
        ]
      },
      {
        title: "Specifique au kata",
        items: [
          {
            title: "Position d'un element",
            text: "La boite d'un element permet de calculer son centre dans la fenetre.",
            code: `const rect = element.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;`
          },
          {
            title: "Limiter une valeur",
            text: "Limiter le deplacement evite que la pupille sorte trop loin de l'oeil.",
            code: `const limited = Math.max(-12, Math.min(12, value));`
          }
        ]
      }
    ]
  },
  "chrono-todo": {
    title: "Chrono + todo",
    sections: [
      {
        title: "Notions du pense-bete",
        items: [
          {
            title: "Temps",
            text: "setInterval repete une action jusqu'a clearInterval.",
            code: `const timerId = setInterval(function () {
  seconds = seconds + 1;
}, 1000);

clearInterval(timerId);`
          },
          {
            title: "Tableaux",
            text: "Un tableau stocke plusieurs valeurs dans un ordre et peut servir de source pour le rendu.",
            code: `const tasks = [];
tasks.push({ label: "Relire la consigne", done: false });`
          }
        ]
      },
      {
        title: "Specifique au kata",
        items: [
          {
            title: "Submit d'un formulaire",
            text: "Sur un submit, empeche le rechargement pour garder l'application sur la page.",
            code: `form.addEventListener("submit", function (event) {
  event.preventDefault();
});`
          },
          {
            title: "Vider puis reconstruire",
            text: "Refaire le rendu depuis le tableau aide a synchroniser l'ecran avec l'etat courant.",
            code: `list.innerHTML = "";

tasks.forEach(function (task) {
  const item = document.createElement("li");
  item.textContent = task.label;
  list.append(item);
});`
          }
        ]
      }
    ]
  }
};

function createDefaultMemo() {
  return {
    title: "Memo de demarrage",
    sections: [
      {
        title: "Methode de live coding",
        items: [
          {
            title: "Identifier les elements utiles",
            text: "Commence par selectionner la zone, le bouton ou les elements que ton script doit manipuler.",
            code: `const zone = document.querySelector(".zone");
const button = document.querySelector("button");`
          },
          {
            title: "Reagir a une action",
            text: "Un kata visuel part souvent d'un evenement utilisateur, puis modifie le DOM ou le style.",
            code: `button.addEventListener("click", function () {
  // mettre a jour l'ecran ici
});`
          }
        ]
      },
      {
        title: "Points a verifier",
        items: [
          {
            title: "Etat et rendu",
            text: "Si l'ecran depend d'une valeur, garde cette valeur dans une variable puis rends l'affichage a partir d'elle."
          },
          {
            title: "Console",
            text: "Utilise console.log pour verifier les valeurs lues dans les evenements avant d'ecrire toute la logique."
          }
        ]
      }
    ]
  };
}

const kataMemo = KATA_MEMOS[document.body.dataset.kata] || createDefaultMemo();
const openMemoButton = document.querySelector("[data-open-memo]");

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

function getMemoTabs(memo) {
  if (memo.tabs && memo.tabs.length) {
    return memo.tabs;
  }

  return [
    {
      id: "js",
      label: "JS",
      sections: memo.sections
    }
  ];
}

function appendMemoSections(parent, sections) {
  sections.forEach(function (sectionData) {
    const section = createElement("section", "kata-memo-section");
    section.append(createElement("h3", null, sectionData.title));

    sectionData.items.forEach(function (itemData) {
      const article = document.createElement("article");
      const itemTitle = createElement("h4", null, itemData.title);
      const text = createElement("p", null, itemData.text);

      article.append(itemTitle, text);

      if (itemData.code) {
        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.textContent = itemData.code;
        pre.append(code);
        article.append(pre);
      }

      section.append(article);
    });

    parent.append(section);
  });
}

function createMemoDialog(memo) {
  const dialog = createElement("dialog", "kata-memo-dialog");
  dialog.id = "kata-memo";
  dialog.setAttribute("aria-labelledby", "memo-title");

  const panel = createElement("div", "kata-memo-panel");
  const header = createElement("header", "kata-memo-header");
  const titleGroup = createElement("div", "kata-memo-title-group");
  const title = createElement("h2", null, memo.title);
  title.id = "memo-title";
  const tabs = getMemoTabs(memo);
  const hasTabs = tabs.length > 1;

  const closeButton = createElement("button", "memo-button", "Fermer");
  closeButton.type = "button";
  closeButton.dataset.closeMemo = "";

  titleGroup.append(title);
  panel.append(header);

  if (hasTabs) {
    const tabList = createElement("div", "kata-memo-tabs");
    tabList.setAttribute("role", "tablist");
    tabList.setAttribute("aria-label", "Type de memo");

    tabs.forEach(function (tabData, index) {
      const tabButton = createElement("button", "kata-memo-tab", tabData.label);
      const tabId = "memo-tab-" + tabData.id;
      const panelId = "memo-panel-" + tabData.id;

      tabButton.type = "button";
      tabButton.id = tabId;
      tabButton.dataset.memoTab = tabData.id;
      tabButton.setAttribute("role", "tab");
      tabButton.setAttribute("aria-controls", panelId);
      tabButton.setAttribute("aria-selected", index === 0 ? "true" : "false");

      tabList.append(tabButton);
    });

    titleGroup.append(tabList);
  }

  header.append(titleGroup, closeButton);

  tabs.forEach(function (tabData, index) {
    const tabPanel = createElement("div", "kata-memo-tab-panel");
    tabPanel.id = "memo-panel-" + tabData.id;
    tabPanel.dataset.memoPanel = tabData.id;

    if (hasTabs) {
      tabPanel.setAttribute("role", "tabpanel");
      tabPanel.setAttribute("aria-labelledby", "memo-tab-" + tabData.id);
      tabPanel.hidden = index !== 0;
    }

    appendMemoSections(tabPanel, tabData.sections);
    panel.append(tabPanel);
  });

  dialog.append(panel);
  document.body.append(dialog);

  return dialog;
}

if (kataMemo && openMemoButton) {
  const memoDialog = createMemoDialog(kataMemo);
  const closeMemoButton = memoDialog.querySelector("[data-close-memo]");
  const tabButtons = memoDialog.querySelectorAll("[data-memo-tab]");
  const tabPanels = memoDialog.querySelectorAll("[data-memo-panel]");

  function selectMemoTab(tabId) {
    tabButtons.forEach(function (button) {
      button.setAttribute("aria-selected", button.dataset.memoTab === tabId ? "true" : "false");
    });

    tabPanels.forEach(function (panel) {
      panel.hidden = panel.dataset.memoPanel !== tabId;
    });
  }

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectMemoTab(button.dataset.memoTab);
    });
  });

  openMemoButton.addEventListener("click", function () {
    memoDialog.showModal();
  });

  closeMemoButton.addEventListener("click", function () {
    memoDialog.close();
  });

  memoDialog.addEventListener("click", function (event) {
    if (event.target === memoDialog) {
      memoDialog.close();
    }
  });
}
