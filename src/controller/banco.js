const {Op} = require("sequelize")
const Banco = require('../models/Banco')
const Usuario = require('../models/Usuario')

module.exports ={
    async store(req, res){
        const {agencia, tipo, conta, banco_nome, dados_pix, receber_via_pix} = req.body;
        console.log(receber_via_pix)
        const usuario_id = req.usuarioId;
        
        try {
           await Banco.create({agencia, tipo, conta, banco_nome, dados_pix, receber_via_pix, usuario_id})  
            
            res.status(201).send('salvo os dados do banco')
        } catch (error) {
            console.log(error)
        }
    },
    async update(req, res){
        const {agencia, tipo, conta, banco_nome, dados_pix, receber_via_pix} = req.body;
        const {id, usuario_id} = req.params;
        let banco = await Banco.findByPk(id)
        await banco.update({agencia, tipo, conta, banco_nome, dados_pix, receber_via_pix, usuario_id})
        res.status(201).send('atualizado')
    }
}