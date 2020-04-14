const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/personas");

/**
 * Obtener todas las personas
 */
router.get("/personas", (req, res) => {
  let filtros = req.query;

  _controlador
    .consultarPersonas(filtros)
    .then((respuestaDB) => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "Personas consultadas" });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * Consultar una personas por documento
 */
router.get("/personas/:id", (req, res) => {
  let id = req.params.id;
  _controlador
    .consultarPersona(id)
    .then((respuestaDB) => {
      let registros = respuestaDB.rows;
      let mensaje =
        registros.length > 0 ? "Persona consultada." : "Sin registro.";
      res.send({ ok: true, info: registros, mensaje });
    })
    .catch((error) => {
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
      .then((respuestaDB) => {
        res.send({ ok: true, mensaje: "Persona guardada", info: info_persona });
      })
      .catch((error) => {
        res.send(error);
      });

    // Responder
  } catch (error) {
    res.send(error);
  }
});

/**
 * Modificar una persona
 */
router.put("/personas/:id", (req, res) => {
  // Capturar el parámetro de la ruta
  let id = req.params.id;

  let persona = req.body;
  _controlador
    .modificarPersona(persona, id)
    .then((respuestaDB) => {
      res.send({ ok: true, mensaje: "Persona modificada", info: respuestaDB });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * Eliminar una persona
 */
router.delete("/personas/:id", (req, res) => {
  let id = req.params.id;
  _controlador
    .eliminarPersona(id)
    .then((respuestaDB) => {
      res.send({ ok: true, info: {}, mensaje: "Persona elimina" });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
