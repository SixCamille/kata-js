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

Exemple de style possible pour obtenir un effet sticker :

```css
.sticker {
  position: absolute;
  font-size: 42px;
  line-height: 1;
  padding: 6px;
  border: 4px solid white;
  border-radius: 999px;
  background: white;
  box-shadow: 0 8px 18px rgba(23, 32, 51, 0.22);
  transform: translate(-50%, -50%);
}
```
