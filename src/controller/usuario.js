const { Op } = require('sequelize');
const conexao = require('../database');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/auth.json')


module.exports = {

    

    async list(request, response){
        
        const usuario = await Usuario.findAll();

        response.send(usuario)
    },

    async store(request,response){

        const {nome,email,hora_extra,salario_por_mes,salario_por_dia,time_inicio_expediente,time_final_expediente,cargo} = request.body;

        const roles = "user";

        let usuario = await Usuario.findOne({where:{[Op.or]:[{nome:nome},{email:email}]}})
        if(usuario){
            return response.status(400).send({erro:"Usuario já cadastrado"})
        }
            
        let senha = Math.random().toString(36).slice(-10);
        console.log('SENHA'+ senha);

        
       try {
            const secretPass = await bcrypt.hash(senha,10)
        usuario = await Usuario.create({nome,email,senha:secretPass,roles,hora_extra,salario_por_mes,salario_por_dia,time_inicio_expediente,time_final_expediente,cargo});
       } catch (error) {
           console.log(error)
       }

       const token = jwt.sign({usuarioId: usuario.id}, secret.secret)

        response.status(201).send({
            usuario:{
                usuario: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                senha : usuario.senha
            },
            token
        })
    },
    async delete(req, res){
        const usuario_id = req.usuarioId;

        const { id } = req.params;

        let usuario = await Usuario.findByPk( id );

        if(!usuario){
            return res.status(404).send({erro:"Usuario não encontrado"})
        }

        await usuario.destroy();

        res.status(204).send({usuario: {IdDoUsuarioExcluido: usuario_id}})
    },
    async update(req, res){
        const {nome,email,roles,senha,  } = req.params;
        const {data_nasc, telefone} = req.body;

        const {id} = req.params;

        let usuario = await Usuario.findByPk(id)

        usuario = await usuario.update({nome, email, roles, senha, telefone, data_nasc})

        res.status(201).send('atualizado')
    },
    async updateAdm(req,res){}
}