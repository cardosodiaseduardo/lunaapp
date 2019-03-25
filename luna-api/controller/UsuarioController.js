'use strict'
const Mongoose = require('mongoose')
const Usuario =  Mongoose.model('Usuario')


class UsuarioController{

    static async buscarTodos(req, res){
        try{
            res.json(await Usuario.find({}))
        }catch(error){
            res.status(500).send("Erro ao buscar usuarios!")
        }
    }

    static async autenticar(req,res){
        try{
            res.json(await Usuario.find(req.body))
        }catch(error){
            console.log(error)
            res.status(500).send("Erro de autenticação")
        }
    }
    static async adicionar(req,res){
        try{
            console.log("Usuario: " + JSON.stringify(req.body))
            let resultado = await Usuario.create(req.body)
            console.log("Resultado: " +resultado)
            res.status(200).json(resultado)
        }catch (error){
            console.log("Erro ao salvar Usuario" + error)
            res.status(500).send("Erro ao Adicionar Usuario")
        }
    }

    static async deletar(req,res){
        try{
            idDeletar = req.body._id
            let resultado = await Usuario.findByIdAndDelete(req.body)
            res.status(200),json(resultado)
        }catch{
            res.status(500).send("Erro ao Deletar Usuario")

        }
    }

    static async editar(req, res){
        try{
            let resultado = (await Usuario.findByIdAndUpdate(req.body._id, req.body))
            res.status(200).send(resultado)
        } catch(error){
            res.status(500).send("Erro ao editar convidado")
        }
    }
}

module.exports = UsuarioController