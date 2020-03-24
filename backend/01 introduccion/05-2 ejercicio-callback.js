let getUsuario = (id, callback) => {
  if (id === 123) {
    let usuario = {
      nombre: "Santiago",
      apellido: "urrego",
      correo: "saurrego@udem.edu.co",
      id: "123"
    };
    callback(null, usuario);
  } else {
    callback("El usuario no existe", null);
  }
};

getUsuario(123, (error, respuesta) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Consulta del usuario");
  console.log(respuesta);
});

getUsuario(1223, (error, respuesta) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Consulta del usuario");
  console.log(respuesta);
});
