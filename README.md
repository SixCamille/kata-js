# KATA JS - EPSI B2 FI

Support d'entrainement et d'evaluation pour des katas JavaScript visuels en HTML, CSS et JavaScript vanilla.

Le projet est concu pour des apprenants de 2e annee : les exercices restent accessibles, mais chaque kata renvoie a des notions de cours utiles pour comprendre ce que l'on code.

## Ouvrir le support

Ouvrir directement `index.html` dans un navigateur.

Aucun serveur, aucune installation et aucune dependance ne sont necessaires.

## Parcours propose

1. Lire le pense-bete JavaScript en HTML.
2. Observer le kata d'exemple.
3. Choisir un niveau dans le picker.
4. Tirer un kata au hasard.
5. Ouvrir la page du kata : la consigne est visible sur le cote, avec des liens vers les notions utiles.
6. Coder dans le `starter/script.js` pour garder l'autocompletion, les erreurs et les outils de l'editeur.

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

Chaque kata possede une page `index.html` qui coupe clairement l'ecran en deux : le playground a gauche, la consigne a droite.

Le dossier `starter/` reste un mini projet autonome avec `index.html`, `style.css` et `script.js`. Il est charge dans une iframe depuis la page du kata, ce qui garde le DOM de l'exercice separe de la consigne.

Les apprenants codent dans `starter/script.js` et gardent donc l'autocompletion, les erreurs et les outils de leur editeur. Les liens de la consigne pointent vers des blocs precis du pense-bete JavaScript, par exemple `pense-bete/javascript.html#evenements`.

## Regle importante

Les katas evaluables ne contiennent pas de correction. Le seul fichier corrige est le kata d'exemple, destine a montrer une methode de travail.

## Katas inclus

- Facile : sticker au clic, afficher / masquer un mot de passe, image qui flip, menu ouvrant / fermant, popup simple.
- Moyen : neige dans la fenetre, yeux qui suivent la souris, rond qui rebondit, papillon anime, voiture au clic.
- Difficile : plusieurs balles en mouvement, petit personnage au clavier, jeu d'esquive simple, attraper les objets, drag & drop avec zones.

Le kata difficile `chrono-todo` reste egalement disponible comme exercice combine existant.
