# KATA JS

Support de katas JavaScript visuels en HTML, CSS et JavaScript vanilla.

Le repo propose une banque d'exercices courts pour travailler les bases du DOM, des événements, de l'état, des animations simples et des interactions utilisateur. Il est pensé pour des apprenants de 2e année : les consignes restent accessibles, mais chaque kata renvoie à des notions de cours utiles et réutilisables.

## Objectif

Ce support peut servir pour :

- un entraînement guidé en classe ;
- un atelier de révision JavaScript ;
- un tirage aléatoire de kata ;
- une évaluation individuelle en live coding ;
- une base de katas à adapter pour un autre cours.

Chaque exercice part d'un résultat visuel ou d'une interaction à reproduire. L'apprenant code dans un starter dédié, pendant que la page du kata affiche la consigne, les attendus et un mémo technique ciblé.

## Démarrage

Aucune installation n'est nécessaire.

1. Cloner ou télécharger le repo.
2. Ouvrir `index.html` dans un navigateur.
3. Choisir un kata depuis la galerie ou depuis le picker.
4. Ouvrir le dossier `starter/` du kata choisi dans l'éditeur.
5. Coder principalement dans `starter/script.js`.

Le projet ne dépend d'aucun serveur local, framework ou build step. Les fichiers HTML peuvent être ouverts directement dans le navigateur.

## Parcours conseillé

Pour une séance d'entraînement :

1. Lire le pense-bête JavaScript dans `pense-bete/javascript.html`.
2. Observer le kata d'exemple dans `exemple/carte-interactive.html`.
3. Choisir un niveau : facile, moyen ou difficile.
4. Lancer un kata depuis la galerie ou le picker.
5. Lire la consigne et les attendus.
6. Ouvrir le mémo du kata si une syntaxe manque.
7. Modifier le starter jusqu'à reproduire le comportement demandé.

Pour une évaluation :

1. L'apprenant choisit un niveau.
2. Le picker tire un kata au hasard dans ce niveau.
3. L'apprenant dispose d'un temps limité, par exemple 20 minutes.
4. L'évaluation porte autant sur le raisonnement que sur le résultat final.

## Contenu du repo

```text
index.html              Galerie des katas
README.md               Documentation générale
AGENTS.md               Règles de contribution pour les agents
BRIEF-KATA.md           Brief pédagogique initial
exemple/                Kata d'exemple avec solution commentée
pense-bete/             Rappels JavaScript généraux
picker/                 Données et interface de tirage des katas
shared/                 Scripts et styles mutualisés
katas/
  facile/               Katas courts avec un comportement principal
  moyen/                Katas avec plusieurs étapes ou interactions
  difficile/            Katas combinant plusieurs mécanismes
```

La banque référencée par le picker contient actuellement 61 katas : 20 faciles, 20 moyens et 21 difficiles.

## Organisation d'un kata

Chaque kata suit la même structure :

```text
katas/<niveau>/<slug>/
  meta.json
  index.html
  starter/
    index.html
    style.css
    script.js
```

`index.html` présente l'énoncé, les attendus, le rendu de référence et le mémo technique.

`meta.json` décrit le kata pour la galerie et le picker : titre, niveau, concepts, durée, starter et ressources éventuelles.

`starter/` contient le mini-projet modifiable par l'apprenant. Le HTML et le CSS de départ fournissent le décor utile ; le JavaScript principal reste à produire.

## Niveaux

Les niveaux servent à calibrer la charge cognitive, pas à enfermer les apprenants.

| Niveau | Intention | Exemples de notions |
| --- | --- | --- |
| Facile | Un comportement principal, peu d'état | `click`, `classList`, `textContent`, `style`, booléen |
| Moyen | Plusieurs étapes ou interaction liée au temps, au scroll ou à la souris | `mousemove`, `scroll`, tableaux, rendu DOM, timers |
| Difficile | Mécanismes combinés, état plus riche, contraintes de bord | drag & drop, collisions, clavier, coordonnées, animation continue |

La cible reste un live coding individuel d'environ 20 minutes.

## Règles pédagogiques

Les katas évaluables ne contiennent pas de correction complète.

Les mémos intégrés doivent aider sur la syntaxe et les API utiles sans assembler directement la solution. Ils peuvent montrer comment écrire un écouteur d'événement, manipuler une classe CSS, créer un élément, utiliser un tableau, lire une position de souris ou démarrer un timer.

Chaque mémo de kata utilise exactement deux onglets :

- `JS` pour la syntaxe JavaScript utile ;
- `CSS` pour les classes, transitions, variables ou propriétés pertinentes.

Le kata d'exemple est la seule exception autorisée : il peut contenir une solution commentée pour montrer une méthode de travail.

## Ressources principales

- Galerie : `index.html`
- Picker : `picker/index.html`
- Pense-bête JavaScript : `pense-bete/javascript.html`
- Exemple guidé : `exemple/carte-interactive.html`
- Brief pédagogique : `BRIEF-KATA.md`

## Ajouter un kata

1. Créer un dossier dans `katas/facile`, `katas/moyen` ou `katas/difficile`.
2. Ajouter `meta.json`, `index.html` et le dossier `starter/`.
3. Préparer un starter autonome avec `index.html`, `style.css` et `script.js`.
4. Laisser le JavaScript principal à produire par l'apprenant.
5. Ajouter le kata dans `picker/data.js`.
6. Vérifier l'affichage depuis la galerie et depuis le picker.
7. Vérifier que le mémo ne donne pas une correction complète.

Les conventions existantes sont plus importantes qu'une abstraction nouvelle : garder du HTML, CSS et JavaScript vanilla, sans dépendance supplémentaire sauf nécessité forte.

## Critères d'évaluation possibles

Une grille simple peut tenir compte de :

- compréhension du besoin ;
- sélection correcte des éléments du DOM ;
- choix des événements ;
- gestion de l'état ;
- manipulation des classes et styles ;
- découpage du code ;
- débogage avec la console ;
- capacité à expliquer les choix.

La difficulté choisie peut apporter un bonus, mais le coeur de l'évaluation reste la qualité du raisonnement et la capacité à produire une interaction fonctionnelle.

## Maintenance

Avant de partager le support ou de lancer une séance :

- ouvrir `index.html` ;
- tester le picker ;
- ouvrir quelques katas de chaque niveau ;
- vérifier que les starters se chargent dans les iframes ;
- vérifier que les mémos affichent bien les onglets `JS` et `CSS` ;
- s'assurer qu'aucune correction complète n'est présente dans les katas évaluables.

Le repo doit rester simple à copier, lire et modifier par une équipe pédagogique.
