/**
 *
 *
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

let main = async () => {
  let estudiante = await getEstudiante(1);
  let materia = await getMateria(estudiante);
  console.log(estudiante, materia);

  let estudiante2 = await getEstudiante(2);
  console.log(estudiante2);
};

main()
  .then(() => {
    console.log("Finaliza ejecución principal");
  })
  .catch(error => {
    console.log("Finaliza con error");
    console.log(error);
  });
