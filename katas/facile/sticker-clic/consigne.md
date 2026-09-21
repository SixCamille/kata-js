# Sticker au clic

## Objectif

Ajouter un sticker emoji a l'endroit exact ou l'utilisateur clique dans la page.

## Notions de cours

- Un evenement `click` donne acces aux coordonnees du pointeur.
- `document.createElement` permet de creer un nouvel element.
- Les styles `left` et `top` peuvent positionner un element en CSS.
- Un emoji peut servir de contenu visuel simple avec `textContent`.
- Une bordure blanche et une ombre permettent de donner un effet sticker.
- Plusieurs stickers peuvent exister en meme temps dans la page.

## Travail attendu

Au clic dans la zone :

- creer un nouvel element de sticker ;
- lui donner un emoji comme contenu, par exemple `⭐`, `🔥` ou `🎯` ;
- le placer a la position du curseur ;
- l'ajouter dans la zone de jeu ;
- lui appliquer une bordure blanche et une ombre visible ;
- permettre aux stickers de se superposer.

## Contraintes

- Utiliser `addEventListener`.
- Ne pas utiliser de bibliotheque externe.
- Ne pas remplacer les stickers deja ajoutes.
- Utiliser au moins un emoji comme sticker.
