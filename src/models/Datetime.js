const { Model, DataTypes } = require("sequelize");
const database = require('../config/database');
class Datetime extends Model{
    static init(sequelize){
        super.init({
            InicioTime: DataTypes.STRING,
            fimTime:DataTypes.STRING,
            horasExtrasSalvo:DataTypes.STRING,
            falta: DataTypes.STRING,
            pago: DataTypes.TINYINT,
            usuario_id : DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName: "datetime"
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey:"usuario_id"});
    }
}

module.exports = Datetime;