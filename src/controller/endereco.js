const Endereco = require('../models/Endereco')
const Usuario = require('../models/Usuario')

module.exports ={
    async list(req, res){

    },
    async store(req, res){

        const usuario_id = req.usuarioId;
        
        const {bairro, numero, complemento, cidade, cep, rua} = req.body;

    
        try {
            //const usuario = await Usuario.findByPk(usuario_id);

            let endereco = await Endereco.create({bairro, numero, complemento, cidade, cep, rua, id_user:usuario_id})  
            res.status(201).send(endereco)
        } catch (error) {
            console.log(error)
        }
    },
    async update(req, res){

    },
    async delete(req, res){

    }
}