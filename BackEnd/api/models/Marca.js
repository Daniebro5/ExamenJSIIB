/**
 * Marca.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },

    ubicacion: {
      type: 'string',
      required: true
    },

    fechaCreacion: {
      type: 'string',
      required: true
    },

    imagenDesarrolladora: {
      type: 'string',
      required: true
    },

    modelos: {
      collection: 'Modelo',
      via: 'marcaIdFK'
    }

  },

};

