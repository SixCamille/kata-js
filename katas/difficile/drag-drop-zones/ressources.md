# Ressources utiles

```html
<div draggable="true">Carte</div>
```

```js
zone.addEventListener("dragover", function (event) {
  event.preventDefault();
});
```

```js
zone.addEventListener("drop", function () {
  console.log("depose");
});
```
