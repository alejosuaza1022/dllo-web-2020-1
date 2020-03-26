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

// Implementaciones
let getEstudiante1 = (id, callback) => {
  let usuario = estudiantes.find(est => est.id === id);
  if (usuario) {
    callback(null, usuario);
  } else {
    callback("El estudiante no existe", null);
  }
};

let getMateria1 = (estudiante, callback) => {
  let materia = materias.find(materia => estudiante.materia == materia.id);
  if (materia) {
    callback(null, materia);
  } else {
    callback("La materia no existe en el estudiante", null);
  }
};

//Ejecución
getEstudiante1(1, (error, estudiante) => {
  if (error) {
    console.log("Error", error);
    return;
  }
  getMateria1(estudiante, (error, materia) => {
    if (error) {
      console.log("Error", error);
      return;
    }
    console.log("El estudiante ", estudiante, "materia ", materia);
  });
});
