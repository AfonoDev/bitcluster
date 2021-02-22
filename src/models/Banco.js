const { Model, DataTypes } = require("sequelize");

class Banco extends Model{
    static init(sequelize){
        super.init({
            agencia: DataTypes.STRING,
            tipo: DataTypes.STRING,
            conta: DataTypes.STRING,
            banco_nome: DataTypes.STRING,
            dados_pix: DataTypes.STRING,
            receber_via_pix: DataTypes.TINYINT,
            usuario_id: DataTypes.INTEGER
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