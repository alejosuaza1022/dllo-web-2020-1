// Importar express
const express = require("express");

// Inicializar la librería
const app = express();
app.use(express.json());

// Endpoint
/**
 * URI's  disponibles en el API
 */
app.get("/", (req, res) => {
  res.send("Bienvenido a la API para familias del covid-19");
});
// IMPORTAR las rutas con los endpoints especificos
const rutas_personas = require("./routes/personas");
app.use(rutas_personas);

const rutas_viviendas = require("./routes/viviendas");
app.use(rutas_viviendas);

// Puerto
const port = 3000;
// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});
