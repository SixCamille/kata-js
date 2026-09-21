const KataProgress = (function () {
  const storagePrefix = "kata-js-progress:";

  function getStorageKey(kataId) {
    return storagePrefix + kataId;
  }

  function read(kataId) {
    const fallback = {
      startedAt: null,
      finishedAt: null
    };

    try {
      const rawValue = localStorage.getItem(getStorageKey(kataId));
      const parsedValue = rawValue ? JSON.parse(rawValue) : null;

      return parsedValue && typeof parsedValue === "object"
        ? Object.assign(fallback, parsedValue)
        : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function write(kataId, progress) {
    try {
      localStorage.setItem(getStorageKey(kataId), JSON.stringify(progress));
    } catch (error) {
      return;
    }

    window.dispatchEvent(new CustomEvent("kata-progress-change", {
      detail: { kataId: kataId }
    }));
  }

  function start(kataId) {
    write(kataId, {
      startedAt: Date.now(),
      finishedAt: null
    });
  }

  function finish(kataId) {
    const progress = read(kataId);
    const now = Date.now();

    write(kataId, {
      startedAt: progress.startedAt || now,
      finishedAt: now
    });
  }

  function reset(kataId) {
    try {
      localStorage.removeItem(getStorageKey(kataId));
    } catch (error) {
      return;
    }

    window.dispatchEvent(new CustomEvent("kata-progress-change", {
      detail: { kataId: kataId }
    }));
  }

  function getElapsedMs(progress) {
    if (!progress.startedAt) {
      return 0;
    }

    return (progress.finishedAt || Date.now()) - progress.startedAt;
  }

  function formatElapsed(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  }

  function getStatus(progress) {
    if (progress.finishedAt) {
      return "reussi";
    }

    if (progress.startedAt) {
      return "en cours";
    }

    return "non commence";
  }

  function getCardLabel(kataId) {
    const progress = read(kataId);
    const status = getStatus(progress);

    if (!progress.startedAt) {
      return "Non commence";
    }

    if (progress.finishedAt) {
      return "Reussi - " + formatElapsed(getElapsedMs(progress));
    }

    return "En cours - " + formatElapsed(getElapsedMs(progress));
  }

  function createSummary(kataId) {
    const summary = document.createElement("p");
    summary.className = "kata-progress-summary";
    let timerId = null;

    function render() {
      const progress = read(kataId);
      summary.dataset.status = getStatus(progress);
      summary.textContent = getCardLabel(kataId);

      if (progress.startedAt && !progress.finishedAt && !timerId) {
        timerId = window.setInterval(render, 1000);
      }

      if ((!progress.startedAt || progress.finishedAt) && timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    window.addEventListener("kata-progress-change", function (event) {
      if (!event.detail || event.detail.kataId === kataId) {
        render();
      }
    });

    window.addEventListener("storage", function (event) {
      if (event.key === getStorageKey(kataId)) {
        render();
      }
    });

    render();
    return summary;
  }

  function mountCurrentKataTimer() {
    const kataId = document.body.dataset.kata;
    const mountPoint = document.querySelector("[data-kata-timer]");

    if (!kataId || !mountPoint) {
      return;
    }

    mountPoint.innerHTML = `
      <div class="kata-timer-display" aria-live="polite">00:00</div>
      <p class="kata-timer-status">Non commence</p>
      <div class="kata-timer-actions">
        <button class="memo-button" type="button" data-progress-start>Debut</button>
        <button class="memo-button" type="button" data-progress-finish>Fin</button>
        <button class="memo-button secondary" type="button" data-progress-reset>Reset</button>
      </div>
    `;

    const display = mountPoint.querySelector(".kata-timer-display");
    const status = mountPoint.querySelector(".kata-timer-status");
    const startButton = mountPoint.querySelector("[data-progress-start]");
    const finishButton = mountPoint.querySelector("[data-progress-finish]");
    const resetButton = mountPoint.querySelector("[data-progress-reset]");
    let timerId = null;

    function render() {
      const progress = read(kataId);
      const currentStatus = getStatus(progress);

      display.textContent = formatElapsed(getElapsedMs(progress));
      status.textContent = currentStatus;
      mountPoint.dataset.status = currentStatus;
      startButton.textContent = progress.startedAt && !progress.finishedAt ? "Recommencer" : "Debut";
      finishButton.disabled = !progress.startedAt || Boolean(progress.finishedAt);
    }

    function tick() {
      render();
      const progress = read(kataId);

      if (progress.startedAt && !progress.finishedAt && !timerId) {
        timerId = window.setInterval(render, 1000);
      }

      if ((!progress.startedAt || progress.finishedAt) && timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    startButton.addEventListener("click", function () {
      start(kataId);
      tick();
    });

    finishButton.addEventListener("click", function () {
      finish(kataId);
      tick();
    });

    resetButton.addEventListener("click", function () {
      reset(kataId);
      tick();
    });

    window.addEventListener("storage", function (event) {
      if (event.key === getStorageKey(kataId)) {
        tick();
      }
    });

    tick();
  }

  function mountSummaryPlaceholders() {
    document.querySelectorAll("[data-kata-progress-summary]").forEach(function (placeholder) {
      const kataId = placeholder.dataset.kataProgressSummary;

      if (kataId) {
        placeholder.replaceChildren(createSummary(kataId));
      }
    });
  }

  return {
    createSummary: createSummary,
    mountSummaryPlaceholders: mountSummaryPlaceholders,
    mountCurrentKataTimer: mountCurrentKataTimer,
    read: read
  };
})();

KataProgress.mountCurrentKataTimer();
KataProgress.mountSummaryPlaceholders();
