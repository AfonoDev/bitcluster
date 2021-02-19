const { op } = require('sequelize');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { listen } = require('../app');


module.exports = {
    async list(request, response){
        const usuario = await Usuario.findAll();
        response.send(usuario)
    },

    async store(request,response){
        const {nome,email} = request.body;

        let usuario = await Usuario.findOne({
            where:{
                [op.or]:[
                    {email:email}
                ]
            }
        })
        if(usuario){
            return response.status(400).send({erro:"Usuario já cadastrado"})
        }

        function gerarpass(){
            return Math.random().toString(36).slice(-10);
        }

        console.log(gerarpass);

        const secretPass = bcrypt.hash(gerarpass,50)
        usuario = await Usuario.create({
            nome,
            email,
            senha: secretPass
        });
        response.status(201).send({
            usuario:{
                usuario: usuario.idUser,
                nome: usuario.nome,
                email: usuario.email,
                senha : usuario.senha
            }
        })
    }
}