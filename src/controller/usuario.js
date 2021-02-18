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
        const {} = request.body;
        
    }
}