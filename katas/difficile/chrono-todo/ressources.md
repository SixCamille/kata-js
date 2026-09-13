# Ressources

## Empecher le rechargement d'un formulaire

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

## Ajouter une entree dans un tableau

```js
tasks.push({
  label: "Relire la consigne",
  done: false
});
```

## Vider puis reconstruire une liste

```js
list.innerHTML = "";

tasks.forEach(function (task) {
  const item = document.createElement("li");
  item.textContent = task.label;
  list.append(item);
});
```

## Chronometre simple

```js
let seconds = 0;

const intervalId = setInterval(function () {
  seconds = seconds + 1;
}, 1000);

clearInterval(intervalId);
```
