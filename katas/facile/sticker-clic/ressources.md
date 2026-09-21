# Ressources utiles

```js
element.addEventListener("click", function (event) {
  console.log(event.clientX, event.clientY);
});
```

```js
const sticker = document.createElement("div");
sticker.textContent = "JS";
document.body.append(sticker);
```

Pour placer un element librement, il peut avoir `position: absolute`, puis recevoir des valeurs `left` et `top`.
