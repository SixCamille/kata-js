# AGENTS.md

## Contexte du projet

Ce repo contient le site/repo KATA pour les katas JavaScript visuels du module EPSI B2 FI.

Le public est composé d'apprenants de 2e année. Les contenus doivent donc rester accessibles, mais ne doivent pas être trop simplistes : chaque ajout doit intégrer quelques notions de cours utiles, explicites et réutilisables.

## Règles pédagogiques

- Garder une approche JavaScript vanilla : HTML, CSS et JavaScript sans framework.
- Prévoir des notions de cours adaptées à des 2e années, pas seulement une consigne d'exercice.
- Expliquer les concepts utiles sans donner directement la solution des katas évaluables.
- Placer les aides techniques dans la pop-up de mémo du kata, pas dans la consigne principale. Le kata `neige` sert de référence pour le ton attendu : sections ciblées, exemples utiles mais non complets.
- Les pop-ups de mémo doivent avant tout fournir de la syntaxe copiable, pas une méthode de résolution. Elles peuvent montrer comment écrire un tableau, un écouteur d'événement, un timer, une classe CSS ou une propriété de style, mais ne doivent pas assembler ces briques en solution complète du kata.
- Les mémos doivent toujours contenir exactement deux onglets : `JS` et `CSS`. Ne pas ajouter d'onglet `Méthode`, `Calcul`, `Clavier` ou autre.
- Les exemples du mémo rappellent les notions utiles au kata, quel que soit le niveau, mais ils peuvent rester génériques et ne doivent pas forcément reprendre les noms, la structure ou le scénario exacts du kata.
- Pour les katas faciles, une tolérance est possible quand la syntaxe montrée correspond presque à toute la logique attendue ; même dans ce cas, garder les exemples courts et éviter de fournir une correction complète.
- Fournir des ressources ciblées quand une API précise serait artificielle à connaître par coeur.
- Calibrer les katas pour un live coding individuel de 20 minutes.
- Maintenir trois niveaux : facile, moyen, difficile.
- Ne pas ajouter de correction pour les katas évaluables.
- Une seule exception est autorisée : un kata d'exemple peut contenir une solution commentée pour montrer la méthode.

## Règles techniques

- Le repo doit rester simple à lancer localement.
- Ne pas ajouter de dépendance ou de build step sans nécessité forte.
- Conserver des conventions homogènes pour tous les katas.
- Chaque kata doit avoir des métadonnées exploitables par le picker.
- Les starters doivent fournir la structure utile, mais laisser le JavaScript principal à produire par l'apprenant.

## Commit automatique

À la fin de chaque ajout terminé, l'agent doit créer un commit Git dédié.

Un ajout terminé peut être :

- un nouveau kata ;
- une nouvelle ressource de cours ;
- une amélioration du picker ;
- une modification de documentation ;
- une correction ciblée.

Avant chaque commit :

- vérifier `git status --short` ;
- ne committer que les fichiers liés à l'ajout ;
- ne pas inclure de changements non liés ou appartenant à l'utilisateur ;
- utiliser un message de commit clair, en français ou en anglais, décrivant l'ajout.

Si aucun commit ne peut être créé, l'agent doit l'indiquer explicitement en expliquant pourquoi.
