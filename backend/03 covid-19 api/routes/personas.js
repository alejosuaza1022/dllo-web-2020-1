const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/personas");

/**
 * Obtener todas las personas
 */
router.get("/personas", (req, res) => {
  _controlador
    .consultarPersonas()
    .then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "Personas consultadas" });
    })
    .catch(error => {
      res.send(error);
    });
});

/**
 * Guarda una persona
 */
router.post("/personas", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let info_persona = req.body;

    // Valida la información, si hay un error se envia al catch
    _controlador.validarPersona(info_persona);

    // Guardar la persona en base de datos
    _controlador
      .guardarPersona(info_persona)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "Persona guardada", info: info_persona });
      })
      .catch(error => {
        res.send(error);
      });

    // Responder
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
