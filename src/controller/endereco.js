const Endereco = require('../models/Endereco')
const Usuario = require('../models/Usuario')

module.exports ={
    async store(req, res){

        const usuario_id = req.usuarioId;
        
        const {bairro, numero, complemento, cidade, cep, rua} = req.body;

    
        try {
            let endereco = await Endereco.create({bairro, numero, complemento, cidade, cep, rua, usuario_id})  
            res.status(201).send(endereco)
        } catch (error) {
            console.log(error)
        }
    },
    async update(req, res){
        const {bairro, numero, complemento, cidade, cep, rua, } = req.body;
        const {id, usuario_id} = req.params;
        let endereco = await Endereco.findByPk(id)
        await endereco.update({bairro, numero, complemento, cidade, cep, rua, usuario_id});
        res.status(201).send('Atualizado')
    },
}