'use strict'

const Mongoose = require('mongoose')
const Cliente = Mongoose.model('Cliente')


class clienteController{


    static async buscarTodos (req,res){
        try{
            res.json(await Cliente.find({}))
        }catch(error){
            res.status(500).send(error)
            console.log(error)
        }
    }

    static async adicionar (req,res){
        try{
            let AdicionarCliente = await Cliente.create(req.body)
            res.status(200).send(AdicionarCliente)
        }catch(error){
            res.status(500).send(error)
            console.log(error)
        }
    }

    static async editar (req,res){
        try{
            let EditarCliente = await Cliente.findByIdAndUpdate(req.body_id, req.body)
            res.status(200).send(EditarCliente)
        }catch(error){
            res.status(500).send(error)
        }
    }

    static async deletar (req,res){
        try{
            let ApagarCliente = await Cliente.findByIdAndDelete(req.body)
            res.status(200).send(ApagarCliente)
        }catch{
            res.status(500).send(error)
        }

    }
}

module.exports = clienteController