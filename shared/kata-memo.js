const KATA_MEMOS = {
  "sticker-clic": {
    title: "Sticker au clic",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Creer un element",
            items: [
              {
                title: "Un sticker par clic",
                text: "Un clic peut creer un nouvel element, lui donner une classe, puis l'ajouter dans la zone.",
                code: `const sticker = document.createElement("span");
sticker.classList.add("sticker");
zone.append(sticker);`
              },
              {
                title: "Coordonnees du clic",
                text: "Les coordonnees de l'evenement servent a placer le sticker la ou l'utilisateur clique.",
                code: `console.log(event.clientX, event.clientY);`
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
            title: "Positionner dans une zone",
            items: [
              {
                title: "Zone relative",
                text: "La zone de jeu peut servir de repere aux stickers places en absolu.",
                code: `.stage {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Sticker absolu",
                text: "Un element en position absolute peut etre place avec left et top.",
                code: `.sticker {
  position: absolute;
  left: 120px;
  top: 80px;
}`
              }
            ]
          },
          {
            title: "Centrer sur le clic",
            items: [
              {
                title: "Corriger le point d'ancrage",
                text: "Par defaut, left/top placent le coin haut gauche. translate permet de centrer le sticker sur le curseur.",
                code: `.sticker {
  transform: translate(-50%, -50%);
}`
              }
            ]
          }
        ]
      }
    ]
  },
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
  "menu-toggle": {
    title: "Menu ouvrant / fermant",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Piloter un etat",
            items: [
              {
                title: "Classe d'ouverture",
                text: "Le JavaScript peut se limiter a ajouter ou retirer une classe d'etat.",
                code: `menu.classList.toggle("is-open");`
              },
              {
                title: "Accessibilite",
                text: "Le bouton peut aussi annoncer si le menu est ouvert avec aria-expanded.",
                code: `button.setAttribute("aria-expanded", "true");`
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
            title: "Afficher ou cacher",
            items: [
              {
                title: "Etat ferme",
                text: "Le menu peut etre cache par defaut.",
                code: `.menu {
  display: none;
}`
              },
              {
                title: "Etat ouvert",
                text: "Une classe d'etat sur le menu permet de changer uniquement l'affichage.",
                code: `.menu.is-open {
  display: grid;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "popup-simple": {
    title: "Popup simple",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Changer l'etat",
            items: [
              {
                title: "Ouvrir et fermer",
                text: "Deux boutons peuvent manipuler la meme classe d'etat sur la popup.",
                code: `popup.classList.add("is-open");
popup.classList.remove("is-open");`
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
            title: "Calque plein ecran",
            items: [
              {
                title: "Overlay fixe",
                text: "Une popup peut couvrir la fenetre avec position fixed et inset.",
                code: `.popup {
  position: fixed;
  inset: 0;
}`
              },
              {
                title: "Centrer la boite",
                text: "Grid permet de centrer simplement la boite de dialogue dans l'overlay.",
                code: `.popup {
  display: grid;
  place-items: center;
}`
              }
            ]
          },
          {
            title: "Etat visible",
            items: [
              {
                title: "Cachee puis ouverte",
                text: "Le meme principe que le menu fonctionne : cache par defaut, visible avec une classe.",
                code: `.popup {
  display: none;
}

.popup.is-open {
  display: grid;
}`
              }
            ]
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
            title: "Superposer deux faces",
            items: [
              {
                title: "Mettre les faces en calques",
                text: "Les deux faces peuvent occuper exactement la meme place dans la carte.",
                code: `.card {
  position: relative;
  overflow: hidden;
}

.front,
.back {
  position: absolute;
  inset: 0;
}`
              },
              {
                title: "Placer le recto au-dessus",
                text: "Le recto est le calque visible au depart. Le verso reste dessous, deja pret.",
                code: `.front {
  z-index: 1;
  width: 100%;
}`
              }
            ]
          },
          {
            title: "Animer une largeur",
            items: [
              {
                title: "Preparer la transition",
                text: "La transition indique au navigateur d'animer les changements de largeur.",
                code: `.front {
  overflow: hidden;
  transition: width 280ms ease;
}`
              },
              {
                title: "Reveler le verso",
                text: "Quand la classe d'etat est ajoutee, le recto devient de plus en plus etroit et laisse voir le verso.",
                code: `.card.is-flipped .front {
  width: 0;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "neige": {
    title: "Neige dans la fenetre",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Creer regulierement",
            items: [
              {
                title: "Intervalle",
                text: "setInterval permet de creer un flocon a rythme regulier.",
                code: `setInterval(function () {
  // creer un flocon
}, 300);`
              },
              {
                title: "Nettoyer apres animation",
                text: "Quand l'animation est finie, le flocon peut etre retire du DOM.",
                code: `flake.addEventListener("animationend", function () {
  flake.remove();
});`
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
            title: "Flocon anime",
            items: [
              {
                title: "Position de depart",
                text: "Un flocon peut commencer au-dessus de l'ecran et etre place horizontalement par JavaScript.",
                code: `.flake {
  position: fixed;
  top: -24px;
}`
              },
              {
                title: "Animation de chute",
                text: "Une animation CSS peut faire descendre le flocon sans boucle JavaScript.",
                code: `.flake {
  animation: fall 4s linear forwards;
}

@keyframes fall {
  to {
    transform: translateY(calc(100vh + 40px));
  }
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
    tabs: [
      {
        id: "js",
        label: "JS",
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
          }
        ]
      },
      {
        id: "calcul",
        label: "Calcul",
        sections: [
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
      {
        id: "css",
        label: "CSS",
        sections: [
          {
            title: "Deplacer sans casser le layout",
            items: [
              {
                title: "Transform",
                text: "transform deplace visuellement la pupille sans modifier la place de l'oeil dans la page.",
                code: `.pupil {
  transform: translate(8px, -4px);
}`
              },
              {
                title: "Transition courte",
                text: "Une transition tres courte rend le mouvement plus lisible sans le rendre mou.",
                code: `.pupil {
  transition: transform 80ms linear;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "rond-rebond": {
    title: "Rond qui rebondit",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Position et direction",
            items: [
              {
                title: "Coordonnees",
                text: "La position peut etre stockee dans deux variables, puis mise a jour dans une boucle.",
                code: `let x = 0;
let y = 0;`
              },
              {
                title: "Affichage",
                text: "JavaScript peut traduire les valeurs x/y en style CSS.",
                code: `ball.style.transform = "translate(" + x + "px, " + y + "px)";`
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
            title: "Scene et mobile",
            items: [
              {
                title: "Scene relative",
                text: "La zone de jeu sert de cadre pour le mouvement.",
                code: `.stage {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Rond absolu",
                text: "Le rond peut etre place dans la scene sans influencer le reste du document.",
                code: `.ball {
  position: absolute;
  left: 0;
  top: 0;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "papillon-anime": {
    title: "Papillon anime",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Declencher l'animation",
            items: [
              {
                title: "Classe d'etat",
                text: "JavaScript peut ajouter une classe, puis laisser CSS animer le mouvement.",
                code: `butterfly.classList.add("is-flying");`
              },
              {
                title: "Relancer plus tard",
                text: "setTimeout peut retirer la classe une fois l'animation terminee.",
                code: `setTimeout(function () {
  butterfly.classList.remove("is-flying");
}, 3000);`
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
            title: "Animations CSS",
            items: [
              {
                title: "Animation de vol",
                text: "Une classe peut declencher un @keyframes de deplacement.",
                code: `.butterfly.is-flying {
  animation: fly 3s ease-in-out forwards;
}

@keyframes fly {
  to {
    transform: translateX(560px) translateY(-120px);
  }
}`
              },
              {
                title: "Battement des ailes",
                text: "Une animation courte et infinie peut faire vivre les ailes pendant le vol.",
                code: `.wing {
  animation: flap 260ms ease-in-out infinite alternate;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "voiture-clic": {
    title: "Voiture au clic",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Declencher une course",
            items: [
              {
                title: "Classe d'animation",
                text: "Le clic peut ajouter une classe qui lance l'animation CSS.",
                code: `car.classList.add("is-driving");`
              },
              {
                title: "Fin d'animation",
                text: "L'evenement animationend permet de savoir quand la voiture a fini sa course.",
                code: `car.addEventListener("animationend", function () {
  car.classList.remove("is-driving");
});`
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
            title: "Deplacer avec CSS",
            items: [
              {
                title: "Animation declenchee",
                text: "Une classe peut lancer une animation et garder le dernier etat avec forwards.",
                code: `.car.is-driving {
  animation: drive 2.5s ease-in-out forwards;
}`
              },
              {
                title: "Translation",
                text: "transform permet de deplacer la voiture sans changer son point de depart dans le flux.",
                code: `@keyframes drive {
  to {
    transform: translateX(620px);
  }
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "sticker-orientation": {
    title: "Sticker emoji oriente",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Donner des valeurs au CSS",
            items: [
              {
                title: "Variable CSS",
                text: "JavaScript peut envoyer une valeur au CSS avec setProperty.",
                code: `sticker.style.setProperty("--rotation", "18deg");`
              },
              {
                title: "Valeur aleatoire",
                text: "Math.random peut produire une rotation differente a chaque sticker.",
                code: `const rotation = Math.floor(Math.random() * 60) - 30;`
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
            title: "Composer un transform",
            items: [
              {
                title: "Centrage et rotation",
                text: "Un transform peut combiner le centrage sur le clic et la rotation du sticker.",
                code: `.sticker {
  transform: translate(-50%, -50%) rotate(var(--rotation, 0deg));
}`
              },
              {
                title: "Valeur par defaut",
                text: "La valeur apres la virgule sert de fallback si JavaScript n'a pas encore defini la variable.",
                code: `rotate(var(--rotation, 0deg))`
              }
            ]
          }
        ]
      }
    ]
  },
  "balles-mouvement": {
    title: "Plusieurs balles en mouvement",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Plusieurs objets",
            items: [
              {
                title: "Donnees par balle",
                text: "Chaque balle peut avoir ses propres coordonnees et vitesses.",
                code: `const ball = {
  x: 20,
  y: 30,
  vx: 3,
  vy: 2
};`
              },
              {
                title: "Mettre a jour l'affichage",
                text: "Apres le calcul, chaque element peut recevoir sa nouvelle position visuelle.",
                code: `element.style.transform = "translate(" + ball.x + "px, " + ball.y + "px)";`
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
            title: "Arene de mouvement",
            items: [
              {
                title: "Cadre relatif",
                text: "L'arene sert de reference et masque ce qui sort du cadre.",
                code: `.arena {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Balle absolue",
                text: "Les balles peuvent etre placees librement dans l'arene.",
                code: `.ball {
  position: absolute;
  left: 0;
  top: 0;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "personnage-clavier": {
    title: "Petit personnage au clavier",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Deplacement clavier",
            items: [
              {
                title: "Lire la touche",
                text: "event.key permet de distinguer les fleches du clavier.",
                code: `document.addEventListener("keydown", function (event) {
  console.log(event.key);
});`
              },
              {
                title: "Limiter aux bords",
                text: "Math.max et Math.min aident a garder le personnage dans l'arene.",
                code: `x = Math.max(0, Math.min(maxX, x));`
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
            title: "Arene et personnage",
            items: [
              {
                title: "Arene relative",
                text: "Le personnage peut etre positionne par rapport a son arene.",
                code: `.arena {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Personnage absolu",
                text: "left/top donnent une position de depart que JavaScript peut modifier.",
                code: `.hero {
  position: absolute;
  left: 300px;
  top: 180px;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "esquive-simple": {
    title: "Jeu d'esquive simple",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Boucle de jeu",
            items: [
              {
                title: "Position du joueur",
                text: "Le joueur peut garder sa position dans deux variables.",
                code: `let playerX = 230;
let playerY = 440;`
              },
              {
                title: "Collision",
                text: "getBoundingClientRect permet de comparer les boites du joueur et des obstacles.",
                code: `const playerRect = player.getBoundingClientRect();`
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
            title: "Objets dans l'arene",
            items: [
              {
                title: "Position absolue",
                text: "Le joueur et les obstacles peuvent vivre dans le meme repere visuel.",
                code: `.player,
.obstacle {
  position: absolute;
}`
              },
              {
                title: "Formes simples",
                text: "border-radius permet de distinguer rapidement des obstacles ronds d'un joueur carre.",
                code: `.obstacle {
  border-radius: 50%;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "attraper-objets": {
    title: "Attraper les objets",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Souris et chute",
            items: [
              {
                title: "Suivre la souris",
                text: "La position horizontale de la souris peut piloter le panier.",
                code: `stage.addEventListener("mousemove", function (event) {
  console.log(event.clientX);
});`
              },
              {
                title: "Faire tomber un objet",
                text: "Un intervalle peut augmenter progressivement la position verticale d'un objet.",
                code: `itemY = itemY + speed;`
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
            title: "Scene de jeu",
            items: [
              {
                title: "Stage relatif",
                text: "Le stage sert de repere commun au panier et aux objets.",
                code: `.stage {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Elements absolus",
                text: "Le panier et les objets peuvent etre deplaces par JavaScript.",
                code: `.basket,
.item {
  position: absolute;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "drag-drop-zones": {
    title: "Drag & drop avec zones",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Evenements drag",
            items: [
              {
                title: "Autoriser le drop",
                text: "dragover doit empecher le comportement par defaut pour autoriser un depot.",
                code: `zone.addEventListener("dragover", function (event) {
  event.preventDefault();
});`
              },
              {
                title: "Etat visuel",
                text: "JavaScript peut ajouter une classe quand une zone est survolee ou validee.",
                code: `zone.classList.add("is-over");`
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
            title: "Zones lisibles",
            items: [
              {
                title: "Contour de depot",
                text: "Une bordure en pointilles indique clairement qu'une zone accepte un depot.",
                code: `.drop-zone {
  border: 2px dashed #8f9bad;
}`
              },
              {
                title: "Feedback d'etat",
                text: "Une classe peut renforcer visuellement la zone survolee ou acceptee.",
                code: `.drop-zone.is-over {
  background: #eef4f6;
  border-color: #5778c9;
}`
              }
            ]
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
