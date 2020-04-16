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
let validarPersona = (persona) => {
  if (!persona) {
    throw {
      ok: false,
      mensaje: "La información de la persona es obligatoria.",
    };
  }

  if (!persona.documento) {
    throw { ok: false, mensaje: "El documento de la persona es obligatorio." };
  }
  if (!persona.clave) {
    throw { ok: false, mensaje: "La clave de la persona es obligatoria." };
  }
};

/**
 * Guardar en base de datos una persona
 * @param {*} persona
 */
let guardarPersona = async (persona) => {
  let _servicio = new ServicioPg();
  let sql = `INSERT INTO public.personas(
              tipo_documento, documento, nombre, celular, correo, clave)
              VALUES (
                  '${persona.tipo_documento}',
                  '${persona.documento}',
                  '${persona.nombre}',
                  '${persona.celular}',
                  '${persona.correo}',
                  '${persona.clave}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

/**
 * Consultar personas
 * @param {*} filtros
 */
let consultarPersonas = async (filtros) => {
  let _servicio = new ServicioPg();
  // { tipo_documento: 'CC' }
  let _where = "";
  let llaves = Object.keys(filtros);
  llaves.forEach((x, i) => {
    _where += `${x}='${filtros[x]}'`;
    // _where += x + "=" + filtros[x];
    if (i < llaves.length - 1) _where += " AND ";
  });
  if (_where.length > 0) {
    _where = "WHERE " + _where;
  }

  let sql = `SELECT * FROM personas  ${_where}`;
  console.log(sql);

  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarPersona = async (id) => {
  let _servicio = new ServicioPg();
  let sql = `SELECT * FROM personas WHERE documento='${id}'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let modificarPersona = async (persona, id) => {
  if (persona.documento != id) {
    throw {
      ok: false,
      mensaje: "El documento de la persona no correspende al enviado.",
    };
  }
  let _servicio = new ServicioPg();
  let sql = `UPDATE public.personas
  SET tipo_documento='${persona.tipo_documento}',  nombre='${persona.nombre}', 
  celular='${persona.celular}', correo='${persona.correo}'
	WHERE documento='${persona.documento}';`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let eliminarPersona = async (id) => {
  let _servicio = new ServicioPg();
  let sql = `DELETE FROM personas WHERE documento='${id}'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = {
  validarPersona,
  guardarPersona,
  consultarPersonas,
  eliminarPersona,
  consultarPersona,
  modificarPersona,
};
