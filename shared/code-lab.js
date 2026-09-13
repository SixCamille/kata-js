(function () {
  const lab = document.querySelector("[data-code-lab]");
  if (!lab) {
    return;
  }

  const htmlTemplate = document.querySelector("[data-code-lab-html]");
  const cssTemplate = document.querySelector("[data-code-lab-css]");
  const jsTemplate = document.querySelector("[data-code-lab-js]");
  const iframe = document.querySelector("[data-code-lab-preview]");
  const htmlOutput = document.querySelector("[data-code-lab-output='html']");
  const cssOutput = document.querySelector("[data-code-lab-output='css']");
  const editor = document.querySelector("[data-code-lab-editor]");
  const status = document.querySelector("[data-code-lab-status]");
  const runButton = document.querySelector("[data-code-lab-run]");
  const resetButton = document.querySelector("[data-code-lab-reset]");
  const tabButtons = document.querySelectorAll("[data-code-lab-tab]");
  const panels = document.querySelectorAll("[data-code-lab-panel]");
  const storageKey = lab.dataset.storageKey;

  const html = htmlTemplate.innerHTML.trim();
  const css = cssTemplate.textContent.trim();
  const starterJs = jsTemplate.textContent.trim();

  htmlOutput.textContent = html;
  cssOutput.textContent = css;
  editor.value = loadSavedCode() || starterJs;

  function loadSavedCode() {
    if (!storageKey) {
      return "";
    }

    try {
      return localStorage.getItem(storageKey) || "";
    } catch (error) {
      return "";
    }
  }

  function saveCode() {
    if (!storageKey) {
      return;
    }

    try {
      localStorage.setItem(storageKey, editor.value);
    } catch (error) {
      // Le kata doit rester utilisable meme si le stockage local est bloque.
    }
  }

  function setStatus(message, isError) {
    status.textContent = message;
    status.classList.toggle("error", Boolean(isError));
  }

  function escapeClosingScript(source) {
    return source.replace(/<\/script/gi, "<\\/script");
  }

  function buildDocument() {
    return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>${css}</style>
  </head>
  <body>
${html}
    <script>
      window.addEventListener("error", function (event) {
        const box = document.createElement("pre");
        box.textContent = event.message;
        box.style.cssText = "position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;margin:0;padding:12px;border:2px solid #202633;border-radius:6px;background:#fffdf8;color:#9f2c27;font:700 14px Consolas,monospace;white-space:pre-wrap;";
        document.body.append(box);
      });

      try {
${escapeClosingScript(editor.value)}
      } catch (error) {
        throw error;
      }
    </script>
  </body>
</html>`;
  }

  function runCode() {
    saveCode();
    iframe.srcdoc = buildDocument();
    setStatus("Preview mise a jour.", false);
  }

  function resetCode() {
    editor.value = starterJs;
    saveCode();
    runCode();
    setStatus("JS remis au point de depart.", false);
  }

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const target = button.dataset.codeLabTab;

      tabButtons.forEach(function (currentButton) {
        currentButton.classList.toggle("active", currentButton === button);
      });

      panels.forEach(function (panel) {
        panel.classList.toggle("active", panel.dataset.codeLabPanel === target);
      });
    });
  });

  editor.addEventListener("input", function () {
    saveCode();
    setStatus("JS modifie. Lance la preview pour tester.", false);
  });

  runButton.addEventListener("click", runCode);
  resetButton.addEventListener("click", resetCode);

  runCode();
})();
