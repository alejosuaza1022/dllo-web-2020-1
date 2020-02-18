<template>
  <div>
    <h1>Gestión de estudiantes</h1>
    {{mensaje}}
    <br />
    <b-form action="javascript:void(0)" onsubmit="crearEstudiante()">
      <b-form-group
        label="Identificación"
        label-for="id"
       >
        <b-form-input
          class="form-control"
          type="number"
        v-model="form.email"

          placeholder="Ingrese su identificación"
          id="id"
        />
      </b-form-group>
      <b-form-group>
        <label for="nombre">Nombre</label>
        <b-form-input class="form-control" type="text" placeholder="Ingrese su nombre" id="nombre" />
      </b-form-group>
      <b-form-group>
        <label for="apellido">Apellido</label>
        <b-form-input
          class="form-control"
          type="text"
          placeholder="Ingrese su apellido"
          id="apellido"
        />
      </b-form-group>
      <b-form-group>
        <label for="edad">Edad</label>
        <b-form-input class="form-control" type="number" placeholder="Ingrese su edad" id="edad" />
      </b-form-group>
      <b-form-group>
        <label for="correo">Correo</label>
        <b-form-input
          class="form-control"
          type="email"
          name
          id="correo"
          placeholder="Ingrese su correo"
        />
      </b-form-group>
      <b-form-group>
        <label for="carrera">Carrera</label>
        <select class="form-control" name="carreras" id="carrera">
          <option value="000" disabled>Seleccione una carrera</option>
          <option value="001">Ingeniería de sistemas</option>
          <option value="002">Derecho</option>
          <option value="003">Comunicación</option>
        </select>
      </b-form-group>
      <b-form-input
        id="btnCrearEstudiante"
        class="btn btn-primary"
        type="submit"
        value="Crear estudiante"
      />

      <button
        type="button"
        onclick="actualizarEstudiante()"
        id="btnEditarEstudiante"
        class="btn btn-primary"
      >Actualizar estudiante</button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "Hola estudiantes",
      form:{}
    };
  }
};
</script>

<style>

</style>