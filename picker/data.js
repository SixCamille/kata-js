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
    id: "bouton-esquive",
    title: "Bouton qui esquive",
    level: "difficile",
    summary: "Faire fuir un bouton dans la direction opposée au pointeur.",
    concepts: ["mousemove", "getBoundingClientRect", "vecteur", "bornes"],
    starter: "katas/difficile/bouton-esquive/index.html"
  },
  {
    id: "chat-simule",
    title: "Chat simule",
    level: "moyen",
    summary: "Envoyer un message puis afficher une réponse automatique après un délai.",
    concepts: ["submit", "createElement", "setTimeout", "état"],
    starter: "katas/moyen/chat-simule/index.html"
  },
  {
    id: "carte-inclinee",
    title: "Carte inclinée",
    level: "moyen",
    summary: "Incliner une carte selon la position de la souris au-dessus d'elle.",
    concepts: ["mousemove", "DOMRect", "transform", "mouseleave"],
    starter: "katas/moyen/carte-inclinee/index.html"
  },
  {
    id: "menu-radial",
    title: "Menu radial",
    level: "difficile",
    summary: "Ouvrir plusieurs actions autour d'un bouton central.",
    concepts: ["click", "état", "Math.cos", "Math.sin", "transform"],
    starter: "katas/difficile/menu-radial/index.html"
  },
  {
    id: "terminal-fictif",
    title: "Terminal fictif",
    level: "difficile",
    summary: "Reconnaître quelques commandes et afficher un historique.",
    concepts: ["submit", "conditions", "tableau", "rendu DOM"],
    starter: "katas/difficile/terminal-fictif/index.html"
  },
  {
    id: "recherche-clavier",
    title: "Recherche clavier",
    level: "difficile",
    summary: "Filtrer une liste et naviguer dans les résultats au clavier.",
    concepts: ["input", "keydown", "tableau", "index sélectionné"],
    starter: "katas/difficile/recherche-clavier/index.html"
  },
  {
    id: "changer-couleur-fond",
    title: "Changer la couleur du fond",
    level: "facile",
    summary: "Appliquer une nouvelle couleur de fond à chaque clic.",
    concepts: ["click","tableau","index","style.backgroundColor"],
    starter: "katas/facile/changer-couleur-fond/index.html"
  },
  {
    id: "accordeon-faq",
    title: "Accordéon FAQ",
    level: "facile",
    summary: "Afficher ou masquer une réponse quand on clique sur une question.",
    concepts: ["click","classList","aria-expanded","état"],
    starter: "katas/facile/accordeon-faq/index.html"
  },
  {
    id: "onglets",
    title: "Onglets",
    level: "facile",
    summary: "Changer le contenu affiché quand on clique sur un onglet.",
    concepts: ["click","classList","dataset","contenu actif"],
    starter: "katas/facile/onglets/index.html"
  },
  {
    id: "tooltip",
    title: "Tooltip",
    level: "facile",
    summary: "Afficher une information courte au survol d'un élément.",
    concepts: ["mouseenter","mouseleave","classList","position"],
    starter: "katas/facile/tooltip/index.html"
  },
  {
    id: "image-survol",
    title: "Image qui change au survol",
    level: "facile",
    summary: "Remplacer temporairement une image quand le curseur la survole.",
    concepts: ["mouseenter","mouseleave","src","alt"],
    starter: "katas/facile/image-survol/index.html"
  },
  {
    id: "etoiles-notation",
    title: "Étoiles de notation",
    level: "facile",
    summary: "Cliquer sur une étoile pour sélectionner une note de 1 à 5.",
    concepts: ["click","querySelectorAll","index","classList"],
    starter: "katas/facile/etoiles-notation/index.html"
  },
  {
    id: "bouton-jaime",
    title: "Bouton J'aime",
    level: "facile",
    summary: "Ajouter ou retirer un like et mettre à jour le compteur.",
    concepts: ["click","booléen","textContent","classList"],
    starter: "katas/facile/bouton-jaime/index.html"
  },
  {
    id: "checkbox-section",
    title: "Afficher selon une checkbox",
    level: "facile",
    summary: "Révéler une section quand une case est cochée.",
    concepts: ["change","checked","classList","condition"],
    starter: "katas/facile/checkbox-section/index.html"
  },
  {
    id: "compteur-caracteres",
    title: "Compteur de caractères",
    level: "facile",
    summary: "Afficher en direct le nombre de caractères saisis.",
    concepts: ["input","value","length","textContent"],
    starter: "katas/facile/compteur-caracteres/index.html"
  },
  {
    id: "lancer-de",
    title: "Lancer de dé",
    level: "facile",
    summary: "Générer et afficher une valeur entre 1 et 6.",
    concepts: ["click","Math.random","Math.floor","textContent"],
    starter: "katas/facile/lancer-de/index.html"
  },
  {
    id: "fond-scroll",
    title: "Fond lié au scroll",
    level: "moyen",
    summary: "Faire évoluer la couleur de fond selon la position dans la page.",
    concepts: ["scroll","window.scrollY","pourcentage","style"],
    starter: "katas/moyen/fond-scroll/index.html"
  },
  {
    id: "header-intelligent",
    title: "Header intelligent",
    level: "moyen",
    summary: "Masquer le header en descendant et le réafficher en remontant.",
    concepts: ["scroll","window.scrollY","état précédent","classList"],
    starter: "katas/moyen/header-intelligent/index.html"
  },
  {
    id: "apparition-scroll",
    title: "Apparition au scroll",
    level: "moyen",
    summary: "Faire apparaître une carte quand elle entre dans la zone visible.",
    concepts: ["scroll","getBoundingClientRect","classList","viewport"],
    starter: "katas/moyen/apparition-scroll/index.html"
  },
  {
    id: "retour-haut",
    title: "Retour en haut",
    level: "moyen",
    summary: "Afficher un bouton après un certain scroll et remonter en haut au clic.",
    concepts: ["scroll","click","window.scrollTo","classList"],
    starter: "katas/moyen/retour-haut/index.html"
  },
  {
    id: "curseur-personnalise",
    title: "Curseur personnalisé",
    level: "moyen",
    summary: "Faire suivre un élément graphique à la souris.",
    concepts: ["mousemove","clientX","clientY","transform"],
    starter: "katas/moyen/curseur-personnalise/index.html"
  },
  {
    id: "trainee-souris",
    title: "Traînée derrière la souris",
    level: "moyen",
    summary: "Créer de petites formes au passage de la souris puis les faire disparaître.",
    concepts: ["mousemove","createElement","setTimeout","position"],
    starter: "katas/moyen/trainee-souris/index.html"
  },
  {
    id: "popup-exterieure",
    title: "Popup extérieure",
    level: "moyen",
    summary: "Fermer une modale quand l'utilisateur clique en dehors de son contenu.",
    concepts: ["click","event.target","classList","condition"],
    starter: "katas/moyen/popup-exterieure/index.html"
  },
  {
    id: "filtre-produits",
    title: "Filtre produits",
    level: "moyen",
    summary: "Filtrer une liste de produits selon une catégorie choisie.",
    concepts: ["click","tableau","filter","rendu DOM"],
    starter: "katas/moyen/filtre-produits/index.html"
  },
  {
    id: "todo-enrichie",
    title: "Todo enrichie",
    level: "moyen",
    summary: "Ajouter, terminer et supprimer des tâches avec compteur restant.",
    concepts: ["submit","tableau","rendu DOM","compteur"],
    starter: "katas/moyen/todo-enrichie/index.html"
  },
  {
    id: "machine-ecrire",
    title: "Machine à écrire",
    level: "moyen",
    summary: "Afficher progressivement les lettres d'un texte.",
    concepts: ["setInterval","index","slice","textContent"],
    starter: "katas/moyen/machine-ecrire/index.html"
  },
  {
    id: "puzzle-reordonnable",
    title: "Puzzle réordonnable",
    level: "difficile",
    summary: "Déplacer plusieurs morceaux jusqu'à retrouver le bon ordre.",
    concepts: ["dragstart","drop","tableau","ordre"],
    starter: "katas/difficile/puzzle-reordonnable/index.html"
  },
  {
    id: "carte-gratter",
    title: "Carte à gratter",
    level: "difficile",
    summary: "Révéler progressivement un contenu en passant la souris.",
    concepts: ["mousemove","createElement","coordonnées","pourcentage"],
    starter: "katas/difficile/carte-gratter/index.html"
  },
  {
    id: "interface-tinder",
    title: "Interface Tinder",
    level: "difficile",
    summary: "Faire glisser une carte à gauche ou à droite et afficher la suivante.",
    concepts: ["mousedown","mousemove","mouseup","tableau","transform"],
    starter: "katas/difficile/interface-tinder/index.html"
  },
  {
    id: "carte-3d-interactive",
    title: "Carte 3D interactive",
    level: "difficile",
    summary: "Incliner une carte selon le curseur avec reflet et retour au centre.",
    concepts: ["mousemove","DOMRect","variables CSS","transform"],
    starter: "katas/difficile/carte-3d-interactive/index.html"
  },
  {
    id: "parallax-souris",
    title: "Parallax souris",
    level: "difficile",
    summary: "Déplacer plusieurs couches à des vitesses différentes selon le curseur.",
    concepts: ["mousemove","dataset","transform","coordonnées"],
    starter: "katas/difficile/parallax-souris/index.html"
  },
  {
    id: "parallax-scroll",
    title: "Parallax scroll",
    level: "difficile",
    summary: "Faire évoluer plusieurs éléments différemment avec le défilement.",
    concepts: ["scroll","window.scrollY","dataset","transform"],
    starter: "katas/difficile/parallax-scroll/index.html"
  },
  {
    id: "command-palette",
    title: "Command palette",
    level: "difficile",
    summary: "Ouvrir une palette au clavier, filtrer et sélectionner une commande.",
    concepts: ["keydown","input","tableau","état sélectionné"],
    starter: "katas/difficile/command-palette/index.html"
  },
  {
    id: "formulaire-dynamique",
    title: "Formulaire dynamique",
    level: "difficile",
    summary: "Ajouter et supprimer des blocs de champs pour plusieurs participants.",
    concepts: ["click","createElement","tableau","rendu DOM"],
    starter: "katas/difficile/formulaire-dynamique/index.html"
  },
  {
    id: "horloge-analogique",
    title: "Horloge analogique",
    level: "difficile",
    summary: "Déplacer les aiguilles selon l'heure réelle.",
    concepts: ["Date","setInterval","transform","angles"],
    starter: "katas/difficile/horloge-analogique/index.html"
  },
  {
    id: "comparateur-images-enrichi",
    title: "Comparateur d'images enrichi",
    level: "difficile",
    summary: "Gérer un avant/après avec déplacement fluide et contraintes de bord.",
    concepts: ["mousedown","mousemove","pourcentage","style.width"],
    starter: "katas/difficile/comparateur-images-enrichi/index.html"
  }
];
