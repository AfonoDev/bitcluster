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
            id_user: DataTypes.INTEGER
        },
        {
            timestamps: false,
            sequelize,
            tableName: "bandodedados"
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Usuario);
    }
}

module.exports = Banco;