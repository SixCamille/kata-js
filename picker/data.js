const KATAS = [
  {
    id: "sticker-clic",
    title: "Sticker au clic",
    level: "facile",
    summary: "Creer un element au clic et le placer aux coordonnees du pointeur.",
    concepts: ["click", "coordonnees", "createElement", "style"],
    starter: "katas/facile/sticker-clic/index.html",
    consigne: "katas/facile/sticker-clic/consigne.md"
  },
  {
    id: "mot-de-passe",
    title: "Afficher / masquer un mot de passe",
    level: "facile",
    summary: "Manipuler un input, un bouton et un etat booleen.",
    concepts: ["querySelector", "type d'input", "condition", "etat"],
    starter: "katas/facile/mot-de-passe/index.html",
    consigne: "katas/facile/mot-de-passe/consigne.md"
  },
  {
    id: "image-flip",
    title: "Image qui flip",
    level: "facile",
    summary: "Alterner une classe pour retourner une carte au clic.",
    concepts: ["click", "classList", "toggle", "transform"],
    starter: "katas/facile/image-flip/index.html",
    consigne: "katas/facile/image-flip/consigne.md"
  },
  {
    id: "menu-toggle",
    title: "Menu ouvrant / fermant",
    level: "facile",
    summary: "Afficher ou masquer un menu depuis un bouton.",
    concepts: ["click", "classList", "aria-expanded", "etat"],
    starter: "katas/facile/menu-toggle/index.html",
    consigne: "katas/facile/menu-toggle/consigne.md"
  },
  {
    id: "popup-simple",
    title: "Popup simple",
    level: "facile",
    summary: "Ouvrir une modale et la fermer avec une croix.",
    concepts: ["click", "classList", "modale", "etat"],
    starter: "katas/facile/popup-simple/index.html",
    consigne: "katas/facile/popup-simple/consigne.md"
  },
  {
    id: "yeux-souris",
    title: "Yeux qui suivent la souris",
    level: "moyen",
    summary: "Utiliser la position de la souris pour orienter deux pupilles.",
    concepts: ["mousemove", "clientX", "clientY", "transform"],
    starter: "katas/moyen/yeux-souris/index.html",
    consigne: "katas/moyen/yeux-souris/consigne.md"
  },
  {
    id: "rond-rebond",
    title: "Rond qui rebondit",
    level: "moyen",
    summary: "Animer un rond et inverser sa direction sur les bords.",
    concepts: ["setInterval", "position", "conditions", "directions"],
    starter: "katas/moyen/rond-rebond/index.html",
    consigne: "katas/moyen/rond-rebond/consigne.md"
  },
  {
    id: "voiture-clic",
    title: "Voiture au clic",
    level: "facile",
    summary: "Lancer une voiture au clic puis reinitialiser l'animation.",
    concepts: ["click", "classList", "animation", "etat"],
    starter: "katas/facile/voiture-clic/index.html",
    consigne: "katas/facile/voiture-clic/consigne.md"
  },
  {
    id: "sticker-orientation",
    title: "Sticker emoji oriente",
    level: "moyen",
    summary: "Creer un sticker emoji au clic avec une taille et une orientation aleatoires.",
    concepts: ["click", "coordonnees", "Math.random", "transform", "variables CSS"],
    starter: "katas/moyen/sticker-orientation/index.html",
    consigne: "katas/moyen/sticker-orientation/consigne.md"
  },
  {
    id: "neige",
    title: "Neige dans la fenetre",
    level: "difficile",
    summary: "Generer regulierement des flocons qui tombent et disparaissent.",
    concepts: ["setInterval", "createElement", "Math.random", "animation"],
    starter: "katas/difficile/neige/index.html",
    consigne: "katas/difficile/neige/consigne.md"
  },
  {
    id: "balles-mouvement",
    title: "Plusieurs balles en mouvement",
    level: "difficile",
    summary: "Animer plusieurs balles independantes avec rebonds.",
    concepts: ["tableau", "objets", "boucle", "collision"],
    starter: "katas/difficile/balles-mouvement/index.html",
    consigne: "katas/difficile/balles-mouvement/consigne.md"
  },
  {
    id: "personnage-clavier",
    title: "Petit personnage au clavier",
level: "moyen",
     summary: "Deplacer un personnage aux fleches sans sortir de la zone.",
     concepts: ["keydown", "event.key", "position", "limites"],
     starter: "katas/moyen/personnage-clavier/index.html",
     consigne: "katas/moyen/personnage-clavier/consigne.md"
  },
  {
    id: "esquive-simple",
    title: "Jeu d'esquive simple",
    level: "difficile",
    summary: "Deplacer un joueur et detecter les collisions avec des obstacles.",
    concepts: ["keydown", "setInterval", "collision", "etat de jeu"],
    starter: "katas/difficile/esquive-simple/index.html",
    consigne: "katas/difficile/esquive-simple/consigne.md"
  },
  {
    id: "attraper-objets",
    title: "Attraper les objets",
    level: "difficile",
    summary: "Deplacer un panier, attraper des objets et mettre a jour un score.",
    concepts: ["mousemove", "setInterval", "collision", "score"],
    starter: "katas/difficile/attraper-objets/index.html",
    consigne: "katas/difficile/attraper-objets/consigne.md"
  },
  {
    id: "drag-drop-zones",
    title: "Drag & drop avec zones",
    level: "difficile",
    summary: "Deposer une carte dans une zone acceptee ou refusee.",
    concepts: ["dragstart", "dragover", "drop", "etat"],
    starter: "katas/difficile/drag-drop-zones/index.html",
    consigne: "katas/difficile/drag-drop-zones/consigne.md"
  },
  {
    id: "chrono-todo",
    title: "Chronometre de todo list",
    level: "difficile",
    summary: "Combiner formulaire, liste, et chronometre simple.",
    concepts: ["submit", "tableau", "setInterval", "etat compose"],
    starter: "katas/difficile/chrono-todo/index.html",
    consigne: "katas/difficile/chrono-todo/consigne.md"
  }
];
