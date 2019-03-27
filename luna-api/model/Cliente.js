'use strict'

const Mongoose = require('mongoose')

class Cliente extends Mongoose.Schema{
    
    constructor(){
        super({

            CPF:{
                type: String,
                required:true
            },
            Nome:{
                type: String,
                required:true
            },
            Cidade:{
                type: String,
            },
            Endereco:{
                type: String
            },
            Telefone:{
                type: String
            },
            Entregador:{
                type:Mongoose.Schema.Types.ObjectId,
                ref:Colaborador
            }
        })

        Mongoose.model('Cliente' , this)
    }
}

module.exports = Cliente