

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
                tableName: "usuarios"
            }
        );
    }
    static associate(models){
        this.hasMany(models.Datetime, {foreignKey: "id_user"})
        this.hasOne(models.Endereco)
    }
}
module.exports = Usuario;