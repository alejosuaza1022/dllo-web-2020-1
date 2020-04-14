console.log("Consumir un API");

axios
  .get("http://localhost:3001/personas/?tipo_documento=CC")
  .then((response) => {
    console.log("Respuesta del API");
    console.log(response);
    // let data = response.data;
    // let name = data.network.name;
    // document.getElementById("name").innerText = name;
  })
  .catch((error) => {
    console.log(error);
  });
