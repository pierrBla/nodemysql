const { Persona, PersonaSchema } = require('./personas.model');

function setupModels(sequelize) {
    Persona.init(PersonaSchema, Persona.config(sequelize));
}

module.exports = setupModels;