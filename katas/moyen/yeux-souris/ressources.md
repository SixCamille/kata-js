# Ressources

## Position de la souris

```js
document.addEventListener("mousemove", function (event) {
  console.log(event.clientX, event.clientY);
});
```

## Position d'un element

```js
const rect = element.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;
```

## Deplacer en CSS

```js
pupil.style.transform = "translate(8px, -4px)";
```

## Limiter une valeur

```js
const limited = Math.max(-12, Math.min(12, value));
```
