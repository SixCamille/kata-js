const KATA_MEMOS = {};

const JS_MEMO_ITEMS = {
  click: {
    title: "Écouter un clic",
    text: "addEventListener branche une fonction sur une action utilisateur. Le mémo montre la syntaxe, pas la décision à prendre dans le kata.",
    code: `button.addEventListener("click", function () {
  console.log("clic");
});`
  },
  input: {
    title: "Lire une saisie",
    text: "input se déclenche quand la valeur d'un champ change. value donne le texte actuel.",
    code: `field.addEventListener("input", function () {
  console.log(field.value);
});`
  },
  change: {
    title: "Lire une case cochée",
    text: "change est pratique pour les checkbox. checked vaut true ou false.",
    code: `checkbox.addEventListener("change", function () {
  console.log(checkbox.checked);
});`
  },
  submit: {
    title: "Intercepter un formulaire",
    text: "Sur un formulaire, preventDefault évite le rechargement de la page.",
    code: `form.addEventListener("submit", function (event) {
  event.preventDefault();
});`
  },
  keydown: {
    title: "Écouter le clavier",
    text: "keydown sert aux touches de contrôle comme Enter, Escape ou les flèches.",
    code: `document.addEventListener("keydown", function (event) {
  console.log(event.key);
});`
  },
  mouse: {
    title: "Événement de souris",
    text: "Les événements de souris donnent des coordonnées dans la fenêtre.",
    code: `zone.addEventListener("mousemove", function (event) {
  console.log(event.clientX, event.clientY);
});`
  },
  dragDrop: {
    title: "Événements drag & drop",
    text: "dragover et drop ont souvent besoin de preventDefault pour autoriser le dépôt.",
    code: `zone.addEventListener("dragover", function (event) {
  event.preventDefault();
});`
  },
  scroll: {
    title: "Lire le scroll",
    text: "window.scrollY donne la distance déjà parcourue depuis le haut de la page.",
    code: `window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});`
  },
  interval: {
    title: "Répéter avec un timer",
    text: "setInterval relance une fonction à intervalle régulier. clearInterval l'arrête.",
    code: `const timerId = setInterval(function () {
  console.log("tick");
}, 1000);

clearInterval(timerId);`
  },
  timeout: {
    title: "Attendre avant d'agir",
    text: "setTimeout exécute une fonction une seule fois après un délai.",
    code: `setTimeout(function () {
  console.log("plus tard");
}, 800);`
  },
  array: {
    title: "Tableau",
    text: "Un tableau stocke plusieurs valeurs dans un ordre. Les crochets accèdent à une valeur par son index.",
    code: `const items = ["alpha", "beta", "gamma"];
console.log(items[0]);`
  },
  filter: {
    title: "Tableau et filter",
    text: "filter crée un nouveau tableau avec les éléments qui passent le test.",
    code: `const mots = ["alpha", "beta", "gamma"];

const resultats = mots.filter(function (mot) {
  return mot.includes("a");
});`
  },
  forEach: {
    title: "Parcourir une liste",
    text: "forEach applique la même action à chaque élément d'un tableau ou d'une NodeList.",
    code: `elements.forEach(function (element) {
  console.log(element);
});`
  },
  state: {
    title: "Garder une valeur",
    text: "Une variable garde l'état utile entre deux événements.",
    code: `let count = 0;
let isOpen = false;`
  },
  condition: {
    title: "Écrire une condition",
    text: "if choisit un bloc de code selon une expression vraie ou fausse.",
    code: `if (value > 10) {
  console.log("grand");
}`
  },
  random: {
    title: "Nombre aléatoire",
    text: "Math.random produit un nombre entre 0 et 1. Math.floor garde un entier.",
    code: `const index = Math.floor(Math.random() * 5);`
  },
  percent: {
    title: "Calculer un pourcentage",
    text: "Un pourcentage vient souvent d'une valeur actuelle divisée par une valeur totale.",
    code: `const ratio = current / total;
const percent = ratio * 100;`
  },
  relativeCoordinates: {
    title: "Coordonnées relatives",
    text: "Pour obtenir une position locale, on retire la position du parent à la position de l'événement.",
    code: `const x = event.clientX - rect.left;
const y = event.clientY - rect.top;`
  },
  distance: {
    title: "Distance entre deux points",
    text: "Math.hypot calcule la longueur entre deux écarts x/y.",
    code: `const dx = x2 - x1;
const dy = y2 - y1;
const distance = Math.hypot(dx, dy);`
  },
  angle: {
    title: "Angle en radians",
    text: "cos et sin travaillent avec des radians. Ils donnent deux valeurs utilisables comme coordonnées x/y.",
    code: `const angle = Math.PI / 4;
const x = Math.cos(angle);
const y = Math.sin(angle);`
  },
  date: {
    title: "Lire l'heure",
    text: "Date donne l'heure courante sous forme d'objet JavaScript.",
    code: `const now = new Date();
console.log(now.getHours(), now.getMinutes());`
  },
  rect: {
    title: "Mesurer un élément",
    text: "getBoundingClientRect donne la position et la taille d'un élément dans la fenêtre.",
    code: `const rect = element.getBoundingClientRect();
console.log(rect.left, rect.top, rect.width, rect.height);`
  },
  createElement: {
    title: "Créer un élément",
    text: "createElement fabrique un élément. append l'ajoute ensuite dans le DOM.",
    code: `const item = document.createElement("li");
item.textContent = "Exemple";
list.append(item);`
  },
  classList: {
    title: "Ajouter une classe",
    text: "classList permet d'ajouter, retirer ou inverser une classe CSS.",
    code: `element.classList.add("is-active");
element.classList.remove("is-active");
element.classList.toggle("is-active");`
  },
  text: {
    title: "Modifier du texte",
    text: "textContent remplace le texte visible d'un élément.",
    code: `message.textContent = "Bonjour";
console.log(field.value.length);`
  },
  style: {
    title: "Modifier un style",
    text: "La propriété style modifie une règle CSS directement sur un élément.",
    code: `element.style.transform = "translateX(20px)";
element.style.width = "50%";`
  },
  attribute: {
    title: "Lire ou écrire un attribut",
    text: "dataset lit les attributs data-*. setAttribute modifie un attribut HTML.",
    code: `console.log(element.dataset.name);
button.setAttribute("aria-expanded", "true");`
  }
};

const CSS_MEMO_ITEMS = {
  stateClass: {
    title: "Classe d'état",
    text: "Une classe d'état laisse le CSS porter l'apparence pendant que JavaScript choisit seulement quand l'activer.",
    code: `.element.is-active {
  opacity: 1;
}`
  },
  transform: {
    title: "Déplacement visuel",
    text: "transform déplace visuellement un élément sans changer sa place dans le flux de la page.",
    code: `.element {
  transform: translate(20px, 10px);
}`
  },
  positionFrame: {
    title: "Repère de position",
    text: "Un parent en relative peut servir de cadre à des enfants positionnés en absolute.",
    code: `.stage {
  position: relative;
  overflow: hidden;
}

.item {
  position: absolute;
}`
  },
  transition: {
    title: "Transition courte",
    text: "Une transition rend un changement de classe ou de style plus lisible.",
    code: `.element {
  transition: transform 180ms ease, opacity 180ms ease;
}`
  },
  width: {
    title: "Largeur pilotable",
    text: "Une largeur de départ claire permet ensuite à JavaScript de modifier seulement la valeur.",
    code: `.bar {
  width: 0%;
}`
  },
  variable: {
    title: "Variable CSS",
    text: "Une variable CSS donne un nom à une valeur réutilisable.",
    code: `:root {
  --accent: #f2c14e;
}

.element {
  color: var(--accent);
}`
  },
  list: {
    title: "Liste lisible",
    text: "Une liste rendue par JavaScript reste plus stable si son espacement est prévu en CSS.",
    code: `.list {
  display: grid;
  gap: 8px;
}`
  },
  hiddenPanel: {
    title: "État caché / visible",
    text: "Une classe peut rendre un bloc visible sans changer le HTML.",
    code: `.panel {
  display: none;
}

.panel.is-visible {
  display: block;
}`
  },
  textFeedback: {
    title: "Zone de texte stable",
    text: "Une hauteur minimale évite les sauts de layout quand le texte change.",
    code: `.message {
  min-height: 1.5rem;
}`
  }
};

const KATA_MEMO_REFERENCES = {
  "accordeon-faq": { title: "Accordéon FAQ", js: ["click", "classList", "attribute"], css: ["hiddenPanel", "stateClass"] },
  "apparition-scroll": { title: "Apparition au scroll", js: ["scroll", "rect", "classList"], css: ["stateClass", "transition"] },
  "attraper-objets": { title: "Attraper les objets", js: ["mouse", "interval", "rect", "distance"], css: ["positionFrame"] },
  "autocompletion": { title: "Autocompletion", js: ["input", "array", "filter", "createElement"], css: ["list"] },
  "balles-mouvement": { title: "Plusieurs balles en mouvement", js: ["array", "state", "interval", "condition"], css: ["positionFrame", "transform"] },
  "barre-progression": { title: "Barre de progression", js: ["interval", "percent", "style"], css: ["width", "transition"] },
  "bouton-esquive": { title: "Bouton qui esquive", js: ["mouse", "rect", "distance", "condition"], css: ["positionFrame"] },
  "bouton-fuit": { title: "Bouton qui fuit", js: ["mouse", "rect", "relativeCoordinates", "random"], css: ["positionFrame"] },
  "bouton-jaime": { title: "Bouton J'aime", js: ["click", "state", "text", "classList"], css: ["stateClass"] },
  "carte-3d-interactive": { title: "Carte 3D interactive", js: ["mouse", "rect", "style"], css: ["transform", "variable", "transition"] },
  "carte-gratter": { title: "Carte à gratter", js: ["mouse", "relativeCoordinates", "createElement", "percent"], css: ["positionFrame"] },
  "carte-inclinee": { title: "Carte inclinée", js: ["mouse", "rect", "style"], css: ["transform", "transition"] },
  "changer-couleur-fond": { title: "Changer la couleur du fond", js: ["click", "array", "state", "style"], css: ["transition"] },
  "chat-simule": { title: "Chat simule", js: ["submit", "createElement", "timeout"], css: ["list", "textFeedback"] },
  "checkbox-section": { title: "Afficher selon une checkbox", js: ["change", "condition", "classList"], css: ["hiddenPanel"] },
  "chrono-todo": { title: "Chronomètre de todo list", js: ["submit", "array", "interval", "createElement"], css: ["list", "textFeedback"] },
  "command-palette": { title: "Command palette", js: ["keydown", "input", "array", "state"], css: ["list", "stateClass"] },
  "comparateur-images-enrichi": { title: "Comparateur d'images enrichi", js: ["mouse", "percent", "style"], css: ["positionFrame", "width"] },
  "compteur-caracteres": { title: "Compteur de caractères", js: ["input", "text"], css: ["textFeedback"] },
  "compteur-plus-moins": { title: "Compteur + / -", js: ["click", "state", "text", "condition"], css: ["textFeedback"] },
  "curseur-personnalise": { title: "Curseur personnalisé", js: ["mouse", "style"], css: ["transform", "positionFrame"] },
  "drag-drop-zones": { title: "Drag & drop avec zones", js: ["dragDrop", "attribute", "classList"], css: ["stateClass"] },
  "esquive-simple": { title: "Jeu d'esquive simple", js: ["keydown", "interval", "rect", "distance"], css: ["positionFrame"] },
  "etoiles-notation": { title: "Étoiles de notation", js: ["click", "forEach", "state", "classList"], css: ["stateClass"] },
  "fenetre-deplacable": { title: "Fenetre deplacable", js: ["mouse", "state", "relativeCoordinates", "style"], css: ["positionFrame"] },
  "filtre-produits": { title: "Filtre produits", js: ["click", "array", "filter", "createElement"], css: ["list"] },
  "fond-scroll": { title: "Fond lié au scroll", js: ["scroll", "percent", "style"], css: ["transition"] },
  "formulaire-dynamique": { title: "Formulaire dynamique", js: ["click", "createElement", "array"], css: ["list"] },
  "header-intelligent": { title: "Header intelligent", js: ["scroll", "state", "classList"], css: ["transform", "transition"] },
  "horloge-analogique": { title: "Horloge analogique", js: ["date", "interval", "style"], css: ["transform", "positionFrame"] },
  "image-flip": { title: "Image qui flip", js: ["click", "classList"], css: ["transform", "transition"] },
  "image-survol": { title: "Image qui change au survol", js: ["mouse", "attribute"], css: ["transition"] },
  "interface-tinder": { title: "Interface Tinder", js: ["mouse", "array", "style"], css: ["positionFrame", "transform"] },
  "lancer-de": { title: "Lancer de dé", js: ["click", "random", "text"], css: ["textFeedback"] },
  "machine-ecrire": { title: "Machine à écrire", js: ["interval", "state", "text"], css: ["textFeedback"] },
  "menu-radial": { title: "Menu radial", js: ["click", "state", "angle", "attribute"], css: ["positionFrame", "transform", "transition"] },
  "menu-toggle": { title: "Menu ouvrant / fermant", js: ["click", "classList", "attribute"], css: ["hiddenPanel", "transition"] },
  "message-temporaire": { title: "Message temporaire", js: ["click", "classList", "timeout"], css: ["stateClass", "transition"] },
  "mot-de-passe": { title: "Afficher / masquer un mot de passe", js: ["click", "state", "condition", "attribute"], css: ["textFeedback"] },
  "neige": { title: "Neige dans la fenêtre", js: ["interval", "createElement", "random"], css: ["positionFrame", "transform"] },
  "onglets": { title: "Onglets", js: ["click", "classList", "attribute"], css: ["hiddenPanel", "stateClass"] },
  "parallax-scroll": { title: "Parallax scroll", js: ["scroll", "attribute", "style"], css: ["positionFrame", "transform"] },
  "parallax-souris": { title: "Parallax souris", js: ["mouse", "attribute", "style"], css: ["positionFrame", "transform"] },
  "personnage-clavier": { title: "Petit personnage au clavier", js: ["keydown", "state", "condition", "style"], css: ["positionFrame"] },
  "popup-exterieure": { title: "Popup extérieure", js: ["click", "condition", "classList"], css: ["hiddenPanel", "positionFrame"] },
  "popup-simple": { title: "Popup simple", js: ["click", "classList"], css: ["hiddenPanel", "positionFrame"] },
  "progression-scroll": { title: "Progression du scroll", js: ["scroll", "percent", "style"], css: ["width"] },
  "puzzle-reordonnable": { title: "Puzzle réordonnable", js: ["dragDrop", "array", "state"], css: ["list"] },
  "recherche-clavier": { title: "Recherche clavier", js: ["input", "keydown", "array", "state"], css: ["list", "stateClass"] },
  "retour-haut": { title: "Retour en haut", js: ["scroll", "click", "classList"], css: ["stateClass", "transition"] },
  "rond-rebond": { title: "Rond qui rebondit", js: ["interval", "state", "condition", "style"], css: ["positionFrame", "transform"] },
  "sticker-clic": { title: "Sticker au clic", js: ["click", "relativeCoordinates", "createElement"], css: ["positionFrame"] },
  "sticker-orientation": { title: "Sticker emoji orienté", js: ["click", "relativeCoordinates", "createElement", "random"], css: ["positionFrame", "transform", "variable"] },
  "terminal-fictif": { title: "Terminal fictif", js: ["submit", "condition", "array", "createElement"], css: ["list", "textFeedback"] },
  "theme-switch": { title: "Thème clair / sombre", js: ["click", "classList", "state", "attribute"], css: ["variable", "stateClass"] },
  "toast-empile": { title: "Toasts empilés", js: ["click", "createElement", "timeout"], css: ["positionFrame", "transition"] },
  "todo-enrichie": { title: "Todo enrichie", js: ["submit", "array", "createElement", "text"], css: ["list", "stateClass"] },
  "tooltip": { title: "Tooltip", js: ["mouse", "classList", "style"], css: ["positionFrame", "stateClass"] },
  "trainee-souris": { title: "Traînée derrière la souris", js: ["mouse", "createElement", "timeout", "style"], css: ["positionFrame", "transition"] },
  "voiture-clic": { title: "Voiture au clic", js: ["click", "classList"], css: ["transform", "transition"] },
  "yeux-souris": { title: "Yeux qui suivent la souris", js: ["mouse", "rect", "style"], css: ["transform"] }
};

function getMemoItems(source, ids) {
  return ids.map(function (id) {
    return source[id];
  }).filter(Boolean);
}

function createSyntaxMemo(reference) {
  return {
    title: reference.title,
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Syntaxe utile",
            items: getMemoItems(JS_MEMO_ITEMS, reference.js)
          }
        ]
      },
      {
        id: "css",
        label: "CSS",
        sections: [
          {
            title: "Repères CSS",
            items: getMemoItems(CSS_MEMO_ITEMS, reference.css)
          }
        ]
      }
    ]
  };
}

Object.keys(KATA_MEMO_REFERENCES).forEach(function (slug) {
  KATA_MEMOS[slug] = createSyntaxMemo(KATA_MEMO_REFERENCES[slug]);
});

function createDefaultMemo() {
  return {
    title: "Mémo de démarrage",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Syntaxe utile",
            items: [
              JS_MEMO_ITEMS.click,
              JS_MEMO_ITEMS.classList
            ]
          }
        ]
      },
      {
        id: "css",
        label: "CSS",
        sections: [
          {
            title: "Repères CSS",
            items: [
              CSS_MEMO_ITEMS.stateClass,
              CSS_MEMO_ITEMS.transition
            ]
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
    tabList.setAttribute("aria-label", "Type de mémo");

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

  function openMemoDialog() {
    document.body.classList.add("is-memo-open");
    memoDialog.showModal();
  }

  function closeMemoDialog() {
    memoDialog.close();
  }

  openMemoButton.addEventListener("click", function () {
    openMemoDialog();
  });

  closeMemoButton.addEventListener("click", function () {
    closeMemoDialog();
  });

  memoDialog.addEventListener("click", function (event) {
    if (event.target === memoDialog) {
      closeMemoDialog();
    }
  });

  memoDialog.addEventListener("close", function () {
    document.body.classList.remove("is-memo-open");
  });
}
