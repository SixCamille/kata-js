# Ressources utiles

## Garder un effet 3D lisible

Le parent peut donner de la profondeur avec `perspective`. Plus la valeur est petite, plus l'effet de profondeur est marque.

```css
main {
  perspective: 900px;
}
```

## Retourner la carte

La carte qui tourne doit conserver ses faces dans un espace 3D.

```css
.card {
  transform-style: preserve-3d;
  transition: transform 320ms ease;
}
```

Quand une classe d'etat est ajoutee, la carte peut pivoter.

```css
.card.is-flipped {
  transform: rotateY(180deg);
}
```

## Masquer la face cachee

Chaque face peut cacher son envers avec `backface-visibility`. La face verso commence deja retournee.

```css
.front,
.back {
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}
```
