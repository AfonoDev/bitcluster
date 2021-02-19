const { Model, DataTypes } = require("sequelize");

class Banco extends Model{
    static init(sequelize){
        super.init({
            agencia: DataTypes.STRING,
            tipo: DataTypes.STRING,
            conta: DataTypes.STRING,
            banco: DataTypes.STRING,
            dadosPix: DataTypes.STRING,
            receberViaPix: DataTypes.TINYINT,
        },
        {
            timestamps: false,
            sequelize,
            tableName: "tblDadosBancario"
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Usuario);
    }
}

module.exports = Banco;