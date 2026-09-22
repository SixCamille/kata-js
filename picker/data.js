const KATAS = [
  {
    id: "sticker-clic",
    title: "Sticker au clic",
    level: "facile",
    summary: "Creer un element au clic et le placer aux coordonnees du pointeur.",
    concepts: ["click", "coordonnees", "createElement", "style"],
    starter: "katas/facile/sticker-clic/index.html"
  },
  {
    id: "mot-de-passe",
    title: "Afficher / masquer un mot de passe",
    level: "facile",
    summary: "Manipuler un input, un bouton et un etat booleen.",
    concepts: ["querySelector", "type d'input", "condition", "etat"],
    starter: "katas/facile/mot-de-passe/index.html"
  },
  {
    id: "image-flip",
    title: "Image qui flip",
    level: "facile",
    summary: "Alterner une classe pour retourner une carte au clic.",
    concepts: ["click", "classList", "toggle", "transform"],
    starter: "katas/facile/image-flip/index.html"
  },
  {
    id: "menu-toggle",
    title: "Menu ouvrant / fermant",
    level: "facile",
    summary: "Afficher ou masquer un menu depuis un bouton.",
    concepts: ["click", "classList", "aria-expanded", "etat"],
    starter: "katas/facile/menu-toggle/index.html"
  },
  {
    id: "popup-simple",
    title: "Popup simple",
    level: "facile",
    summary: "Ouvrir une modale et la fermer avec une croix.",
    concepts: ["click", "classList", "modale", "etat"],
    starter: "katas/facile/popup-simple/index.html"
  },
  {
    id: "yeux-souris",
    title: "Yeux qui suivent la souris",
    level: "moyen",
    summary: "Utiliser la position de la souris pour orienter deux pupilles.",
    concepts: ["mousemove", "clientX", "clientY", "transform"],
    starter: "katas/moyen/yeux-souris/index.html"
  },
  {
    id: "rond-rebond",
    title: "Rond qui rebondit",
    level: "moyen",
    summary: "Animer un rond et inverser sa direction sur les bords.",
    concepts: ["setInterval", "position", "conditions", "directions"],
    starter: "katas/moyen/rond-rebond/index.html"
  },
  {
    id: "voiture-clic",
    title: "Voiture au clic",
    level: "facile",
    summary: "Lancer une voiture au clic puis reinitialiser l'animation.",
    concepts: ["click", "classList", "animation", "etat"],
    starter: "katas/facile/voiture-clic/index.html"
  },
  {
    id: "sticker-orientation",
    title: "Sticker emoji oriente",
    level: "moyen",
    summary: "Creer un sticker emoji au clic avec une taille et une orientation aleatoires.",
    concepts: ["click", "coordonnees", "Math.random", "transform", "variables CSS"],
    starter: "katas/moyen/sticker-orientation/index.html"
  },
  {
    id: "neige",
    title: "Neige dans la fenetre",
    level: "difficile",
    summary: "Generer regulierement des flocons qui tombent et disparaissent.",
    concepts: ["setInterval", "createElement", "Math.random", "animation"],
    starter: "katas/difficile/neige/index.html"
  },
  {
    id: "balles-mouvement",
    title: "Plusieurs balles en mouvement",
    level: "difficile",
    summary: "Animer plusieurs balles independantes avec rebonds.",
    concepts: ["tableau", "objets", "boucle", "collision"],
    starter: "katas/difficile/balles-mouvement/index.html"
  },
  {
    id: "personnage-clavier",
    title: "Petit personnage au clavier",
    level: "moyen",
    summary: "Deplacer un personnage aux fleches sans sortir de la zone.",
    concepts: ["keydown", "event.key", "position", "limites"],
    starter: "katas/moyen/personnage-clavier/index.html"
  },
  {
    id: "esquive-simple",
    title: "Jeu d'esquive simple",
    level: "difficile",
    summary: "Deplacer un joueur et detecter les collisions avec des obstacles.",
    concepts: ["keydown", "setInterval", "collision", "etat de jeu"],
    starter: "katas/difficile/esquive-simple/index.html"
  },
  {
    id: "attraper-objets",
    title: "Attraper les objets",
    level: "difficile",
    summary: "Deplacer un panier, attraper des objets et mettre a jour un score.",
    concepts: ["mousemove", "setInterval", "collision", "score"],
    starter: "katas/difficile/attraper-objets/index.html"
  },
  {
    id: "drag-drop-zones",
    title: "Drag & drop avec zones",
    level: "difficile",
    summary: "Deposer une carte dans une zone acceptee ou refusee.",
    concepts: ["dragstart", "dragover", "drop", "etat"],
    starter: "katas/difficile/drag-drop-zones/index.html"
  },
  {
    id: "chrono-todo",
    title: "Chronometre de todo list",
    level: "difficile",
    summary: "Combiner formulaire, liste, et chronometre simple.",
    concepts: ["submit", "tableau", "setInterval", "etat compose"],
    starter: "katas/difficile/chrono-todo/index.html"
  },
  {
    id: "theme-switch",
    title: "Theme clair / sombre",
    level: "facile",
    summary: "Basculer l'apparence d'une page avec un bouton et une classe.",
    concepts: ["click", "classList", "toggle", "etat"],
    starter: "katas/facile/theme-switch/index.html"
  },
  {
    id: "compteur-plus-moins",
    title: "Compteur + / -",
    level: "facile",
    summary: "Mettre a jour une valeur affichee avec deux boutons.",
    concepts: ["click", "variable", "textContent", "conditions"],
    starter: "katas/facile/compteur-plus-moins/index.html"
  },
  {
    id: "barre-progression",
    title: "Barre de progression",
    level: "facile",
    summary: "Remplir une barre automatiquement puis la remettre a zero.",
    concepts: ["setInterval", "clearInterval", "style.width", "limites"],
    starter: "katas/facile/barre-progression/index.html"
  },
  {
    id: "message-temporaire",
    title: "Message temporaire",
    level: "facile",
    summary: "Afficher une notification puis la masquer automatiquement.",
    concepts: ["click", "classList", "setTimeout", "etat"],
    starter: "katas/facile/message-temporaire/index.html"
  },
  {
    id: "bouton-fuit",
    title: "Bouton qui fuit",
    level: "moyen",
    summary: "Deplacer un bouton quand le pointeur s'en approche.",
    concepts: ["mousemove", "getBoundingClientRect", "Math.random", "style"],
    starter: "katas/moyen/bouton-fuit/index.html"
  },
  {
    id: "progression-scroll",
    title: "Progression du scroll",
    level: "moyen",
    summary: "Afficher une barre qui suit l'avancement dans la page.",
    concepts: ["scroll", "window.scrollY", "hauteur", "style.width"],
    starter: "katas/moyen/progression-scroll/index.html"
  },
  {
    id: "toast-empile",
    title: "Toasts empiles",
    level: "moyen",
    summary: "Creer plusieurs notifications qui s'empilent puis disparaissent.",
    concepts: ["click", "createElement", "setTimeout", "tableau"],
    starter: "katas/moyen/toast-empile/index.html"
  },
  {
    id: "autocompletion",
    title: "Autocompletion",
    level: "moyen",
    summary: "Filtrer des suggestions pendant la saisie dans un champ.",
    concepts: ["input", "tableau", "filter", "rendu"],
    starter: "katas/moyen/autocompletion/index.html"
  },
  {
    id: "fenetre-deplacable",
    title: "Fenetre deplacable",
    level: "difficile",
    summary: "Deplacer une fausse fenetre avec la souris et gerer son etat.",
    concepts: ["mousedown", "mousemove", "mouseup", "position"],
    starter: "katas/difficile/fenetre-deplacable/index.html"
  },
  {
    id: "chat-simule",
    title: "Chat simule",
    level: "difficile",
    summary: "Envoyer un message puis afficher une reponse automatique apres un delai.",
    concepts: ["submit", "createElement", "setTimeout", "etat"],
    starter: "katas/difficile/chat-simule/index.html"
  }
];
