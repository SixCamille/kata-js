const KATAS = [
  {
    title: "Afficher / masquer un mot de passe",
    level: "facile",
    summary: "Manipuler un input, un bouton et un etat booleen.",
    concepts: ["querySelector", "type d'input", "condition", "etat"],
    starter: "katas/facile/mot-de-passe/index.html",
    consigne: "katas/facile/mot-de-passe/consigne.md",
    resources: "katas/facile/mot-de-passe/ressources.md",
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
    starter: "katas/moyen/yeux-souris/index.html",
    consigne: "katas/moyen/yeux-souris/consigne.md",
    resources: "katas/moyen/yeux-souris/ressources.md",
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
    starter: "katas/difficile/chrono-todo/index.html",
    consigne: "katas/difficile/chrono-todo/consigne.md",
    resources: "katas/difficile/chrono-todo/ressources.md",
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
