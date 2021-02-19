

const {Model, DataTypes} = require('sequelize');
const database = require('../config/database');

class Usuario  extends Model{
    static init(sequelize){
        super.init(   
            {
                nome: DataTypes.STRING,
                senha: DataTypes.STRING,
                email: DataTypes.STRING,
                data_nasc: DataTypes.STRING,
                telefone: DataTypes.STRING,
                roles: DataTypes.STRING
            },
            {
                sequelize,
            }
        );
    }
    static associate(models){
        this.hasMany(models.Datetime, {foreignKey: "created_usuario_id"})
    }
}
module.exports = Usuario;