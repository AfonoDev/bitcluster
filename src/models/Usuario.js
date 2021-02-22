

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
                roles: DataTypes.STRING,
                hora_extra: DataTypes.TINYINT,
                salario_por_mes: DataTypes.STRING,
                salario_por_dia: DataTypes.STRING,
                time_inicio_expediente: DataTypes.STRING,
                time_final_expediente: DataTypes.STRING,
                cargo: DataTypes.STRING
            },
            {
                sequelize,
                tableName: "usuarios"
            }
        );
    }
    static associate(models){
        this.hasMany(models.Datetime, {foreignKey: "usuario_id"})
        this.hasOne(models.Endereco)
    }
}
module.exports = Usuario;