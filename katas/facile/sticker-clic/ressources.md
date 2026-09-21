# Ressources utiles

```js
element.addEventListener("click", function (event) {
  console.log(event.clientX, event.clientY);
});
```

```js
const sticker = document.createElement("div");
sticker.textContent = "⭐";
document.body.append(sticker);
```

Pour placer un element librement, il peut avoir `position: absolute`, puis recevoir des valeurs `left` et `top`.

`filter: drop-shadow(...)` suit les pixels visibles d'un emoji ou d'une image transparente. C'est utile pour creer un contour qui suit mieux la forme qu'une bordure rectangulaire.

Exemple de style possible pour obtenir un effet sticker :

```css
.sticker {
  position: absolute;
  font-size: 42px;
  line-height: 1;
  padding: 6px;
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
  transform: translate(-50%, -50%);
}
```
