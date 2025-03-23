let number = document.getElementById("number");
let result = document.getElementById("result");

let numberGuess = Math.floor(Math.random() * 11);
let contador = 0;

// Función principal para intentar adivinar el número
function tryGame() {
  result.classList.remove("show"); // Reinicia la animación cada vez que se intente

  let numberInput = parseInt(number.value);

  // Verificar si la entrada es un número válido
  if (isNaN(numberInput)) {
    showAlert("❗ Debes ingresar un número válido.");

    setTimeout(() => {
      result.classList.remove("show");
    }, 2000);

    return;
  }

  // Verificar si el número está dentro del rango permitido (1-10)
  if (numberInput < 1 || numberInput > 10) {
    showAlert("❗ Debes ingresar un número entre 1 y 10.");

    setTimeout(() => {
      result.classList.remove("show");
    }, 2000);
    return;
  }

  // Comprobar si el número ingresado es el correcto
  if (numberInput === numberGuess) {
    showAlert("🎉 ¡GRRRR! Felicidades, salvaste al oso 🐻✨");
  } else {
    contador++;

    // Comprobar si se han agotado los intentos
    if (contador >= 5) {
      showAlert("💀 ¡Perdiste! El oso ha muerto 😢");
      return; // Fin del juego si se agotan los intentos
    }

    // Dar pistas al jugador
    if (numberInput > numberGuess) {
      showAlert("🔻 El número es más bajo. Intentos: " + contador + "/5");
    } else {
      showAlert("🔺 El número es más alto. Intentos: " + contador + "/5");
    }
  }
}

// Función para mostrar el mensaje de alerta con animación
function showAlert(message) {
  result.innerText = message;
  result.classList.add("show");
}

// Función para reiniciar el juego
function resetGame() {
  numberGuess = Math.floor(Math.random() * 10);

  contador = 0;

  number.value = "";

  result.innerText = "🔄 Juego reiniciado";
  result.classList.add("show");

  setTimeout(() => {
    result.classList.remove("show");
  }, 2000);
}
