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
            usuario_id: DataTypes.INTEGER
        },
        {
            timestamps: false,
            sequelize,
            tableName: "contrato"
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Usuario);
    }
}

module.exports = Contrato;