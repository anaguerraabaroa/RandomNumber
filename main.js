"use strict";

// Declaramos las constantes sobre los elementos que se van a ver afectados por el evento y las funciones que activa el evento
const random = document.querySelector("body");
const button = document.querySelector(".js-button");
const userNumber = document.querySelector(".js-userNumber");
const clue = document.querySelector(".js-clue");
const attempts = document.querySelector(".js-attempts");

// Declaramos la función para obtener el número aleatorio definida en el enunciado del ejercicio
// Math.random devuelve un número comprendido entre 0 y 1 con decimales
// Math.ceil redondea Math.random al número entero más cercano
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Invocamos a la función pasando el argumento max = 100
// Según el enunciado del ejercicio el rango del número aleatorio tiene que estar entre min = 0 y max = 100
const randomNumber = getRandomNumber(100);
// Logueamos en consola el número aleatorio para poder comparar con el número que introduzca el usuario en el siguiente paso
console.log(randomNumber);

// Declaramos la función que va a realizar la comparación entre el número aleatorio y el número que introduzca el usuario
function getFinalNumber() {
  // Para ello primero declaramos una variable cuyo valor será diferente cada vez que el usuario introduzca un número. Por eso usamos let en vez de const
  // La variable recogerá el número que introduzca el usuario en el input de texto de nuestro formulario. Para recoger el valor de dentro de un input tenemos que utilizar input.value
  // Cuando recogemos valores del HTML siempre se trata de strings, por eso tenemos que convertirlos a números con parseInt
  let getUserNumber = parseInt(userNumber.value);
  // Logueamos en consola para confirmar que estamos accediendo al valor del input y lo estamos convirtiendo correctamente a un número
  console.log(getUserNumber);
  // Declaramos una condicional dentro del rango establecido en el enunciado del proyecto
  // Es necesario declarar el rango porque el usuario podría incluir valores por encima del 100 (mayor que) o por debajo del 0 (menor que) que seguirían cumpliendo la condición pero estarían fuera del rango establecido en el ejercicio
  if (getUserNumber > 0 && getUserNumber <= 100) {
    // Dentro de la condición del rango establecemos las comparaciones entre el número random y el número que introduce el usuario
    if (getUserNumber > randomNumber) {
      // Si cumple la condición pintamos dentro del párrafo de pistas el mensaje establecido en el enunciado del ejercicio
      clue.innerHTML = "Pista: demasiado alto";
    } else if (getUserNumber < randomNumber) {
      clue.innerHTML = "Pista: demasiado bajo";
    } else if (getUserNumber === randomNumber) {
      clue.innerHTML = "Has ganado campeona!!!";
    }
    // Si no se cumple ninguna de las condiciones anteriores establecemos fuera del rango un resultado por defecto
  } else {
    clue.innerHTML = "Pista: el número debe estar entre 1 y 100";
  }
  // OJO! Invocamos el resultado de la función getTotalAttempts aquí debido a que el evento activará esta función
  // Pintamos dentro del párrafo el valor de la función getTotalAttempts
  attempts.innerHTML = getTotalAttempts();
}

// Declaramos una variable para indicar que el contador debe empezar la cuenta a 0
let attemptsNumber = 0;
// Declaramos una función para indicar que el contador debe sumar 1 a la cuenta cada vez que se haga click sobre el botón
function getTotalAttempts() {
  attemptsNumber++;
  // La función debe devolver un texto con el número de clicks sobre el botón
  return `Número de intentos: ${attemptsNumber}`;
  // OJO! El resultado lo debemos invocar desde la función getFinalNumber para pintar dentro del párrafo de intentos el mensaje establecido en el enunciado del ejercicio
  // OJO! Se debe invocar desde la función getFinalNumber debido a que el evento activará dicha función y no ésta
}

// Declaramos el evento que activará las funciones
// Cada vez que hagamos click sobre el botón se ejecutará la función getFinalNumber
button.addEventListener("click", getFinalNumber);
