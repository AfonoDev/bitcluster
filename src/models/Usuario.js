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
        this.belongsTo(models.Endereco);
        this.belongsTo(models.Contrato);
        this.belongsTo(models.Banco);
        this.hasMany(models.DateTime,{foreignKey:"idUser"});
    }
}

module.exports = Usuario;