const KATA_MEMOS = {
  "drag-drop-zones": {
    title: "Drag & drop avec zones",
    tabs: [
      {
        id: "method",
        label: "Méthode",
        sections: [
          {
            title: "Découper l'interaction",
            items: [
              {
                title: "Trois moments à séparer",
                text: "Un drag & drop se traite rarement dans une seule fonction. Sépare le départ du glisser, le survol d'une zone, puis le dépôt final. Chaque étape a un rôle précis."
              },
              {
                title: "Une donnée à transporter",
                text: "Au départ du glisser, mémorise ce qui est déplacé. Pour ce kata, l'information peut rester simple : l'élément carte ou une valeur placée dans dataTransfer."
              },
              {
                title: "Une décision au moment du drop",
                text: "La zone possède déjà une information dans son HTML. Le dépôt doit lire cette information, décider si la zone accepte la carte, puis mettre à jour le message et l'état visuel."
              }
            ]
          }
        ]
      },
      {
        id: "events",
        label: "Événements",
        sections: [
          {
            title: "Événements drag & drop",
            items: [
              {
                title: "Début du glisser",
                text: "dragstart se déclenche sur l'élément draggable. C'est le bon endroit pour préparer la donnée déplacée ou ajouter une classe d'état.",
                code: `card.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", "js-card");
});`
              },
              {
                title: "Autoriser le dépôt",
                text: "Par défaut, une zone ne reçoit pas drop. Il faut annuler le comportement par défaut pendant dragover sur les zones prévues.",
                code: `zone.addEventListener("dragover", function (event) {
  event.preventDefault();
});`
              },
              {
                title: "Traiter le dépôt",
                text: "drop est le moment où tu lis la zone ciblée et où tu décides de l'état final. Garde la logique courte : lire, tester, afficher.",
                code: `zone.addEventListener("drop", function (event) {
  event.preventDefault();
  const isAccepted = zone.dataset.accept === "true";
});`
              }
            ]
          }
        ]
      },
      {
        id: "dom",
        label: "DOM",
        sections: [
          {
            title: "Zones, état et rendu",
            items: [
              {
                title: "Parcourir les zones",
                text: "querySelectorAll récupère toutes les zones. forEach permet ensuite de brancher les mêmes événements sur chacune sans dupliquer le code.",
                code: `const zones = document.querySelectorAll(".drop-zone");

zones.forEach(function (zone) {
  // ajouter les listeners de cette zone
});`
              },
              {
                title: "Lire data-accept",
                text: "dataset transforme les attributs data-* en propriétés JavaScript. Attention : la valeur lue est une chaîne de caractères, pas un booléen.",
                code: `const acceptsCard = zone.dataset.accept === "true";`
              },
              {
                title: "Nettoyer avant d'afficher",
                text: "Avant de marquer une zone valide ou invalide, retire les anciennes classes sur toutes les zones. Cela évite de garder plusieurs résultats visibles.",
                code: `zones.forEach(function (zone) {
  zone.classList.remove("is-valid", "is-invalid");
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
            title: "États visuels utiles",
            items: [
              {
                title: "Carte déplaçable",
                text: "Le curseur indique l'action possible. Une classe temporaire peut rendre le glisser plus lisible, sans changer la structure HTML.",
                code: `.card {
  cursor: grab;
}

.card.is-dragging {
  opacity: 0.65;
}`
              },
              {
                title: "Zone prête",
                text: "Une classe sur la zone survolée peut aider l'utilisateur à comprendre où il va déposer la carte.",
                code: `.drop-zone.is-over {
  border-color: #202633;
  background: #fff7db;
}`
              },
              {
                title: "Résultat validé ou refusé",
                text: "Le starter contient déjà les classes is-valid et is-invalid. Le JavaScript doit seulement choisir laquelle appliquer.",
                code: `.drop-zone.is-valid {
  border-color: #27ae60;
  background: #ecfdf5;
}

.drop-zone.is-invalid {
  border-color: #c0392b;
  background: #fef2f2;
}`
              }
            ]
          }
        ]
      }
    ]
  },
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
  "message-temporaire": {
    title: "Message temporaire",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Afficher puis masquer",
            items: [
              {
                title: "Classe d'état",
                text: "Le clic peut afficher le message en ajoutant une classe. Le CSS décide ensuite à quoi ressemble l'état visible.",
                code: `message.classList.add("is-visible");`
              },
              {
                title: "Délai avec setTimeout",
                text: "setTimeout lance une fonction une seule fois après un délai. C'est utile pour revenir à l'état masqué sans nouveau clic.",
                code: `setTimeout(function () {
  message.classList.remove("is-visible");
}, 2000);`
              },
              {
                title: "Eviter les timers empilés",
                text: "Si l'utilisateur clique plusieurs fois rapidement, garde l'identifiant du timer pour annuler l'ancien délai avant d'en lancer un nouveau.",
                code: `clearTimeout(timeoutId);
timeoutId = setTimeout(function () {
  // masquer le message
}, 2000);`
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
            title: "Etat visible",
            items: [
              {
                title: "Message caché",
                text: "Un message temporaire peut rester dans le HTML mais être invisible tant qu'il n'a pas sa classe d'état.",
                code: `.notice {
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
}`
              },
              {
                title: "Message affiché",
                text: "La classe ajoutée par JavaScript rend le message visible et peut déclencher une transition.",
                code: `.notice.is-visible {
  opacity: 1;
  transform: translateY(0);
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
  "autocompletion": {
    title: "Autocomplétion de fruits",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Filtrer et rendre",
            items: [
              {
                title: "Tableau de référence",
                text: "Le starter fournit déjà un tableau de fruits. Le rôle du script est de lire la saisie, filtrer ce tableau, puis afficher seulement les résultats utiles.",
                code: `const fruits = ["Abricot", "Banane", "Cerise"];

const resultats = fruits.filter(function (fruit) {
  return fruit.toLowerCase().includes(recherche);
});`
              },
              {
                title: "Événement input",
                text: "input se déclenche à chaque modification du champ : lettre ajoutée, suppression, collage ou effacement. C'est l'événement principal pour recalculer la liste.",
                code: `champ.addEventListener("input", function () {
  const recherche = champ.value.toLowerCase();
  // filtrer puis reconstruire la liste
});`
              },
              {
                title: "Reconstruire la liste",
                text: "Avant d'afficher de nouveaux résultats, vide la liste. Ensuite, crée un li par suggestion retenue et ajoute-le dans le ul.",
                code: `liste.innerHTML = "";

resultats.forEach(function (fruit) {
  const item = document.createElement("li");
  item.textContent = fruit;
  liste.append(item);
});`
              }
            ]
          }
        ]
      },
      {
        id: "clavier",
        label: "Clavier",
        sections: [
          {
            title: "Écouter les touches",
            items: [
              {
                title: "keydown",
                text: "keydown sert aux touches de contrôle : Entrée, Escape, flèches. Pour une autocomplétion, il complète input mais ne le remplace pas.",
                code: `champ.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    champ.value = "";
    liste.innerHTML = "";
  }
});`
              },
              {
                title: "Comparer event.key",
                text: "event.key donne une valeur lisible comme Enter, Escape, ArrowDown ou ArrowUp. Cela évite de dépendre de codes numériques difficiles à retenir.",
                code: `if (event.key === "Enter") {
  // valider une suggestion sélectionnée
}`
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
            title: "Liste compacte",
            items: [
              {
                title: "Cadre des suggestions",
                text: "La liste peut rester prête dans le HTML. Le JavaScript décide seulement si elle contient des li ou non.",
                code: `.suggestions {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}`
              },
              {
                title: "État visuel au clavier",
                text: "Si tu ajoutes une navigation au clavier, une classe d'état peut rendre la suggestion active visible.",
                code: `.suggestions li.is-active {
  background: #fff8bf;
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
                text: "Un nombre peut mémoriser quel résultat est actuellement actif. À toi de décider quand il change et comment il reste dans la liste.",
                code: `let selectedIndex = 0;`
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
  },
  "bouton-esquive": {
    title: "Bouton qui esquive",
    tabs: [
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Coordonnees utiles",
            items: [
              {
                title: "Boites utiles",
                text: "getBoundingClientRect donne des coordonnees dans la fenetre. Tu peux l'utiliser sur l'arene et sur le bouton.",
                code: `const arenaRect = arena.getBoundingClientRect();
const buttonRect = button.getBoundingClientRect();`
              },
              {
                title: "Position de la souris",
                text: "event.clientX et event.clientY donnent le point de départ des calculs, sans imposer la stratégie de déplacement.",
                code: `const mouseX = event.clientX;
const mouseY = event.clientY;`
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
            title: "Deplacement dans l'arene",
            items: [
              {
                title: "Arene relative",
                text: "L'arene fournit le repere de positionnement et coupe ce qui depasse.",
                code: `.arena {
  position: relative;
  overflow: hidden;
}`
              },
              {
                title: "Bouton absolu",
                text: "left/top peuvent etre modifies par JavaScript sans changer le flux de la page.",
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

KATA_MEMOS["progression-scroll"] = {
  title: "Progression du scroll",
  tabs: [
    {
      id: "js",
      label: "JS",
      sections: [
        {
          title: "Mesurer le scroll",
          items: [
            {
              title: "Position actuelle",
              text: "window.scrollY donne le nombre de pixels déjà parcourus depuis le haut de la page.",
              code: `const currentScroll = window.scrollY;`
            },
            {
              title: "Hauteur complète",
              text: "scrollHeight donne la hauteur totale d'un élément, contenu caché par le scroll inclus. Pour la page, on peut la lire sur document.documentElement.",
              code: `const pageHeight = document.documentElement.scrollHeight;
const visibleHeight = window.innerHeight;`
            },
            {
              title: "Distance scrollable",
              text: "La distance réellement scrollable correspond à la hauteur totale moins la hauteur visible de la fenêtre.",
              code: `const maxScroll = pageHeight - visibleHeight;`
            },
            {
              title: "Pourcentage",
              text: "Le rapport entre la position actuelle et la distance maximale peut ensuite être converti en pourcentage.",
              code: `const progress = currentScroll / maxScroll;
const percent = progress * 100;`
            },
            {
              title: "Largeur de la barre",
              text: "La largeur peut recevoir une chaîne CSS avec le symbole pourcentage.",
              code: `bar.style.width = percent + "%";`
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
          title: "Barre fixe",
          items: [
            {
              title: "Toujours visible",
              text: "La barre peut rester en haut de l'écran avec position fixed. Le JavaScript ne change que la largeur de l'élément interne.",
              code: `.progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.bar {
  width: 0%;
}`
            }
          ]
        }
      ]
    }
  ]
};

function createCourseKataMemo(title, concepts, cssCode) {
  const conceptList = concepts.split(",").map(function (concept) {
    return concept.trim();
  });
  const mainEvent = conceptList[0] || "événement";
  const changingValues = conceptList.slice(1, 4).join(", ") || "valeurs à mettre à jour";

  return {
    title,
    tabs: [
      {
        id: "method",
        label: "Méthode",
        sections: [
          {
            title: "Comprendre le kata",
            items: [
              {
                title: "Découper le comportement",
                text: "Ce kata mobilise surtout : " + concepts + ". Commence par écrire en français ce qui déclenche l'action, quelles valeurs changent, puis ce que l'écran doit montrer."
              },
              {
                title: "Repérer la source de vérité",
                text: "Cherche la valeur qui décrit l'état actuel : un booléen, un index, une position, un tableau ou un pourcentage. Le rendu doit partir de cette valeur plutôt que de plusieurs petits états dispersés."
              },
              {
                title: "Tester sans deviner",
                text: "Teste d'abord les sélections et les valeurs avec console.log. Quand les valeurs sont justes, branche seulement ensuite le rendu visuel."
              }
            ]
          }
        ]
      },
      {
        id: "js",
        label: "JS",
        sections: [
          {
            title: "Briques JavaScript",
            items: [
              {
                title: "Sélectionner les éléments",
                text: "Commence par récupérer les éléments du starter que ton script va lire ou modifier.",
                code: `const zone = document.querySelector(".zone");
const button = document.querySelector("button");`
              },
              {
                title: "Réagir au bon événement",
                text: "L'événement principal de ce kata est probablement lié à : " + mainEvent + ". Utilise le type d'événement adapté, puis vérifie ce que l'objet event te donne.",
                code: `button.addEventListener("click", function (event) {
  console.log(event);
});`
              },
              {
                title: "Garder les valeurs utiles",
                text: "Les valeurs à suivre tournent autour de : " + changingValues + ". Stocke-les dans des variables simples avant de modifier l'interface.",
                code: `let currentValue = 0;

function render() {
  // mettre à jour l'écran depuis currentValue
}`
              },
              {
                title: "Mettre à jour le DOM",
                text: "Selon le kata, le rendu peut passer par du texte, une classe CSS ou une propriété de style ciblée.",
                code: `element.textContent = currentValue;
element.classList.toggle("is-active", Boolean(currentValue));
element.style.transform = "translateX(" + currentValue + "px)";`
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
            title: "Repères CSS",
            items: [
              {
                title: "Classes et propriétés utiles",
                text: "Le starter fournit déjà les classes de base. Le JavaScript doit les activer ou modifier seulement quelques propriétés ciblées.",
                code: cssCode
              },
              {
                title: "Préparer les états",
                text: "Un état visuel clair rend le JavaScript plus simple : une classe décrit le changement, le CSS porte l'apparence.",
                code: `.element {
  transition: transform 180ms ease, opacity 180ms ease;
}

.element.is-active {
  opacity: 1;
}`
              },
              {
                title: "Limiter les surprises",
                text: "Quand un élément bouge ou apparaît, fixe son cadre avec position, overflow, min-height ou transform pour éviter les sauts de layout."
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
