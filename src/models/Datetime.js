const { Model, DataTypes } = require("sequelize");

class Datetime extends Model{
    static init(sequelize){
        super.init({
            InicioTime: DataTypes.STRING,
            fimTime:DataTypes.STRING,
            horasExtrasSalvo:DataTypes.STRING,
            falta: DataTypes.STRING,
            pago: DataTypes.TINYINT,
            idUser:  DataTypes.INTEGER,
        },
        {
            timestamps: false,
            sequelize,
            tableName: "tblDateTime"
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Usuario);
    }
}

module.exports = Datetime;