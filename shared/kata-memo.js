const KATA_MEMOS = {
  "sticker-clic": {
    title: "Sticker au clic",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Créer un élément",
            items: [
              {
                title: "Un sticker par clic",
                text: "Un clic peut créer un nouvel élément, lui donner une classe, puis l'ajouter dans la zone.",
                code: `const sticker = document.createElement("span");
sticker.classList.add("sticker");
zone.append(sticker);`
              },
              {
                title: "Coordonnees du clic",
                text: "Les coordonnées de l'événement servent à placer le sticker là où l'utilisateur clique.",
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
                text: "La zone de jeu peut servir de repère aux stickers places en absolu.",
                code: `.stage {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Sticker absolu",
                text: "Un élément en position absolute peut être placé avec left et top.",
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
                text: "Par défaut, left/top placent le coin haut gauche. translate permet de centrer le sticker sur le curseur.",
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
  "theme-switch": {
    title: "Thème clair / sombre",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Piloter le thème",
            items: [
              {
                title: "Classe sur la page",
                text: "Le JavaScript peut ajouter ou retirer une classe sur body. Le CSS se chargé ensuite de changer l'apparence.",
                code: `document.body.classList.toggle("dark");`
              },
              {
                title: "État du bouton",
                text: "Le texte du bouton et aria-pressed doivent rester synchronisés avec le thème courant.",
                code: `button.textContent = "Passer en clair";
button.setAttribute("aria-pressed", "true");`
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
            title: "Variables CSS",
            items: [
              {
                title: "Nommer une couleur",
                text: "Une variable CSS commence par deux tirets. Elle permet de donner un nom à une valeur réutilisable.",
                code: `:root {
  --page-bg: #edf2f7;
}`
              },
              {
                title: "Utiliser la variable",
                text: "var(...) récupère la valeur de la variable. Si la variable change, tous les styles qui l'utilisent changent aussi.",
                code: `body {
  background: var(--page-bg);
}`
              },
              {
                title: "Changer un thème",
                text: "Pour un thème, on peut garder les memes propriétés CSS et remplacer seulement les variables dans une classe d'état.",
                code: `body.dark {
  --page-bg: #111827;
  --page-text: #f8fafc;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "barre-progression": {
    title: "Barre de progression",
    sections: [
      {
        title: "Timer et progression",
        items: [
          {
            title: "Repeter toutes les secondes",
            text: "setInterval lance une fonction à intervalle régulier. Ici, l'intervalle utile est 1000 millisecondes.",
            code: `const timerId = setInterval(function () {
  // augmenter la progression
}, 1000);`
          },
          {
            title: "Arrêter le timer",
            text: "Quand la progression atteint 100, clearInterval évite de continuer à exécuter la fonction.",
            code: `clearInterval(timerId);`
          },
          {
            title: "Limiter la valeur",
            text: "Math.min permet de ne jamais dépasser la limite haute, même si on ajoute encore une valeur.",
            code: `progress = Math.min(100, progress + 10);`
          }
        ]
      },
      {
        title: "Mettre à jour l'écran",
        items: [
          {
            title: "Largeur de la barre",
            text: "La largeur peut recevoir une chaine avec un pourcentage pour refleter la valeur courante.",
            code: `bar.style.width = progress + "%";`
          },
          {
            title: "Texte et accessibilité",
            text: "Le pourcentage affiché et aria-valuenow doivent suivre la même valeur que la barre.",
            code: `percent.textContent = progress + "%";
progressBar.setAttribute("aria-valuenow", progress);`
          },
          {
            title: "Remise à zéro",
            text: "Le bouton reset doit remettre la valeur à 0, mettre à jour l'écran, puis relancer le timer si la barre était arrêtée.",
            code: `progress = 0;
// mettre à jour l'écran
// relancer le timer si besoin`
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
            title: "Sélection DOM",
            text: "querySelector récupère le premier élément qui correspond au sélecteur CSS.",
            code: `const field = document.querySelector("input");
const button = document.querySelector("button");`
          },
          {
            title: "Evenements et conditions",
            text: "Un clic déclenche une fonction. Une condition choisit quoi faire selon l'état actuel.",
            code: `button.addEventListener("click", function () {
  if (isVisible) {
    // cas visible
  }
});`
          }
        ]
      },
      {
        title: "Spécifique au kata",
        items: [
          {
            title: "Type d'un input",
            text: "Le champ peut alterner entre un affichage masqué et un affichage lisible.",
            code: `field.type = "text";
field.type = "password";`
          },
          {
            title: "État booléen",
            text: "Un booléen memorise si le mot de passe est actuellement visible.",
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
            title: "Piloter un état",
            items: [
              {
                title: "Classe d'ouverture",
                text: "Le JavaScript peut se limiter à ajouter ou retirer une classe d'état.",
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
            title: "Ouvrir avec une transition",
            items: [
              {
                title: "État ferme mais animable",
                text: "display ne s'anime pas. Pour un effet plus joli, le menu reste dans la page mais sa hauteur et son opacité sont réduites.",
                code: `.menu {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 240ms ease, opacity 180ms ease;
}`
              },
              {
                title: "État ouvert",
                text: "La classe d'état augmente la hauteur et remet l'opacité. Le navigateur anime le passage entre les deux.",
                code: `.menu.is-open {
  max-height: 180px;
  opacity: 1;
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
            title: "Changer l'état",
            items: [
              {
                title: "Ouvrir et fermer",
                text: "Deux boutons peuvent manipuler la même classe d'état sur la popup.",
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
            title: "Calque plein écran",
            items: [
              {
                title: "Overlay fixe",
                text: "Une popup peut couvrir la fenêtre avec position fixed et inset.",
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
            title: "État visible",
            items: [
              {
                title: "Cachée puis ouverte",
                text: "Le même principe que le menu fonctionne : caché par défaut, visible avec une classe.",
                code: `.popup {
  display: none;
}

.popup.is-open {
  display: block;
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
            title: "Déclencher le changement",
            items: [
              {
                title: "Sélectionner la carte",
                text: "La carte est un bouton. Tu peux donc la sélectionner puis écouter son clic.",
                code: `const card = document.querySelector(".card");`
              },
              {
                title: "Alterner une classe",
                text: "L'objectif JS est de changer un état visuel. La classe sert de pont entre le clic et le CSS.",
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
                text: "Les deux faces peuvent occuper exactement la même placé dans la carte.",
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
                text: "Le recto est le calque visible au départ. Le verso reste dessous, déjà prêt.",
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
                title: "Révéler le verso",
                text: "Quand la classe d'état est ajoutée, le recto devient de plus en plus étroit et laisse voir le verso.",
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
    title: "Neige dans la fenêtre",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Créer régulièrement",
            items: [
              {
                title: "Intervalle",
                text: "setInterval permet de créer un flocon à rythme régulier.",
                code: `setInterval(function () {
  // créer un flocon
}, 300);`
              },
              {
                title: "Caractère de flocon",
                text: "Un flocon peut être un simple texte choisi dans une petite liste.",
                code: `const shapes = [".", "*", "+"];
flake.textContent = shapes[randomIndex];`
              },
              {
                title: "Nettoyer après animation",
                text: "Quand l'animation est finie, le flocon peut être retiré du DOM.",
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
                title: "Position de départ",
                text: "Un flocon peut commencer au-dessus de l'écran et être placé horizontalement par JavaScript.",
                code: `.flake {
  position: fixed;
  top: -24px;
}`
              },
              {
                title: "Taille variable",
                text: "Changer font-size suffit pour obtenir des flocons textuels de tailles différentes.",
                code: `.flake {
  font-size: 1.4rem;
  color: #ffffff;
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
                text: "Sur un événement de souris, on peut lire la position du pointeur dans la fenêtre.",
                code: `document.addEventListener("mousemove", function (event) {
  console.log(event.clientX, event.clientY);
});`
              },
              {
                title: "Modifier un élément",
                text: "Le DOM peut modifier le style d'un élément en reaction à l'utilisateur.",
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
            title: "Spécifique au kata",
            items: [
              {
                title: "Position d'un élément",
                text: "La boite d'un élément permet de calculer son centre dans la fenêtre.",
                code: `const rect = element.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;`
              },
              {
                title: "Limiter une valeur",
                text: "Limiter le déplacement évite que la pupille sorte trop loin de l'oeil.",
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
            title: "Déplacer sans casser le layout",
            items: [
              {
                title: "Transform",
                text: "transform déplacé visuellement la pupille sans modifier la placé de l'oeil dans la page.",
                code: `.pupil {
  transform: translate(8px, -4px);
}`
              },
              {
                title: "Transition courte",
                text: "Une transition très courte rend le mouvement plus lisible sans le rendre mou.",
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
                text: "La position peut être stockée dans deux variables, puis mise à jour dans une boucle.",
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
                text: "Le rond peut être placé dans la scène sans influencer le reste du document.",
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
  "voiture-clic": {
    title: "Voiture au clic",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Déclencher une course",
            items: [
              {
                title: "Classe d'animation",
                text: "Le clic peut ajouter une classe qui lance l'animation CSS.",
                code: `car.classList.add("is-driving");`
              },
              {
                title: "Fin d'animation",
                text: "L'événement animationend permet de savoir quand la voiture a fini sa course.",
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
            title: "Déplacer avec CSS",
            items: [
              {
                title: "Animation déclenchée",
                text: "Une classe peut lancer une animation et garder le dernier état avec forwards.",
                code: `.car.is-driving {
  animation: drive 2.5s ease-in-out forwards;
}`
              },
              {
                title: "Translation",
                text: "transform permet de déplacer la voiture sans changer son point de départ dans le flux.",
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
    title: "Sticker emoji orienté",
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
                title: "Valeur aléatoire",
                text: "Math.random peut produire une rotation différente à chaque sticker.",
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
                title: "Valeur par défaut",
                text: "La valeur après la virgule sert de fallback si JavaScript n'a pas encore défini la variable.",
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
                title: "Données par balle",
                text: "Chaque balle peut avoir ses propres coordonnées et vitesses.",
                code: `const ball = {
  x: 20,
  y: 30,
  vx: 3,
  vy: 2
};`
              },
              {
                title: "Mettre à jour l'affichage",
                text: "Apres le calcul, chaque élément peut recevoir sa nouvelle position visuelle.",
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
            title: "Arène de mouvement",
            items: [
              {
                title: "Cadre relatif",
                text: "L'arène sert de référence et masque ce qui sort du cadre.",
                code: `.arena {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Balle absolue",
                text: "Les balles peuvent être placées librement dans l'arène.",
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
                text: "event.key permet de distinguer les flèches du clavier.",
                code: `document.addEventListener("keydown", function (event) {
  console.log(event.key);
});`
              },
              {
                title: "Limiter aux bords",
                text: "Math.max et Math.min aident à garder le personnage dans l'arène.",
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
            title: "Arène et personnage",
            items: [
              {
                title: "Arène relative",
                text: "Le personnage peut être positionné par rapport à son arène.",
                code: `.arena {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Personnage absolu",
                text: "left/top donnent une position de départ que JavaScript peut modifier.",
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
                text: "getBoundingClientRect permet de comparer les boîtes du joueur et des obstacles.",
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
            title: "Objets dans l'arène",
            items: [
              {
                title: "Position absolue",
                text: "Le joueur et les obstacles peuvent vivre dans le même repère visuel.",
                code: `.player,
.obstacle {
  position: absolute;
}`
              },
              {
                title: "Formes simples",
                text: "border-radius permet de distinguer rapidement des obstacles ronds d'un joueur carré.",
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
                text: "Le stage sert de repère commun au panier et aux objets.",
                code: `.stage {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Elements absolus",
                text: "Le panier et les objets peuvent être déplacés par JavaScript.",
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
                text: "dragover doit empêcher le comportement par défaut pour autoriser un dépôt.",
                code: `zone.addEventListener("dragover", function (event) {
  event.preventDefault();
});`
              },
              {
                title: "État visuel",
                text: "JavaScript peut ajouter une classe quand une zone est survolée ou validée.",
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
                title: "Contour de dépôt",
                text: "Une bordure en pointilles indique clairement qu'une zone accepte un dépôt.",
                code: `.drop-zone {
  border: 2px dashed #8f9bad;
}`
              },
              {
                title: "Feedback d'état",
                text: "Une classe peut renforcer visuellement la zone survolée ou acceptée.",
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
            text: "setInterval répète une action jusqu'à clearInterval.",
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
        title: "Spécifique au kata",
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
            text: "Refaire le rendu depuis le tableau aide à synchroniser l'écran avec l'état courant.",
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
  },
  "carte-inclinee": {
    title: "Carte inclinée",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Position de la souris",
            items: [
              {
                title: "Boîte de la carte",
                text: "getBoundingClientRect donne la position et la taille de la carte dans la fenêtre.",
                code: `const rect = card.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;`
              },
              {
                title: "Écart depuis le centre",
                text: "Comparer event.clientX et event.clientY avec le centre permet de savoir de quel côté se trouve la souris.",
                code: `const offsetX = event.clientX - centerX;
const offsetY = event.clientY - centerY;`
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
            title: "Effet 3D léger",
            items: [
              {
                title: "Perspective sur le parent",
                text: "La perspective se place sur le parent pour rendre les rotations 3D plus lisibles.",
                code: `.stage {
  perspective: 900px;
}`
              },
              {
                title: "Rotation de la carte",
                text: "rotateX et rotateY inclinent visuellement la carte sans changer sa place dans la page.",
                code: `.tilt-card {
  transform: rotateX(6deg) rotateY(-8deg);
}`
              },
              {
                title: "Retour fluide",
                text: "Une transition courte rend le retour à plat plus doux quand la souris quitte la carte.",
                code: `.tilt-card {
  transition: transform 180ms ease;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "menu-radial": {
    title: "Menu radial",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Ouvrir autour du centre",
            items: [
              {
                title: "État ouvert / fermé",
                text: "Un booléen suffit pour savoir si les actions doivent être déployées ou repliées.",
                code: `let isOpen = false;
isOpen = !isOpen;`
              },
              {
                title: "Angle autour d'un cercle",
                text: "Math.cos et Math.sin transforment un angle en coordonnées x/y autour du bouton central.",
                code: `const x = Math.cos(angle) * radius;
const y = Math.sin(angle) * radius;`
              },
              {
                title: "Accessibilité du bouton",
                text: "aria-expanded doit refléter l'état du menu principal.",
                code: `toggle.setAttribute("aria-expanded", String(isOpen));`
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
            title: "Boutons superposés puis déplacés",
            items: [
              {
                title: "Même point de départ",
                text: "Les boutons peuvent être placés en absolute au centre du conteneur avant d'être déplacés.",
                code: `.radial-menu {
  position: relative;
}

.action {
  position: absolute;
  inset: 0;
  margin: auto;
}`
              },
              {
                title: "Déplacement visuel",
                text: "translate déplace chaque action autour du centre sans modifier le flux de la page.",
                code: `.action {
  transform: translate(90px, -40px);
}`
              },
              {
                title: "Animation",
                text: "La transition permet de voir les actions sortir et rentrer au lieu de changer brutalement.",
                code: `.action {
  transition: transform 220ms ease, opacity 220ms ease;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "terminal-fictif": {
    title: "Terminal fictif",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Commandes et historique",
            items: [
              {
                title: "Empêcher le rechargement",
                text: "Un terminal dans un formulaire doit bloquer le comportement par défaut du submit.",
                code: `form.addEventListener("submit", function (event) {
  event.preventDefault();
});`
              },
              {
                title: "Normaliser la commande",
                text: "trim enlève les espaces inutiles et toLowerCase facilite la comparaison.",
                code: `const command = input.value.trim().toLowerCase();`
              },
              {
                title: "Ajouter une ligne",
                text: "Chaque commande ou réponse peut devenir un nouvel élément ajouté dans l'écran.",
                code: `const line = document.createElement("p");
line.textContent = "> " + command;
screen.append(line);`
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
            title: "Aspect terminal",
            items: [
              {
                title: "Police monospace",
                text: "Une police monospace rend les lignes de commande plus lisibles et plus proches d'un terminal.",
                code: `.terminal {
  font-family: Consolas, "Courier New", monospace;
}`
              },
              {
                title: "Historique scrollable",
                text: "La zone d'écran peut défiler quand l'historique devient plus long que le terminal.",
                code: `.screen {
  overflow: auto;
}`
              },
              {
                title: "Input intégré",
                text: "Un input transparent donne l'impression d'écrire directement dans le terminal.",
                code: `input {
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "recherche-clavier": {
    title: "Recherche clavier",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Filtrer et sélectionner",
            items: [
              {
                title: "Filtrer pendant la saisie",
                text: "L'événement input sert à recalculer la liste affichée quand le texte change.",
                code: `input.addEventListener("input", function () {
  // filtrer les commandes
});`
              },
              {
                title: "Lire les flèches",
                text: "keydown permet de réagir aux touches de navigation et à Entrée.",
                code: `input.addEventListener("keydown", function (event) {
  console.log(event.key);
});`
              },
              {
                title: "Index sélectionné",
                text: "Un nombre peut mémoriser quel résultat est actuellement actif.",
                code: `let selectedIndex = 0;
selectedIndex = selectedIndex + 1;`
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
            title: "Résultat actif",
            items: [
              {
                title: "Liste stable",
                text: "Une hauteur minimale évite que l'interface saute trop quand il y a peu de résultats.",
                code: `.results {
  min-height: 160px;
}`
              },
              {
                title: "Classe active",
                text: "La classe active montre quel résultat sera validé si l'utilisateur appuie sur Entrée.",
                code: `.results li.active {
  color: #ffffff;
  background: #2563eb;
}`
              },
              {
                title: "Séparer les lignes",
                text: "Des bordures simples rendent les résultats plus faciles à parcourir au clavier.",
                code: `.results li {
  padding: 11px 12px;
  border-bottom: 1px solid #e2e8f0;
}`
              }
            ]
          }
        ]
      }
    ]
  },
  "bouton-fuit": {
    title: "Bouton qui fuit",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Coordonnees et distance",
            items: [
              {
                title: "Boite d'un element",
                text: "getBoundingClientRect donne la position et la taille d'un element dans la fenetre. C'est utile pour comparer la souris avec le bouton ou l'arene.",
                code: `const buttonRect = button.getBoundingClientRect();
const arenaRect = arena.getBoundingClientRect();`
              },
              {
                title: "Coordonnees souris",
                text: "event.clientX et event.clientY donnent la position de la souris dans la fenetre. C'est le point de depart pour calculer une position locale.",
                code: `const mouseX = event.clientX;
const mouseY = event.clientY;`
              },
              {
                title: "Coordonnees locales x/y",
                text: "En retirant left/top de l'arene, tu convertis les coordonnees de la fenetre en coordonnees dans l'arene.",
                code: `const localX = event.clientX - arenaRect.left;
const localY = event.clientY - arenaRect.top;`
              },
              {
                title: "Centre du bouton",
                text: "Le centre se calcule avec left/top plus la moitie de la largeur/hauteur. Tu peux ensuite comparer ce centre avec la souris.",
                code: `const buttonCenterX = buttonRect.left + buttonRect.width / 2;
const buttonCenterY = buttonRect.top + buttonRect.height / 2;`
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
            title: "Placer dans l'arene",
            items: [
              {
                title: "Arene relative",
                text: "L'arene sert de repere au bouton et masque ce qui depasse.",
                code: `.arena {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Bouton absolu",
                text: "Un bouton en absolute peut etre deplace avec left et top depuis JavaScript.",
                code: `.runner {
  position: absolute;
  left: 45%;
  top: 45%;
}`
              }
            ]
          }
        ]
      }
    ]
  }
};

const COURSE_KATA_MEMO_HINTS = [
  ["changer-couleur-fond", "Changer la couleur du fond", "click, tableau de couleurs, index courant, style.backgroundColor", `body {
  transition: background 220ms ease;
}`],
  ["accordeon-faq", "Accordéon FAQ", "click, classList, aria-expanded, réponse associée", `.faq-item p {
  display: none;
}

.faq-item.is-open p {
  display: block;
}`],
  ["onglets", "Onglets", "click, dataset, classe active, panneau correspondant", `.panel {
  display: none;
}

.panel.is-active {
  display: block;
}`],
  ["tooltip", "Tooltip", "mouseenter, mouseleave, classList, positionnement absolu", `.tooltip {
  position: absolute;
  opacity: 0;
}

.tooltip.is-visible {
  opacity: 1;
}`],
  ["image-survol", "Image qui change au survol", "mouseenter, mouseleave, src, alt", `img {
  display: block;
  width: 100%;
}`],
  ["etoiles-notation", "Étoiles de notation", "click, querySelectorAll, index, classList", `.rating button {
  color: #cbd5e1;
}

.rating button.is-active {
  color: #f59e0b;
}`],
  ["bouton-jaime", "Bouton J'aime", "click, booléen, compteur, aria-pressed", `.like-button.is-liked {
  color: #ffffff;
  background: #ef4444;
}`],
  ["checkbox-section", "Afficher selon une checkbox", "change, checked, condition, classe visible", `.extra-panel {
  display: none;
}

.extra-panel.is-visible {
  display: block;
}`],
  ["compteur-caracteres", "Compteur de caractères", "input, value, length, textContent", `textarea {
  min-height: 140px;
  resize: vertical;
}`],
  ["lancer-de", "Lancer de dé", "click, Math.random, Math.floor, textContent", `.dice {
  display: grid;
  place-items: center;
}`],
  ["fond-scroll", "Fond lié au scroll", "scroll, window.scrollY, progression, style.backgroundColor", `.meter {
  position: fixed;
  top: 16px;
  left: 16px;
}`],
  ["header-intelligent", "Header intelligent", "scroll, position précédente, comparaison, transform", `.smart-header {
  position: fixed;
  transition: transform 180ms ease;
}

.smart-header.is-hidden {
  transform: translateY(-100%);
}`],
  ["apparition-scroll", "Apparition au scroll", "scroll, getBoundingClientRect, viewport, classList", `.reveal-card {
  opacity: 0;
  transform: translateY(30px);
}

.reveal-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}`],
  ["retour-haut", "Retour en haut", "scroll, click, window.scrollTo, classList", `.back-top {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}

.back-top.is-visible {
  opacity: 1;
  pointer-events: auto;
}`],
  ["curseur-personnalise", "Curseur personnalisé", "mousemove, clientX, clientY, transform", `.custom-cursor {
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
}`],
  ["trainee-souris", "Traînée derrière la souris", "mousemove, createElement, coordonnées, setTimeout", `.trail {
  position: fixed;
  pointer-events: none;
  animation: fade 500ms ease forwards;
}`],
  ["popup-exterieure", "Popup extérieure", "click, event.target, overlay, condition", `.modal {
  position: fixed;
  inset: 0;
  display: none;
}

.modal.is-open {
  display: grid;
}`],
  ["filtre-produits", "Filtre produits", "click, tableau, filter, rendu DOM", `.products {
  display: grid;
  gap: 10px;
}`],
  ["todo-enrichie", "Todo enrichie", "submit, tableau, rendu DOM, compteur", `.todo-list li.is-done {
  color: #64748b;
  text-decoration: line-through;
}`],
  ["machine-ecrire", "Machine à écrire", "setInterval, index, slice, textContent", `.typewriter {
  min-height: 56px;
}`],
  ["puzzle-reordonnable", "Puzzle réordonnable", "dragstart, dragover, drop, ordre", `.puzzle li {
  cursor: grab;
}`],
  ["carte-gratter", "Carte à gratter", "mousemove, coordonnées locales, createElement, progression", `.scratch-card {
  position: relative;
  overflow: hidden;
}

.scratch-hole {
  position: absolute;
  border-radius: 50%;
}`],
  ["interface-tinder", "Interface Tinder", "mousedown, mousemove, mouseup, transform, tableau", `.swipe-card {
  position: absolute;
  cursor: grab;
  user-select: none;
}`],
  ["carte-3d-interactive", "Carte 3D interactive", "mousemove, DOMRect, variables CSS, transform", `.card-3d {
  transform-style: preserve-3d;
}

.shine {
  background: radial-gradient(circle at var(--shine-x) var(--shine-y), rgba(255,255,255,0.45), transparent 35%);
}`],
  ["parallax-souris", "Parallax souris", "mousemove, dataset, facteur de vitesse, transform", `.layer {
  position: absolute;
}`],
  ["parallax-scroll", "Parallax scroll", "scroll, window.scrollY, dataset, transform", `.shape {
  position: absolute;
}`],
  ["command-palette", "Command palette", "keydown, input, tableau, sélection active", `.palette {
  position: fixed;
  display: none;
}

.palette.is-open {
  display: block;
}`],
  ["formulaire-dynamique", "Formulaire dynamique", "click, createElement, tableau, rendu DOM", `.participant {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
}`],
  ["horloge-analogique", "Horloge analogique", "Date, setInterval, angles, transform", `.hand {
  position: absolute;
  transform-origin: bottom center;
}`],
  ["comparateur-images-enrichi", "Comparateur d'images enrichi", "mousedown, mousemove, pourcentage, style.width", `.compare {
  position: relative;
  overflow: hidden;
}

.handle {
  position: absolute;
  cursor: ew-resize;
}`]
];

function createCourseKataMemo(title, concepts, cssCode) {
  return {
    title,
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Briques utiles",
            items: [
              {
                title: "Concepts du kata",
                text: "Ce kata mobilise surtout : " + concepts + ". Commence par identifier l'événement principal et les valeurs qui changent."
              },
              {
                title: "Avancer par étapes",
                text: "Teste d'abord les sélections et les valeurs avec console.log, puis connecte seulement ensuite le rendu visuel."
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
            title: "Repère CSS",
            items: [
              {
                title: "Classes et propriétés utiles",
                text: "Le starter fournit déjà les classes de base. Le JavaScript doit les activer ou modifier quelques propriétés ciblées.",
                code: cssCode
              }
            ]
          }
        ]
      }
    ]
  };
}

COURSE_KATA_MEMO_HINTS.forEach(function (memoHint) {
  KATA_MEMOS[memoHint[0]] = createCourseKataMemo(memoHint[1], memoHint[2], memoHint[3]);
});

function createDefaultMemo() {
  return {
    title: "Mémo de démarrage",
    sections: [
      {
        title: "Méthode de live coding",
        items: [
          {
            title: "Identifier les éléments utiles",
            text: "Commence par sélectionner la zone, le bouton ou les éléments que ton script doit manipuler.",
            code: `const zone = document.querySelector(".zone");
const button = document.querySelector("button");`
          },
          {
            title: "Réagir à une action",
            text: "Un kata visuel part souvent d'un événement utilisateur, puis modifie le DOM ou le style.",
            code: `button.addEventListener("click", function () {
  // mettre à jour l'écran ici
});`
          }
        ]
      },
      {
        title: "Points à vérifier",
        items: [
          {
            title: "État et rendu",
            text: "Si l'écran dépend d'une valeur, garde cette valeur dans une variable puis rends l'affichage à partir d'elle."
          },
          {
            title: "Console",
            text: "Utilise console.log pour vérifier les valeurs lues dans les événements avant d'écrire toute la logique."
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
