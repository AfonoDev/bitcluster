const {Model, DataTypes} = require('sequelize');

class Usuario extends Model {
    static init (sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
                email: DataTypes.STRING,
                dataNasc: DataTypes.STRING,
                telefone: DataTypes.STRING,
                idEndereco: DataTypes.INTEGER,
                idContrato: DataTypes.INTEGER,
                idDadosBanco: DataTypes.INTEGER,
            },
            {
                sequelize,
                tableName:"tblUser"
            }
        )
    }
    static associate(models){
        this.hasMany(models.DateTime,{foreignKey:"idUser"});
        this.hasMany(models.Endereco,{foreignKey:"idUser"});
        this.hasMany(models.Contrato,{foreignKey:"idUser"});
        this.hasMany(models.Banco,{foreignKey:"idUser"});
    }
}

module.exports = Usuario;