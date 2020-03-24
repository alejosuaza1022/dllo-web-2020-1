/**
 *
 * FUNCIÓN CALLBACK
 *
 * Una función de callback es una función que se pasa a otra función como un argumento,
 * que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
 * https://developer.mozilla.org/es/docs/Glossary/Callback_function
 *
 */

//----------------- Ejemplo #1 Funciones por separado --------------

function imprimir(info) {
  console.log(info);
}

function imprimir_2(nombre, apellido) {
  console.log(`El nombre es ${nombre} ${apellido}`);
}

function consultarNombre(callback) {
  let nombre = "Santiago";
  callback(nombre, "urrego", imprimir);
}

consultarNombre(imprimir_2);

//----------------- Ejemplo #2 Funciones flecha --------------
console.log();

let imprimir1 = info => {
  console.log(info);
};

let consultarNombre1 = callback => {
  let nombre = "Santiago opción 2";
  callback(nombre);
};

consultarNombre1(imprimir1);

consultarNombre1(function(info) {
  console.log();
  console.log("Ejecución dentro del método");
  console.log(info);
});

consultarNombre1(info => {
  console.log();
  console.log(info);
});

/**
 *
 * SET TIME OUT
 *
 * El método setTimeout() del mixin WindowOrWorkerGlobalScope establece un
 * temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.
 *
 * https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setTimeout
 *
 */

setTimeout(() => {
  console.log("Ejecución terminada...");
}, 3000);
