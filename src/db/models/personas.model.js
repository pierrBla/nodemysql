const { Model, DataTypes } = require('sequelize');

const PERSON_TABLE = 'persona';

class Persona extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Persona',
            timestamps: true
        }
    }
} 

const PersonaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name'
    },
    address:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'address'
    },
    phone:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'phone'
    } 
}
  
module.exports = { Persona, PersonaSchema };