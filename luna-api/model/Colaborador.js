'use strict'

const Mongoose = require('mongoose')

class Colaborador extends Mongoose.Schema{

    constructor(){
        super({

            Nome:{
                type: String,
                required: true
            },

            CPF:{
                type: String
            },

            Lista_de_Clientes:{
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Cliente'
            }

        });
    
        Mongoose.model('Colaborador', this)

    }

}

module.exports = Colaborador