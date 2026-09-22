# KATA JS - EPSI B2 FI

Support d'entraînement et d'évaluation pour des katas JavaScript visuels en HTML, CSS et JavaScript vanilla.

Le projet est conçu pour des apprenants de 2e année : les exercices restent accessibles, mais chaque kata renvoie à des notions de cours utiles pour comprendre ce que l'on code.

## Ouvrir le support

Ouvrir directement `index.html` dans un navigateur.

Aucun serveur, aucune installation et aucune dépendance ne sont nécessaires.

## Parcours propose

1. Lire le pense-bete JavaScript en HTML.
2. Observer le kata d'exemple.
3. Choisir un niveau dans le picker.
4. Tirer un kata au hasard.
5. Ouvrir la page du kata : la consigne est visible sur le côté, avec un bouton mémo pour les rappels utiles.
6. Coder dans le `starter/script.js` pour garder l'autocomplétion, les erreurs et les outils de l'éditeur.

## Structure

```text
index.html
README.md
AGENTS.md
BRIEF-EPSI-KATA.md
pense-bete/
  javascript.html
exemple/
  carte-interactive.html
picker/
  index.html
  styles.css
  data.js
  app.js
katas/
  facile/
  moyen/
  difficile/
```

## Starters

Chaque kata possède une page `index.html` qui coupe clairement l'écran en deux : le playground à gauche, la consigne à droite.

Le dossier `starter/` reste un mini projet autonome avec `index.html`, `style.css` et `script.js`. Il est chargé dans une iframe depuis la page du kata, ce qui garde le DOM de l'exercice séparé de la consigne.

Les apprenants codent dans `starter/script.js` et gardent donc l'autocomplétion, les erreurs et les outils de leur éditeur. Le bouton mémo donne les rappels utiles au kata, avec des onglets séparés quand un exercice combine JavaScript et CSS.

## Regle importante

Les katas évaluables ne contiennent pas de correction. Le seul fichier corrigé est le kata d'exemple, destiné à montrer une méthode de travail.

## Katas inclus

- Facile : sticker au clic, afficher / masquer un mot de passe, image qui flip, menu ouvrant / fermant, popup simple.
- Moyen : yeux qui suivent la souris, rond qui rebondit, voiture au clic.
- Difficile : neige dans la fenêtre, plusieurs balles en mouvement, petit personnage au clavier, jeu d'esquive simple, attraper les objets, drag & drop avec zones.

Le kata difficile `chrono-todo` reste également disponible comme exercice combiné existant.
