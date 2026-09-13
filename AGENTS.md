# AGENTS.md

## Contexte du projet

Ce repo contient le site/repo KATA pour les katas JavaScript visuels du module EPSI B2 FI.

Le public est composé d'apprenants de 2e année. Les contenus doivent donc rester accessibles, mais ne doivent pas être trop simplistes : chaque ajout doit intégrer quelques notions de cours utiles, explicites et réutilisables.

## Règles pédagogiques

- Garder une approche JavaScript vanilla : HTML, CSS et JavaScript sans framework.
- Prévoir des notions de cours adaptées à des 2e années, pas seulement une consigne d'exercice.
- Expliquer les concepts utiles sans donner directement la solution des katas évaluables.
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
