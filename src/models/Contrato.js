const { Model, DataTypes } = require("sequelize");

class Contrato extends Model{
    static init(sequelize){
        super.init({
            horaExtra : DataTypes.TINYINT,
            salarioPorMes :  DataTypes.STRING,
            salarioPorDia :  DataTypes.STRING,
            timeInicioExpediente :  DataTypes.STRING,
            timeFinalExpediente :  DataTypes.STRING,
            cargo :  DataTypes.STRING,
        },
        {
            timestamps: false,
            sequelize,
            tableName: "tblContrato"
        }
        );
    }
    static associate(models){
        this.hasMany(models.Usuario,  {foreignKey: "idContrato" })
    }
}

module.exports = Contrato;