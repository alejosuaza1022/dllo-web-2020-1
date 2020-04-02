/**
 * CONTROLADOR DE PERSONAS
 *
 */

//Importar servicio de postgres
const ServicioPg = require("../services/postgres");

/**
 * Validar la información de la persona
 * @param {*} persona Json de la persona
 */
let validarPersona = persona => {
  if (!persona) {
    throw {
      ok: false,
      mensaje: "La información de la persona es obligatoria."
    };
  }

  if (!persona.documento) {
    throw { ok: false, mensaje: "El documento de la persona es obligatorio." };
  }
};

/**
 * Guardar en base de datos una persona
 * @param {*} persona
 */
let guardarPersona = async persona => {
  let _servicio = new ServicioPg();
  let sql = `INSERT INTO public.personas(
              tipo_documento, documento, nombre, celular, correo)
              VALUES (
                  '${persona.tipo_documento}',
                  '${persona.documento}',
                  '${persona.nombre}',
                  '${persona.celular}',
                  '${persona.correo}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarPersonas = async () => {
  let _servicio = new ServicioPg();
  let sql = `SELECT * FROM personas`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = { validarPersona, guardarPersona, consultarPersonas };
