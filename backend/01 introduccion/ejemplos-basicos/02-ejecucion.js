function main() {
  metodo1(() => {
    console.log("Inicio mtdo1");
    metodo2(() => {
      console.log("Inicio mtdo2");
      metodo3();
      console.log("Fin mtdo2");
    });
    console.log("Fin mtdo1");
  });
  console.log("Termina el programa");
}

function metodo1(callback) {
  setTimeout(() => {
    console.log("Ejecución mtdo1");
    callback();
  }, 1000);
}

function metodo2(callback) {
  console.log("Ejecución mtdo2");
  callback();
}

function metodo3() {
  console.log("Ejecución mtdo3");
}

main();
