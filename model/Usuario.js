'use strict'

const Mongoose = require('mongoose');

class UsuarioModel extends Mongoose.Schema{

    constructor(){
        super({
            
            username:{
                type: String,
                required: true
            },
            senha:{
                type: String,
                required: true
            },
            tipo:{
                type: String,
                enum: ['Administrador', 'Entregador'],
                required: true
            }
 
    });

    
    Mongoose.model('UsuarioModel', this);
}

}

module.exports = UsuarioModel