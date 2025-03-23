let bear = document.getElementById("bear");
let body = document.querySelector("body");

let themes = ["", "pardo", "panda"];
let index = 0;

// Al cargar la página, revisamos si hay tema guardado
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  index = themes.indexOf(savedTheme);
  if (index === -1) index = 0; // fallback por si algo sale mal
  body.className = themes[index];
  console.log("Tema cargado desde localStorage:", themes[index]);
}

bear.addEventListener("click", () => {
  index = (index + 1) % themes.length;
  body.className = themes[index];

  // Guardamos el tema actual en localStorage
  localStorage.setItem("theme", themes[index]);

  console.log("Tema activo", themes[index], "(index:", index, ")");
});
