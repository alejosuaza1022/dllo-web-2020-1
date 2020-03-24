/**
 *  ARROW FUNCTION - FUNCIONES FLECHA
 *
 * 1. Sintaxis más corta
 * 2. 'this' no se vincula.
 */

// Función tradicional
function sumar_1(a, b) {
  //En esta función se crea un nuevo contexto (this)
  return a + b;
}

// Función flecha
let sumar_2 = (a, b) => {
  return a + b;
};

let sumar_3 = (a, b) => a + b;

let resultado1 = sumar_1(10, 20);
let resultado2 = sumar_2(10, 20);
let resultado3 = sumar_3(10, 20);

console.log();

console.log("Opción tradicional:", resultado1);
console.log("Opción función flecha:", resultado2);
console.log("Opción función flecha  reducida:", resultado3);

// ---------------------- EJEMPLO RETO --------------

let arreglo1 = [1, 3, 4, 5, 6, 7, 2];
let arreglo2 = [5, 8, 9, 10, 2];

function intersection(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        result.push(a[i]);
        break;
      }
    }
  }
  return result.sort();
}

let resultado_1 = intersection(arreglo1, arreglo2);

let resultado_suaza = (a, b) => a.filter(x => b.includes(x));

let resultado_valencia = (a, b) => {
  result2 = a.filter(e => {
    if (b.includes(e)) {
      return e;
    }
  });
  return result2;
};

let resultado_gonzales = (a, b) => {
  let resultado;
  resultado = a.filter(x => b.includes(x));
  return resultado;
};

let resultado_ = (a, b) => a.filter(value => b.includes(value)).sort();

console.log(resultado_1);
console.log(resultado_suaza(arreglo1, arreglo2));
console.log(resultado_valencia(arreglo1, arreglo2));
console.log(resultado_gonzales(arreglo1, arreglo2));
console.log(resultado_(arreglo1, arreglo2));
