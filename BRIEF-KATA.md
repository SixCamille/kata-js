# Brief KATA JS

Source : brief initial du repo KATA JS.

## Objectif

Créer un repo/site unique pour des katas JavaScript visuels de niveau 2e année.

Le support doit servir à deux moments :

- entraînement : 5 octobre 2026 ;
- évaluation en live coding : 13 octobre 2026.

## Public

Apprenants de 2e année.

Le support doit rester simple, lisible et exploitable par des profils débutants à intermédiaires en JavaScript vanilla.

## Principe pédagogique

Chaque kata part d'un résultat visuel ou d'une interaction à reproduire.

L'apprenant choisit un niveau :

- facile ;
- moyen ;
- difficile.

Pour l'évaluation, un kata est tiré au sort dans la catégorie choisie.

## Évaluation

Live coding individuel de 20 minutes.

La difficulté choisie peut apporter un léger bonus, mais l'essentiel de la note porte sur :

- la compréhension du besoin ;
- les réflexes JavaScript et DOM ;
- le choix des événements ;
- la gestion de l'état ;
- le débogage ;
- la capacité à expliquer le code.

## Contraintes importantes

Ne pas inclure de dossier de correction ni de solutions pour les katas évaluables.

Il n'y a pas une seule solution attendue, et une correction complète serait trop tentante pour les apprenants.

Exception possible : un seul kata d'exemple peut contenir une solution commentée pour expliquer la méthode de travail et la structure attendue.

## Stack

- HTML ;
- CSS ;
- JavaScript vanilla.

Pas de framework, pas de build complexe, pas de dépendance externe indispensable.

## Structure cible

```text
README.md
pense-bete/
  javascript.md
exemple/
katas/
  facile/
  moyen/
  difficile/
picker/
```

## Structure d'un kata

Chaque kata doit suivre une convention homogène :

```text
katas/<niveau>/<slug>/
  meta.json
  index.html
  starter/
    index.html
    style.css
    script.js
```

La page `index.html` du kata affiche la consigne, les attendus et les liens utiles autour du starter.

Le starter est utile lorsque le HTML/CSS de départ ne fait pas partie de ce que l'on souhaite évaluer. Le JavaScript doit rester à produire par l'apprenant.

## Métadonnées minimales

`meta.json` doit contenir au minimum :

```json
{
  "title": "Titre du kata",
  "level": "facile",
  "concepts": ["DOM", "événements"],
  "duration": 20,
  "hasStarter": true,
  "hasResources": false
}
```

Ces métadonnées doivent être exploitables par le picker.

## Picker

Créer une petite interface en HTML/CSS/JS vanilla permettant de :

- choisir un niveau : Facile, Moyen ou Difficile ;
- tirer aléatoirement un kata de cette catégorie ;
- afficher le titre ;
- afficher le rendu de référence ;
- donner accès au mémo intégré lorsqu'il existe ;
- donner accès au starter.

## Pense-bête JavaScript

Le pense-bête général doit couvrir :

- variables ;
- `let` et `const` ;
- types ;
- opérateurs ;
- conditions ;
- fonctions ;
- tableaux ;
- index ;
- `length` ;
- `push` ;
- boucles simples ;
- `forEach` ;
- `querySelector` ;
- `textContent` ;
- `classList` ;
- `style` ;
- `addEventListener` ;
- événements courants ;
- `setTimeout` ;
- `setInterval` ;
- `console.log` ;
- réflexes de debug.

## Mémos spécifiques

Certains katas peuvent fournir des rappels ciblés lorsqu'il serait artificiel d'exiger l'API par coeur.

Exemples :

- `Date`, `getHours`, `getMinutes` pour une horloge ;
- `event.clientX`, `event.clientY` pour une interaction souris ;
- `window.scrollY` pour un kata lié au scroll.

Ces mémos doivent aider sur l'API ou la syntaxe spécifique sans donner la solution. Lorsqu'un kata combine JavaScript et CSS, le mémo peut proposer des onglets séparés, par exemple `JS` et `CSS`.

## Calibrage des niveaux

Facile : un comportement principal, peu d'état.

Moyen : plusieurs étapes ou une interaction liée à la souris, au scroll ou au temps.

Difficile : plusieurs mécanismes combinés, mais toujours réalisable en 20 minutes par un élève à l'aise.

Tout kata utilisé en évaluation doit être raisonnablement faisable en 20 minutes avec le pense-bête général et les mémos spécifiques éventuels. Si une notion avancée ou une recherche Internet est indispensable, il faut simplifier ou sortir le kata du pool d'évaluation.

## Banque initiale à intégrer

- stickers au clic ;
- afficher / masquer un mot de passe ;
- image flip ;
- menu toggle ;
- neige ;
- yeux qui suivent la souris ;
- rond qui rebondit ;
- voiture au clic ;
- bouton qui fuit ;
- fond lié au scroll ;
- horloge ;
- chronomètre ;
- todo list ;
- autocomplétion ;
- popup ;
- bandeau défilant ;
- calculatrice ;
- validation de mot de passe.

Ensuite, élargir avec les autres défis déjà listés sur le site de cours.

## Premier livrable attendu

Créer :

- l'arborescence ;
- le `README.md` ;
- le pense-bête ;
- le schéma `meta.json` ;
- le picker fonctionnel ;
- un kata exemple complet ;
- quelques katas représentatifs dans chaque niveau pour valider le format avant de remplir toute la banque.

## Qualité attendue

- conventions homogènes entre tous les katas ;
- navigation simple ;
- README clair ;
- aucun secret ;
- aucune correction cachée pour les katas évaluables ;
- fonctionnement local sans installation complexe.
