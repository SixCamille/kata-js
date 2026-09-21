const KATAS = [
  {
    title: "Afficher / masquer un mot de passe",
    level: "facile",
    summary: "Manipuler un input, un bouton et un etat booleen.",
    concepts: ["querySelector", "type d'input", "condition", "etat"],
    starter: "../katas/facile/mot-de-passe/index.html",
    consigne: "../katas/facile/mot-de-passe/consigne.md",
    resources: "../katas/facile/mot-de-passe/ressources.md",
    memo: [
      {
        title: "Selectionner dans le DOM",
        text: "Recupere les elements utiles une fois, puis manipule leurs proprietes dans les evenements.",
        code: `const field = document.querySelector("input");
const button = document.querySelector("button");`
      },
      {
        title: "Conditions",
        text: "Une condition sert a choisir le comportement selon l'etat courant.",
        code: `if (isVisible) {
  // afficher une version lisible
} else {
  // revenir a l'etat masque
}`
      }
    ],
    specificMemo: [
      {
        title: "Type d'un input",
        text: "Le type d'un champ peut etre modifie en JavaScript.",
        code: `field.type = "text";
field.type = "password";`
      },
      {
        title: "Etat booleen",
        text: "Un booleen memorise si le mot de passe est visible ou non.",
        code: `let isVisible = false;
isVisible = !isVisible;`
      }
    ],
    visual: `
      <div class="mock-password">
        <label for="mock-password">Mot de passe</label>
        <div class="mock-row">
          <input id="mock-password" type="password" value="epsi-js">
          <button type="button">Voir</button>
        </div>
      </div>
    `
  },
  {
    title: "Yeux qui suivent la souris",
    level: "moyen",
    summary: "Utiliser la position de la souris pour orienter deux pupilles.",
    concepts: ["mousemove", "clientX", "clientY", "transform"],
    starter: "../katas/moyen/yeux-souris/index.html",
    consigne: "../katas/moyen/yeux-souris/consigne.md",
    resources: "../katas/moyen/yeux-souris/ressources.md",
    memo: [
      {
        title: "Ecouter un evenement",
        text: "Un evenement donne acces a un objet qui decrit ce qui vient de se passer.",
        code: `document.addEventListener("mousemove", function (event) {
  console.log(event.clientX, event.clientY);
});`
      },
      {
        title: "Modifier un element",
        text: "Le DOM peut changer le style d'un element en reaction a l'utilisateur.",
        code: `element.style.transform = "translateX(20px)";`
      }
    ],
    specificMemo: [
      {
        title: "Centre d'un element",
        text: "La boite d'un element permet de calculer son centre dans la fenetre.",
        code: `const rect = element.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;`
      },
      {
        title: "Limiter un deplacement",
        text: "Encadrer une valeur evite que la pupille sorte trop loin de l'oeil.",
        code: `const limited = Math.max(-12, Math.min(12, value));`
      }
    ],
    visual: `
      <div class="mock-eyes">
        <div class="eyes-face"><span></span><span></span></div>
        <p>Les pupilles se deplacent selon la position du pointeur.</p>
      </div>
    `
  },
  {
    title: "Chronometre de todo list",
    level: "difficile",
    summary: "Combiner formulaire, liste, et chronometre simple.",
    concepts: ["submit", "tableau", "setInterval", "etat compose"],
    starter: "../katas/difficile/chrono-todo/index.html",
    consigne: "../katas/difficile/chrono-todo/consigne.md",
    resources: "../katas/difficile/chrono-todo/ressources.md",
    memo: [
      {
        title: "Tableaux",
        text: "Un tableau garde plusieurs valeurs et peut etre reconstruit a l'affichage.",
        code: `const tasks = [];

tasks.forEach(function (task) {
  console.log(task);
});`
      },
      {
        title: "Temps",
        text: "Un intervalle repete une action jusqu'a ce qu'il soit arrete.",
        code: `const timerId = setInterval(function () {
  count = count + 1;
}, 1000);

clearInterval(timerId);`
      }
    ],
    specificMemo: [
      {
        title: "Formulaire",
        text: "Sur un submit, empeche le rechargement pour garder l'application sur la page.",
        code: `form.addEventListener("submit", function (event) {
  event.preventDefault();
});`
      },
      {
        title: "Reconstruire une liste",
        text: "Vider puis recreer les elements visibles aide a synchroniser l'ecran avec le tableau.",
        code: `list.innerHTML = "";

tasks.forEach(function (task) {
  const item = document.createElement("li");
  item.textContent = task.label;
  list.append(item);
});`
      }
    ],
    visual: `
      <div class="mock-combo">
        <h3>00:42</h3>
        <button type="button">Demarrer</button>
        <ul>
          <li><span>Lire la consigne</span><strong>fait</strong></li>
          <li><span>Coder l'ajout</span><strong>todo</strong></li>
        </ul>
      </div>
    `
  }
];
