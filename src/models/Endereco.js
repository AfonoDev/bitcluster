const { Model, DataTypes } = require("sequelize");

class Endereco extends Model{
    static init(sequelize){
        super.init({
            bairro:DataTypes.STRING,
            numero:DataTypes.STRING,
            complemento:DataTypes.STRING,
            cidade:DataTypes.STRING,
            cep:DataTypes.STRING,
            rua:DataTypes.STRING,
            usuario_id: DataTypes.INTEGER
        },
        {
            timestamps: false,
            sequelize,
            tableName: "endereco"
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey:"usuario_id"});
    }
}

module.exports = Endereco;