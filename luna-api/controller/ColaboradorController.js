'use strict'

const Mongoose = require('mongoose')
const Colaborador = Mongoose.model('Colaborador')


class ColaboradorController{

    static async buscarTodos (req, res){
        try{
            res.json(await Colaborador.find({}))
        } catch(error){
            res.status(500).send(error)
            console.log(error)
        }

    }

    static async adicionar (req, res){
        try{
            let adicionarColaborador = await Colaborador.create(req.body)
            res.status(200).send(adicionarColaborador)
        } catch(error){
            res.status(500).send(error)
        }
    }

    static async editar (req, res){
        let editarColaborador = await Colaborador.findByIdAndUpdate(req.body._id, req.body)
        res.status(200).send(editarColaborador)
    } catch(error){
        res.status(500).send(error)
    }

    static async deletar (req, res){
        let deletarColaborador = await Colaborador.findByIdAndDelete(req.body)
        res.status(200).send(deletarColaborador)
    } catch(error){
        res.status(500).send(error)
    }

}

module.exports = ColaboradorController