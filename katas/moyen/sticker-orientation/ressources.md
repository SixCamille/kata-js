# Ressources utiles

Ecouter un clic et lire les coordonnees :

```js
zone.addEventListener("click", function (event) {
  console.log(event.clientX, event.clientY);
});
```

Choisir une valeur aleatoire dans un tableau :

```js
const emojis = ["⭐", "🔥", "🎯", "💡"];
const index = Math.floor(Math.random() * emojis.length);
const emoji = emojis[index];
```

Calculer un angle aleatoire :

```js
const angle = Math.floor(Math.random() * 61) - 30;
```

Calculer une taille aleatoire entre 42 et 76 pixels :

```js
const taille = Math.floor(Math.random() * 35) + 42;
```

`filter: drop-shadow(...)` suit les pixels visibles de l'emoji. C'est plus adapte qu'une `box-shadow` quand on veut un contour qui colle a la forme.

Exemple de style possible pour composer contour, ombre, centrage et rotation :

```css
.sticker {
  position: absolute;
  width: var(--taille);
  height: var(--taille);
  font-size: calc(var(--taille) * 0.66);
  filter:
    drop-shadow(0 4px 0 white)
    drop-shadow(4px 0 0 white)
    drop-shadow(0 -4px 0 white)
    drop-shadow(-4px 0 0 white)
    drop-shadow(3px 3px 0 white)
    drop-shadow(-3px 3px 0 white)
    drop-shadow(3px -3px 0 white)
    drop-shadow(-3px -3px 0 white)
    drop-shadow(0 5px 7px rgba(23, 32, 51, 0.14));
  transform: translate(-50%, -50%) rotate(var(--rotation));
}
```

En JavaScript, `--rotation` peut recevoir une valeur comme `"12deg"`.
`--taille` peut recevoir une valeur comme `"58px"`.
