const KATA_MEMOS = {};

const KATA_META_MEMOS = [
  ["accordeon-faq", "Accordéon FAQ", ["click", "classList", "aria-expanded", "état"]],
  ["apparition-scroll", "Apparition au scroll", ["scroll", "getBoundingClientRect", "classList", "viewport"]],
  ["attraper-objets", "Attraper les objets", ["mousemove", "setInterval", "collision", "score"]],
  ["autocompletion", "Autocompletion", ["input", "tableau", "filter", "rendu DOM"]],
  ["balles-mouvement", "Plusieurs balles en mouvement", ["tableau", "objets", "boucle", "collision bords"]],
  ["barre-progression", "Barre de progression", ["setInterval", "clearInterval", "style.width", "limites"]],
  ["bouton-esquive", "Bouton qui esquive", ["mousemove", "getBoundingClientRect", "vecteur", "distance", "bornes"]],
  ["bouton-fuit", "Bouton qui fuit", ["mousemove", "coordonnées", "getBoundingClientRect", "Math.random", "vecteur"]],
  ["bouton-jaime", "Bouton J'aime", ["click", "booléen", "textContent", "classList"]],
  ["carte-3d-interactive", "Carte 3D interactive", ["mousemove", "DOMRect", "variables CSS", "transform"]],
  ["carte-gratter", "Carte à gratter", ["mousemove", "createElement", "coordonnées", "pourcentage"]],
  ["carte-inclinee", "Carte inclinée", ["mousemove", "DOMRect", "transform", "mouseleave"]],
  ["changer-couleur-fond", "Changer la couleur du fond", ["click", "tableau", "index", "style.backgroundColor"]],
  ["chat-simule", "Chat simule", ["submit", "createElement", "setTimeout", "état"]],
  ["checkbox-section", "Afficher selon une checkbox", ["change", "checked", "classList", "condition"]],
  ["chrono-todo", "Chronomètre de todo list", ["formulaire", "tableau", "setInterval", "rendu DOM", "état composé"]],
  ["command-palette", "Command palette", ["keydown", "input", "tableau", "état sélectionné"]],
  ["comparateur-images-enrichi", "Comparateur d'images enrichi", ["mousedown", "mousemove", "pourcentage", "style.width"]],
  ["compteur-caracteres", "Compteur de caractères", ["input", "value", "length", "textContent"]],
  ["compteur-plus-moins", "Compteur + / -", ["click", "variable", "textContent", "conditions"]],
  ["curseur-personnalise", "Curseur personnalisé", ["mousemove", "clientX", "clientY", "transform"]],
  ["drag-drop-zones", "Drag & drop avec zones", ["dragstart", "dragover", "drop", "état"]],
  ["esquive-simple", "Jeu d'esquive simple", ["keydown", "setInterval", "collision", "état de jeu"]],
  ["etoiles-notation", "Étoiles de notation", ["click", "querySelectorAll", "index", "classList"]],
  ["fenetre-deplacable", "Fenetre deplacable", ["mousedown", "mousemove", "mouseup", "position", "état"]],
  ["filtre-produits", "Filtre produits", ["click", "tableau", "filter", "rendu DOM"]],
  ["fond-scroll", "Fond lié au scroll", ["scroll", "window.scrollY", "pourcentage", "style"]],
  ["formulaire-dynamique", "Formulaire dynamique", ["click", "createElement", "tableau", "rendu DOM"]],
  ["header-intelligent", "Header intelligent", ["scroll", "window.scrollY", "état précédent", "classList"]],
  ["horloge-analogique", "Horloge analogique", ["Date", "setInterval", "transform", "angles"]],
  ["image-flip", "Image qui flip", ["click", "classList", "transform", "état"]],
  ["image-survol", "Image qui change au survol", ["mouseenter", "mouseleave", "src", "alt"]],
  ["interface-tinder", "Interface Tinder", ["mousedown", "mousemove", "mouseup", "tableau", "transform"]],
  ["lancer-de", "Lancer de dé", ["click", "Math.random", "Math.floor", "textContent"]],
  ["machine-ecrire", "Machine à écrire", ["setInterval", "index", "slice", "textContent"]],
  ["menu-radial", "Menu radial", ["click", "état", "Math.cos", "Math.sin", "transform"]],
  ["menu-toggle", "Menu ouvrant / fermant", ["click", "classList", "aria-expanded", "condition"]],
  ["message-temporaire", "Message temporaire", ["click", "classe CSS", "setTimeout", "notification"]],
  ["mot-de-passe", "Afficher / masquer un mot de passe", ["DOM", "input", "condition", "état booléen"]],
  ["neige", "Neige dans la fenêtre", ["setInterval", "création d'élément", "random", "animation CSS"]],
  ["onglets", "Onglets", ["click", "classList", "dataset", "contenu actif"]],
  ["parallax-scroll", "Parallax scroll", ["scroll", "window.scrollY", "dataset", "transform"]],
  ["parallax-souris", "Parallax souris", ["mousemove", "dataset", "transform", "coordonnées"]],
  ["personnage-clavier", "Petit personnage au clavier", ["keydown", "position", "conditions", "limites"]],
  ["popup-exterieure", "Popup extérieure", ["click", "event.target", "classList", "condition"]],
  ["popup-simple", "Popup simple", ["click", "classList", "modale", "bouton fermer"]],
  ["progression-scroll", "Progression du scroll", ["scroll", "window.scrollY", "scrollHeight", "hauteur de page", "style.width"]],
  ["puzzle-reordonnable", "Puzzle réordonnable", ["dragstart", "drop", "tableau", "ordre"]],
  ["recherche-clavier", "Recherche clavier", ["input", "keydown", "tableau", "index sélectionné"]],
  ["retour-haut", "Retour en haut", ["scroll", "click", "window.scrollTo", "classList"]],
  ["rond-rebond", "Rond qui rebondit", ["setInterval", "position", "conditions", "directions"]],
  ["sticker-clic", "Sticker au clic", ["click", "coordonnées", "création d'élément", "style"]],
  ["sticker-orientation", "Sticker emoji orienté", ["click", "coordonnées", "création d'élément", "Math.random", "transform", "variables CSS"]],
  ["terminal-fictif", "Terminal fictif", ["submit", "conditions", "tableau", "rendu DOM"]],
  ["theme-switch", "Thème clair / sombre", ["click", "classe CSS", "variables CSS", "état booléen", "accessibilité"]],
  ["toast-empile", "Toasts empilés", ["click", "createElement", "setTimeout", "suppression"]],
  ["todo-enrichie", "Todo enrichie", ["submit", "tableau", "rendu DOM", "compteur"]],
  ["tooltip", "Tooltip", ["mouseenter", "mouseleave", "classList", "position"]],
  ["trainee-souris", "Traînée derrière la souris", ["mousemove", "createElement", "setTimeout", "position"]],
  ["voiture-clic", "Voiture au clic", ["click", "classList", "animation CSS", "état"]],
  ["yeux-souris", "Yeux qui suivent la souris", ["mousemove", "coordonnées souris", "DOMRect", "transform"]]
];

const JS_SYNTAX_EXAMPLES = [
  {
    matches: ["click"],
    title: "Écouter un clic",
    text: "addEventListener branche une fonction sur une action utilisateur. Le mémo montre la syntaxe, pas la décision à prendre dans le kata.",
    code: `button.addEventListener("click", function () {
  console.log("clic");
});`
  },
  {
    matches: ["input"],
    title: "Lire une saisie",
    text: "input se déclenche quand la valeur d'un champ change. value donne le texte actuel.",
    code: `field.addEventListener("input", function () {
  console.log(field.value);
});`
  },
  {
    matches: ["change", "checked"],
    title: "Lire une case cochée",
    text: "change est pratique pour les checkbox. checked vaut true ou false.",
    code: `checkbox.addEventListener("change", function () {
  console.log(checkbox.checked);
});`
  },
  {
    matches: ["submit", "formulaire"],
    title: "Intercepter un formulaire",
    text: "Sur un formulaire, preventDefault évite le rechargement de la page.",
    code: `form.addEventListener("submit", function (event) {
  event.preventDefault();
});`
  },
  {
    matches: ["keydown"],
    title: "Écouter le clavier",
    text: "keydown sert aux touches de contrôle comme Enter, Escape ou les flèches.",
    code: `document.addEventListener("keydown", function (event) {
  console.log(event.key);
});`
  },
  {
    matches: ["mousemove", "mousedown", "mouseup", "mouseenter", "mouseleave"],
    title: "Événement de souris",
    text: "Les événements de souris donnent des coordonnées dans la fenêtre.",
    code: `zone.addEventListener("mousemove", function (event) {
  console.log(event.clientX, event.clientY);
});`
  },
  {
    matches: ["dragstart", "dragover", "drop"],
    title: "Événements drag & drop",
    text: "dragover et drop ont souvent besoin de preventDefault pour autoriser le dépôt.",
    code: `zone.addEventListener("dragover", function (event) {
  event.preventDefault();
});`
  },
  {
    matches: ["scroll", "window.scrollY", "scrollHeight"],
    title: "Lire le scroll",
    text: "window.scrollY donne la distance déjà parcourue depuis le haut de la page.",
    code: `window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});`
  },
  {
    matches: ["setInterval", "clearInterval", "timer", "boucle"],
    title: "Répéter avec un timer",
    text: "setInterval relance une fonction à intervalle régulier. clearInterval l'arrête.",
    code: `const timerId = setInterval(function () {
  console.log("tick");
}, 1000);

clearInterval(timerId);`
  },
  {
    matches: ["setTimeout"],
    title: "Attendre avant d'agir",
    text: "setTimeout exécute une fonction une seule fois après un délai.",
    code: `setTimeout(function () {
  console.log("plus tard");
}, 800);`
  },
  {
    matches: ["tableau", "filter"],
    title: "Tableau et filter",
    text: "filter crée un nouveau tableau avec les éléments qui passent le test.",
    code: `const mots = ["alpha", "beta", "gamma"];

const resultats = mots.filter(function (mot) {
  return mot.includes("a");
});`
  },
  {
    matches: ["tableau", "querySelectorAll"],
    title: "Parcourir une liste",
    text: "forEach applique la même action à chaque élément d'un tableau ou d'une NodeList.",
    code: `elements.forEach(function (element) {
  console.log(element);
});`
  },
  {
    matches: ["objet", "objets", "état", "booléen", "variable", "index", "position", "score", "compteur"],
    title: "Garder une valeur",
    text: "Une variable garde l'état utile entre deux événements.",
    code: `let count = 0;
let isOpen = false;`
  },
  {
    matches: ["condition", "conditions", "limites", "bornes"],
    title: "Écrire une condition",
    text: "if choisit un bloc de code selon une expression vraie ou fausse.",
    code: `if (value > 10) {
  console.log("grand");
}`
  },
  {
    matches: ["Math.random", "random", "Math.floor"],
    title: "Nombre aléatoire",
    text: "Math.random produit un nombre entre 0 et 1. Math.floor garde un entier.",
    code: `const index = Math.floor(Math.random() * 5);`
  },
  {
    matches: ["pourcentage"],
    title: "Calculer un pourcentage",
    text: "Un pourcentage vient souvent d'une valeur actuelle divisée par une valeur totale.",
    code: `const ratio = current / total;
const percent = ratio * 100;`
  },
  {
    matches: ["coordonnées", "vecteur"],
    title: "Coordonnées relatives",
    text: "Pour obtenir une position locale, on retire la position du parent à la position de l'événement.",
    code: `const x = event.clientX - rect.left;
const y = event.clientY - rect.top;`
  },
  {
    matches: ["distance", "collision"],
    title: "Distance entre deux points",
    text: "Math.hypot calcule la longueur entre deux écarts x/y.",
    code: `const dx = x2 - x1;
const dy = y2 - y1;
const distance = Math.hypot(dx, dy);`
  },
  {
    matches: ["Math.cos", "Math.sin", "angles"],
    title: "Angle en radians",
    text: "cos et sin travaillent avec des radians. Ils donnent deux valeurs utilisables comme coordonnées x/y.",
    code: `const angle = Math.PI / 4;
const x = Math.cos(angle);
const y = Math.sin(angle);`
  },
  {
    matches: ["Date"],
    title: "Lire l'heure",
    text: "Date donne l'heure courante sous forme d'objet JavaScript.",
    code: `const now = new Date();
console.log(now.getHours(), now.getMinutes());`
  },
  {
    matches: ["getBoundingClientRect", "DOMRect", "viewport"],
    title: "Mesurer un élément",
    text: "getBoundingClientRect donne la position et la taille d'un élément dans la fenêtre.",
    code: `const rect = element.getBoundingClientRect();
console.log(rect.left, rect.top, rect.width, rect.height);`
  },
  {
    matches: ["createElement", "création d'élément", "rendu DOM"],
    title: "Créer un élément",
    text: "createElement fabrique un élément. append l'ajoute ensuite dans le DOM.",
    code: `const item = document.createElement("li");
item.textContent = "Exemple";
list.append(item);`
  },
  {
    matches: ["classList", "classe CSS"],
    title: "Ajouter une classe",
    text: "classList permet d'ajouter, retirer ou inverser une classe CSS.",
    code: `element.classList.add("is-active");
element.classList.remove("is-active");
element.classList.toggle("is-active");`
  },
  {
    matches: ["textContent", "value", "length"],
    title: "Modifier du texte",
    text: "textContent remplace le texte visible d'un élément.",
    code: `message.textContent = "Bonjour";
console.log(field.value.length);`
  },
  {
    matches: ["style", "transform", "style.width", "style.backgroundColor", "src", "alt", "variables CSS"],
    title: "Modifier un style",
    text: "La propriété style modifie une règle CSS directement sur un élément.",
    code: `element.style.transform = "translateX(20px)";
element.style.width = "50%";`
  },
  {
    matches: ["dataset", "aria-expanded", "accessibilité"],
    title: "Lire ou écrire un attribut",
    text: "dataset lit les attributs data-*. setAttribute modifie un attribut HTML.",
    code: `console.log(element.dataset.name);
button.setAttribute("aria-expanded", "true");`
  }
];

const CSS_SYNTAX_EXAMPLES = [
  {
    matches: ["classList", "classe CSS", "état", "booléen", "condition", "conditions"],
    title: "Classe d'état",
    text: "Une classe d'état laisse le CSS porter l'apparence pendant que JavaScript choisit seulement quand l'activer.",
    code: `.element.is-active {
  opacity: 1;
}`
  },
  {
    matches: ["transform", "position", "coordonnées", "style", "mousemove", "keydown", "animation CSS"],
    title: "Déplacement visuel",
    text: "transform déplace visuellement un élément sans changer sa place dans le flux de la page.",
    code: `.element {
  transform: translate(20px, 10px);
}`
  },
  {
    matches: ["position", "coordonnées", "getBoundingClientRect", "DOMRect", "collision", "collision bords"],
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
  {
    matches: ["setInterval", "setTimeout", "animation CSS", "transition"],
    title: "Transition courte",
    text: "Une transition rend un changement de classe ou de style plus lisible.",
    code: `.element {
  transition: transform 180ms ease, opacity 180ms ease;
}`
  },
  {
    matches: ["style.width", "pourcentage", "progression"],
    title: "Largeur pilotable",
    text: "Une largeur de départ claire permet ensuite à JavaScript de modifier seulement la valeur.",
    code: `.bar {
  width: 0%;
}`
  },
  {
    matches: ["variables CSS"],
    title: "Variable CSS",
    text: "Une variable CSS donne un nom à une valeur réutilisable.",
    code: `:root {
  --accent: #f2c14e;
}

.element {
  color: var(--accent);
}`
  },
  {
    matches: ["rendu DOM", "tableau", "filter", "querySelectorAll", "createElement"],
    title: "Liste lisible",
    text: "Une liste rendue par JavaScript reste plus stable si son espacement est prévu en CSS.",
    code: `.list {
  display: grid;
  gap: 8px;
}`
  }
];

function conceptMatches(concept, matches) {
  const normalizedConcept = concept.toLowerCase();

  return matches.some(function (match) {
    return normalizedConcept.includes(match.toLowerCase());
  });
}

function pickSyntaxItems(concepts, examples, fallbackItems) {
  const picked = [];

  examples.forEach(function (example) {
    const hasMatch = concepts.some(function (concept) {
      return conceptMatches(concept, example.matches);
    });

    if (hasMatch && !picked.some(function (item) { return item.title === example.title; })) {
      picked.push({
        title: example.title,
        text: example.text,
        code: example.code
      });
    }
  });

  fallbackItems.forEach(function (item) {
    if (picked.length < 4 && !picked.some(function (pickedItem) { return pickedItem.title === item.title; })) {
      picked.push(item);
    }
  });

  return picked.slice(0, 5);
}

function createSyntaxMemo(title, concepts) {
  const jsFallbackItems = [
    JS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Écouter un clic"; }),
    JS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Ajouter une classe"; }),
    JS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Garder une valeur"; })
  ];
  const cssFallbackItems = [
    CSS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Classe d'état"; }),
    CSS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Transition courte"; })
  ];

  return {
    title,
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Syntaxe utile",
            items: pickSyntaxItems(concepts, JS_SYNTAX_EXAMPLES, jsFallbackItems)
          }
        ]
      },
      {
        id: "css",
        label: "CSS",
        sections: [
          {
            title: "Repères CSS",
            items: pickSyntaxItems(concepts, CSS_SYNTAX_EXAMPLES, cssFallbackItems)
          }
        ]
      }
    ]
  };
}

KATA_META_MEMOS.forEach(function (memoHint) {
  KATA_MEMOS[memoHint[0]] = createSyntaxMemo(memoHint[1], memoHint[2]);
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
              JS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Écouter un clic"; }),
              JS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Ajouter une classe"; })
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
              CSS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Classe d'état"; }),
              CSS_SYNTAX_EXAMPLES.find(function (item) { return item.title === "Transition courte"; })
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
