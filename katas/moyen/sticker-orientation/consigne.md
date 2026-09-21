# Sticker emoji oriente

## Objectif

Ajouter un sticker emoji a l'endroit exact ou l'utilisateur clique, avec une orientation et une taille aleatoires pour chaque nouveau sticker.

## Notions de cours

- Un evenement `click` donne acces aux coordonnees du pointeur.
- `document.createElement` permet de creer un nouvel element.
- `Math.random()` permet de produire une valeur aleatoire.
- La propriete CSS `transform` peut combiner un centrage et une rotation.
- Une variable CSS peut aider a piloter l'orientation ou la taille d'un sticker.

## Travail attendu

Au clic dans la zone :

- creer un nouvel element de sticker ;
- lui donner un emoji comme contenu ;
- le placer a la position du curseur ;
- calculer une rotation aleatoire ;
- calculer une taille aleatoire ;
- appliquer la rotation au sticker ;
- appliquer la taille au sticker ;
- ajouter le sticker dans la zone sans supprimer les precedents.

## Contraintes

- Utiliser `addEventListener`.
- Ne pas utiliser de bibliotheque externe.
- Utiliser au moins trois emojis possibles.
- Chaque sticker doit pouvoir avoir une orientation differente.
- Chaque sticker doit pouvoir avoir une taille differente.
- Garder un contour blanc et une ombre qui suivent la forme de l'emoji.
