# Yeux qui suivent la souris

## Objectif

Créer deux yeux dont les pupilles se deplacent legerement dans la direction du pointeur.

## Notions de cours

- L'evenement `mousemove` donne la position de la souris.
- `getBoundingClientRect()` permet de connaitre la position d'un element dans la page.
- Une transformation CSS peut deplacer un element sans changer le flux HTML.
- Un calcul simple peut convertir un ecart de position en mouvement limite.

## Travail attendu

Quand la souris bouge :

- recuperer la position du pointeur ;
- calculer la position du centre de chaque oeil ;
- deplacer chaque pupille dans la direction du pointeur ;
- limiter le deplacement pour que la pupille reste dans l'oeil.

## Contraintes

- Utiliser `mousemove`.
- Utiliser `transform: translate(...)` pour deplacer les pupilles.
- Ne pas utiliser de bibliotheque externe.
