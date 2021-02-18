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
        },
        {
            timestamps: false,
            sequelize,
            tableName: "tblEndereco"
        }
        );
    }
    static associate(models){
        this.hasMany(models.Usuario,  {foreignKey: "idEndereco" })
    }
}

module.exports = Endereco;