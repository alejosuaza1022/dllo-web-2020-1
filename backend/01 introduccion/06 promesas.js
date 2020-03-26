/**
 *
 * PROMESAS
 *
 * - Pendiente
 * - Aceptación [ok]
 * - Rechazo [ok]
 *
 */

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

// Implementación
let getEstudiante = id => {
  return new Promise((resolve, reject) => {
    let usuario = estudiantes.find(est => est.id === id);
    if (usuario) {
      setTimeout(() => {
        resolve(usuario);
      }, 1000);
    } else {
      reject("El estudiante no existe");
    }
  });
};

let getMateria = estudiante => {
  return new Promise((resolve, reject) => {
    let materia = materias.find(materia => estudiante.materia == materia.id);
    if (materia) {
      resolve(materia);
    } else {
      reject("La materia no existe en el estudiante");
    }
  });
};

// Ejecución 1
console.log("Ejecución est 1");
getEstudiante(1)
  .then(usuario => {
    console.log("Usuario consultado:", usuario);
    return getMateria(usuario);
  })
  .catch(error => {
    console.log("Error consultando:", error);
  })
  .then(materia => {
    console.log(" La materia es:", materia);
  })
  .catch(error => {
    console.log("Error consultando la materia:", error);
  })
  .then(() => {
    console.log("Finaliza ejecución");
  });

console.log("Ejecución est 2");
getEstudiante(2)
  .then(usuario => {
    console.log("Usuario consultado:", usuario);
    return getMateria(usuario);
  })
  .catch(error => {
    console.log("Error consultando:", error);
  })
  .then(materia => {
    console.log(" La materia es:", materia);
  })
  .catch(error => {
    console.log("Error consultando la materia:", error);
  })
  .then(() => {
    console.log("Finaliza ejecución");
  });
