export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  if (typeof panelBtn !== "string")
    return console.error(
      `El valor "${panelBtn}" no es una clase válida. Debe ser un String`
    );

  if (typeof panel !== "string")
    return console.error(
      `El valor "${panel}" no es una clase válida. Debe ser un String`
    );
  if (typeof menuLink !== "string")
    return console.error(
      `El valor "${menuLink}" no es una clase válida. Debe ser un String`
    );

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
