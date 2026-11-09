/* Lógica de la página: menú, buscador, filtros y navegación móvil. */

(function () {
  "use strict";

  const grid = document.getElementById("menuGrid");
  const chipsBox = document.getElementById("chips");
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClear");
  const info = document.getElementById("resultsInfo");
  const empty = document.getElementById("emptyState");
  const resetBtn = document.getElementById("resetBtn");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  let categoriaActiva = "todas";

  /* Quita tildes y pasa a minúsculas para buscar sin importar acentos */
  function normalizar(texto) {
    return texto
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .trim();
  }

  function precio(valor) {
    return "$" + valor.toFixed(2);
  }

  function nombreCategoria(id) {
    const cat = CATEGORIAS.find(function (c) { return c.id === id; });
    return cat ? cat.nombre : "";
  }

  /* ---------- Filtros (chips) ---------- */
  function crearChips() {
    const todas = [{ id: "todas", nombre: "Todo" }].concat(CATEGORIAS);
    chipsBox.innerHTML = "";

    todas.forEach(function (cat) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (cat.id === categoriaActiva ? " is-active" : "");
      btn.textContent = cat.nombre;
      btn.dataset.cat = cat.id;
      btn.setAttribute("aria-pressed", cat.id === categoriaActiva ? "true" : "false");
      btn.addEventListener("click", function () {
        categoriaActiva = cat.id;
        crearChips();
        render();
      });
      chipsBox.appendChild(btn);
    });
  }

  /* ---------- Tarjetas del menú ---------- */
  function crearTarjeta(item) {
    const card = document.createElement("article");
    card.className = "dish";

    const icon = document.createElement("div");
    icon.className = "dish__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = item.icono;

    const body = document.createElement("div");
    body.className = "dish__body";

    const top = document.createElement("div");
    top.className = "dish__top";

    const title = document.createElement("h3");
    title.className = "dish__name";
    title.textContent = item.nombre;

    const dots = document.createElement("span");
    dots.className = "dish__dots";
    dots.setAttribute("aria-hidden", "true");

    const price = document.createElement("span");
    price.className = "dish__price";
    price.textContent = precio(item.precio);

    top.appendChild(title);
    top.appendChild(dots);
    top.appendChild(price);

    const desc = document.createElement("p");
    desc.className = "dish__desc";
    desc.textContent = item.descripcion;

    const tag = document.createElement("span");
    tag.className = "dish__tag";
    tag.textContent = nombreCategoria(item.categoria);

    body.appendChild(top);
    body.appendChild(desc);
    body.appendChild(tag);

    card.appendChild(icon);
    card.appendChild(body);
    return card;
  }

  /* ---------- Render principal ---------- */
  function render() {
    const consulta = normalizar(input.value);
    const palabras = consulta ? consulta.split(/\s+/) : [];

    const resultado = MENU.filter(function (item) {
      if (categoriaActiva !== "todas" && item.categoria !== categoriaActiva) {
        return false;
      }
      if (palabras.length === 0) return true;

      const texto = normalizar(
        item.nombre + " " + item.descripcion + " " + nombreCategoria(item.categoria)
      );
      /* Todas las palabras escritas deben aparecer en el platillo */
      return palabras.every(function (p) { return texto.indexOf(p) !== -1; });
    });

    grid.innerHTML = "";
    resultado.forEach(function (item) {
      grid.appendChild(crearTarjeta(item));
    });

    clearBtn.hidden = input.value.length === 0;
    empty.hidden = resultado.length !== 0;

    if (resultado.length === 0) {
      info.textContent = "";
    } else if (consulta || categoriaActiva !== "todas") {
      info.textContent = resultado.length === 1
        ? "1 platillo encontrado"
        : resultado.length + " platillos encontrados";
    } else {
      info.textContent = MENU.length + " platillos en la carta";
    }
  }

  function reiniciar() {
    input.value = "";
    categoriaActiva = "todas";
    crearChips();
    render();
    input.focus();
  }

  /* ---------- Eventos ---------- */
  input.addEventListener("input", render);

  clearBtn.addEventListener("click", function () {
    input.value = "";
    render();
    input.focus();
  });

  resetBtn.addEventListener("click", reiniciar);

  navToggle.addEventListener("click", function () {
    const abierto = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", abierto ? "true" : "false");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Inicio ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  crearChips();
  render();
})();
