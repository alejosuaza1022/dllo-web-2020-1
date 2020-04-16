// Importar express
const express = require("express");
const cors = require("cors");

// Inicializar la librería
const app = express();
app.use(express.json());
app.use(cors());
// Endpoint
/**
 * URI's  disponibles en el API
 */

app.get("/", (req, res) => {
  res.send("Bienvenido a la API para familias del covid-19");
});

// VERSION del api
const vs = "/api/v1/";

// IMPORTAR las rutas con los endpoints especificos
const rutas_autenticacion = require("./routes/autenticacion");
app.use(vs, rutas_autenticacion);

const rutas_personas = require("./routes/personas");
app.use(vs, rutas_personas);

const rutas_viviendas = require("./routes/viviendas");
app.use(vs, rutas_viviendas);

app.use("/", (req, res) => {
  res.status(404).send({
    ok: false,
    mensaje: "El recurso que busca no existe.",
  });
});

// Puerto
const port = 3001;
// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});
