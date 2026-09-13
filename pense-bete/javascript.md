# Pense-bete JavaScript

Ce pense-bete rappelle les notions utiles pour les katas. Il est volontairement court : l'objectif est d'aider a retrouver un reflexe, pas de remplacer le cours.

## Variables

`const` sert pour une reference que l'on ne reassigne pas.

`let` sert pour une valeur qui peut changer.

```js
const button = document.querySelector("button");
let count = 0;
```

## Conditions

Une condition permet de choisir un comportement selon l'etat actuel.

```js
if (count > 5) {
  message.textContent = "Bravo";
} else {
  message.textContent = "Continue";
}
```

## Fonctions

Une fonction regroupe une action que l'on veut nommer, declencher ou reutiliser.

```js
function updateMessage(text) {
  message.textContent = text;
}
```

## Tableaux

Un tableau stocke plusieurs valeurs dans un ordre.

```js
const colors = ["red", "blue", "green"];
colors.push("gold");
```

On parcourt souvent un tableau avec `forEach`.

```js
colors.forEach(function (color) {
  console.log(color);
});
```

## Selectionner dans le DOM

`querySelector` recupere le premier element qui correspond au selecteur CSS.

```js
const title = document.querySelector("h1");
const card = document.querySelector(".card");
```

`querySelectorAll` recupere une liste d'elements.

```js
const buttons = document.querySelectorAll("button");
```

## Modifier un element

```js
title.textContent = "Nouveau titre";
card.classList.add("active");
card.classList.remove("hidden");
card.style.transform = "translateX(20px)";
```

## Ecouter un evenement

`addEventListener` relie une action utilisateur ou navigateur a une fonction.

```js
button.addEventListener("click", function () {
  count = count + 1;
});
```

Evenements frequents :

- `click` ;
- `input` ;
- `submit` ;
- `mousemove` ;
- `keydown` ;
- `scroll`.

## Temps

`setTimeout` lance une action une seule fois apres un delai.

```js
setTimeout(function () {
  message.textContent = "Temps ecoule";
}, 1000);
```

`setInterval` repete une action.

```js
const timerId = setInterval(function () {
  count = count + 1;
}, 1000);
```

`clearInterval(timerId)` arrete l'intervalle.

## Souris

Sur un evenement de souris, on peut lire la position du pointeur.

```js
document.addEventListener("mousemove", function (event) {
  console.log(event.clientX, event.clientY);
});
```

## Scroll

```js
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});
```

## Debug

Les bons reflexes :

- lire la console ;
- verifier que le fichier JS est bien charge ;
- tester un `console.log` dans chaque evenement ;
- inspecter les classes dans les DevTools ;
- nommer les variables selon leur role ;
- avancer petit a petit.
