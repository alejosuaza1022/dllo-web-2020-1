<template>
  <v-container grid-list-xs>
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-select
          v-model="persona.tipo_documento"
          :items="tipo_documentos"
          :rules="[v => !!v || 'El tipo de documento es obligatorio']"
          label="Tipo de documento"
          required
        ></v-select>

        <v-text-field
          v-model="persona.documento"
          :counter="15"
          :rules="reglas"
          label="Documento"
          required
        ></v-text-field>

        <v-text-field
          v-model="persona.nombre"
          :rules="reglas"
          label="Nombre"
          required
        ></v-text-field>

        <v-text-field
          v-model="persona.celular"
          :counter="10"
          :rules="reglas"
          label="Celular"
          required
        ></v-text-field>

        <v-text-field
          v-model="persona.correo"
          :rules="reglaCorreo"
          label="Correo"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="guardarPersona"
          >Guardar</v-btn
        >
      </v-form>
    </template>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //  "tipo_documento": "CC",
      // "documento": "1000",
      // "nombre": "Santiago",
      // "celular": "219000000",
      // "correo": "saurrego@udem.edu.co"
      persona: {},
      reglas: [v => !!v || "El campo es obligatorio."],
      reglaCorreo: [
        v => !!v || "El campo es obligatorio.",
        v => /.+@.+\..+/.test(v) || "El correo no es correcto."
      ],
      tipo_documentos: ["CC", "CE"]
    };
  },
  methods: {
    guardarPersona() {
      if (this.$refs.form.validate()) {
        //Ejecutar el axios
        console.log(this.persona);
        let url = "http://localhost:3001/personas";
        this.$axios
          .post(url, this.persona)
          .then(respuesta => {
            console.log(respuesta);
          })
          .catch(error => {});
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
