/**
 * Modelo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreModelo:{
      type: 'string',
      required: true
    },

    tipoAuto: {
      type: 'string',
      required: true
    },

    fechaLanzamiento: {
      type: 'string',
      required: true
    },

    precio: {
      type: 'string',
      required: true
    },

    estado: {
      type: 'boolean',
      required: true
    },

    imagenModelo: {
      type: 'string',
      required: true
    },

    marcaIdFK:{
      model: 'Marca',
    }

  },

};

