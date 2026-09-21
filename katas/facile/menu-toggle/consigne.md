# Menu ouvrant / fermant

## Objectif

Afficher ou masquer un menu lorsque l'utilisateur clique sur un bouton.

## Notions de cours

- Un bouton peut piloter l'affichage d'un bloc.
- Une classe CSS peut representer l'etat ouvert ou ferme.
- Une transition CSS rend l'ouverture plus lisible qu'un changement brutal.
- `aria-expanded` permet de rendre l'etat du bouton plus explicite.

## Travail attendu

Au clic sur le bouton :

- ouvrir le menu s'il est ferme ;
- fermer le menu s'il est ouvert ;
- utiliser la transition CSS deja preparee dans le starter ;
- mettre a jour le texte du bouton ou son attribut `aria-expanded`.

## Contraintes

- Utiliser `querySelector`.
- Utiliser `addEventListener`.
- Ne pas dupliquer le menu en JavaScript.
