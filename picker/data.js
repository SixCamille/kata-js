const KATAS = [
  {
    id: "sticker-clic",
    title: "Sticker au clic",
    level: "facile",
    summary: "Créer un élément au clic et le placer aux coordonnées du pointeur.",
    concepts: ["click", "coordonnées", "createElement", "style"],
    starter: "katas/facile/sticker-clic/index.html"
  },
  {
    id: "mot-de-passe",
    title: "Afficher / masquer un mot de passe",
    level: "facile",
    summary: "Manipuler un input, un bouton et un état booléen.",
    concepts: ["querySelector", "type d'input", "condition", "état"],
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
    concepts: ["click", "classList", "aria-expanded", "état"],
    starter: "katas/facile/menu-toggle/index.html"
  },
  {
    id: "popup-simple",
    title: "Popup simple",
    level: "facile",
    summary: "Ouvrir une modale et la fermer avec une croix.",
    concepts: ["click", "classList", "modale", "état"],
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
    summary: "Lancer une voiture au clic puis réinitialiser l'animation.",
    concepts: ["click", "classList", "animation", "état"],
    starter: "katas/facile/voiture-clic/index.html"
  },
  {
    id: "sticker-orientation",
    title: "Sticker emoji orienté",
    level: "moyen",
    summary: "Créer un sticker emoji au clic avec une taille et une orientation aléatoires.",
    concepts: ["click", "coordonnées", "Math.random", "transform", "variables CSS"],
    starter: "katas/moyen/sticker-orientation/index.html"
  },
  {
    id: "neige",
    title: "Neige dans la fenêtre",
    level: "difficile",
    summary: "Générer régulièrement des flocons qui tombent et disparaissent.",
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
    summary: "Déplacer un personnage aux flèches sans sortir de la zone.",
    concepts: ["keydown", "event.key", "position", "limites"],
    starter: "katas/moyen/personnage-clavier/index.html"
  },
  {
    id: "esquive-simple",
    title: "Jeu d'esquive simple",
    level: "difficile",
    summary: "Déplacer un joueur et détecter les collisions avec des obstacles.",
    concepts: ["keydown", "setInterval", "collision", "état de jeu"],
    starter: "katas/difficile/esquive-simple/index.html"
  },
  {
    id: "attraper-objets",
    title: "Attraper les objets",
    level: "difficile",
    summary: "Déplacer un panier, attraper des objets et mettre à jour un score.",
    concepts: ["mousemove", "setInterval", "collision", "score"],
    starter: "katas/difficile/attraper-objets/index.html"
  },
  {
    id: "drag-drop-zones",
    title: "Drag & drop avec zones",
    level: "difficile",
    summary: "Déposer une carte dans une zone acceptée ou refusée.",
    concepts: ["dragstart", "dragover", "drop", "état"],
    starter: "katas/difficile/drag-drop-zones/index.html"
  },
  {
    id: "chrono-todo",
    title: "Chronomètre de todo list",
    level: "difficile",
    summary: "Combiner formulaire, liste, et chronometre simple.",
    concepts: ["submit", "tableau", "setInterval", "état composé"],
    starter: "katas/difficile/chrono-todo/index.html"
  },
  {
    id: "theme-switch",
    title: "Thème clair / sombre",
    level: "facile",
    summary: "Basculer l'apparence d'une page avec un bouton et une classe.",
    concepts: ["click", "classList", "toggle", "état"],
    starter: "katas/facile/theme-switch/index.html"
  },
  {
    id: "compteur-plus-moins",
    title: "Compteur + / -",
    level: "facile",
    summary: "Mettre à jour une valeur affichée avec deux boutons.",
    concepts: ["click", "variable", "textContent", "conditions"],
    starter: "katas/facile/compteur-plus-moins/index.html"
  },
  {
    id: "barre-progression",
    title: "Barre de progression",
    level: "facile",
    summary: "Remplir une barre automatiquement puis la remettre à zéro.",
    concepts: ["setInterval", "clearInterval", "style.width", "limites"],
    starter: "katas/facile/barre-progression/index.html"
  },
  {
    id: "message-temporaire",
    title: "Message temporaire",
    level: "facile",
    summary: "Afficher une notification puis la masquer automatiquement.",
    concepts: ["click", "classList", "setTimeout", "état"],
    starter: "katas/facile/message-temporaire/index.html"
  },
  {
    id: "bouton-fuit",
    title: "Bouton qui fuit",
    level: "moyen",
    summary: "Déplacer un bouton quand le pointeur s'en approche.",
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
    title: "Toasts empilés",
    level: "moyen",
    summary: "Créer plusieurs notifications qui s'empilent puis disparaissent.",
    concepts: ["click", "createElement", "setTimeout", "tableau"],
    starter: "katas/moyen/toast-empile/index.html"
  },
  {
    id: "autocompletion",
    title: "Autocomplétion",
    level: "moyen",
    summary: "Filtrer des suggestions pendant la saisie dans un champ.",
    concepts: ["input", "tableau", "filter", "rendu"],
    starter: "katas/moyen/autocompletion/index.html"
  },
  {
    id: "fenetre-deplacable",
    title: "Fenetre deplacable",
    level: "difficile",
    summary: "Déplacer une fausse fenêtre avec la souris et gérer son état.",
    concepts: ["mousedown", "mousemove", "mouseup", "position"],
    starter: "katas/difficile/fenetre-deplacable/index.html"
  },
  {
    id: "chat-simule",
    title: "Chat simule",
    level: "difficile",
    summary: "Envoyer un message puis afficher une réponse automatique après un délai.",
    concepts: ["submit", "createElement", "setTimeout", "état"],
    starter: "katas/difficile/chat-simule/index.html"
  }
];
