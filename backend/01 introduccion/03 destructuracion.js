/**
 *
 * Destructuración
 * Funciones dentro de un json
 */

let estudiante = {
  nombre: "Juanito",
  apellido: "Perez",
  edad: 15,
  informacion() {
    return `Nombre completo: ${this.nombre} ${this.apellido} - Edad: ${this.edad} `;
  }
};

// -----------------------------  Opción 1 - Tradicional -------------
let nombre1 = estudiante.nombre;
let apellido1 = estudiante.apellido;
console.log("Opción 1");
console.log(nombre1, apellido1);
console.log();

//---------------------- Opción 2 destructuración -------------------
let { nombre, apellido } = estudiante;
console.log("Opción 2");
console.log(nombre, apellido);
console.log();

//-------------------- Opción 3 destructuración - guardar con otro nombre -------------
let { nombre: nombre3, apellido: apellido3 } = estudiante;
console.log("Opción 3");
console.log(nombre3, apellido3);
console.log();

//----------------- Opción 4 - función -----------
let info1 = estudiante.informacion(12);
console.log(info1);
