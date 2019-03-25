'use strict'

const Mongoose = require('mongoose');

class Usuario extends Mongoose.Schema{

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
                enum: ['ADMIN', 'COLABORADOR'],
                required: true
            }
 
    });

    
    Mongoose.model('Usuario', this);
}

}

module.exports = Usuario