const siteNavMount = document.querySelector("[data-site-nav]");

if (siteNavMount) {
  const root = siteNavMount.dataset.root || ".";
  const active = siteNavMount.dataset.active || "";
  const title = siteNavMount.dataset.title || "KATA JS";
  const levelClass = ["facile", "moyen", "difficile"].includes(active) ? " level-" + active : "";

  const links = [
    { id: "facile", label: "Facile", path: "katas/facile/index.html" },
    { id: "moyen", label: "Moyen", path: "katas/moyen/index.html" },
    { id: "difficile", label: "Difficile", path: "katas/difficile/index.html" },
    { id: "pense-bete", label: "Pense-bête", path: "pense-bete/javascript.html" },
    { id: "picker", label: "Picker", path: "picker/index.html" }
  ];

  function withRoot(path) {
    if (root === ".") {
      return path;
    }

    return root.replace(/\/$/, "") + "/" + path;
  }

  const header = document.createElement("header");
  header.className = "topbar" + levelClass;

  const titleWrapper = document.createElement("div");
  const heading = document.createElement("h1");
  const homeLink = document.createElement("a");
  homeLink.href = withRoot("index.html");
  homeLink.textContent = title;
  heading.append(homeLink);
  titleWrapper.append(heading);

  const nav = document.createElement("nav");
  nav.className = "topnav";
  nav.setAttribute("aria-label", "Navigation principale");

  links.forEach(function (linkData) {
    const link = document.createElement("a");
    link.href = withRoot(linkData.path);
    link.textContent = linkData.label;

    if (linkData.id === active) {
      link.className = "active-nav";
    }

    nav.append(link);
  });

  header.append(titleWrapper, nav);
  siteNavMount.replaceWith(header);
}
