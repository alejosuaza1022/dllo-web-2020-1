let estudiantes = [
  { id: 1, nombre: "Juan", materia: 1 },
  { id: 2, nombre: "Esteban" },
  { id: 3, nombre: "Maria", materia: 1 },
  { id: 4, nombre: "Sandra", materia: 2 },
  { id: 5, nombre: "Carolina" }
];

let materias = [
  { id: 1, nombre: "BD" },
  { id: 2, nombre: "WEB" }
];

/**
 *
 * Consultar un usuario y retornarlo en el callback.
 * En el callback de la consulta del usuario llamar la consulta de la materia a la que pertenece .
 */

let getUsuario = (id, callback) => {
  let usuario = {};
  callback(null, usuario);
  callback("El usuario no existe", null);
};

let getMateria = (id, callback) => {
  let materia = {};
  callback(null, materia);
  callback("El estudiante no tiene materias", null);
};

// Imprimir el estudiante y el nombre de la materia
getUsuario(123, (error, respuesta) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Consulta del usuario");
  console.log(respuesta);
  let id_materia = respuesta.materia;

  //.......
});
