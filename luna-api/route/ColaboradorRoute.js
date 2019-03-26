'use strict'

const Colaborador = require('../model/Colaborador')
const ColaboradorController = require('../controller/ColaboradorController')

class ColaboradorRoute{

    constructor(app){

        app.route('/colaboradores')
        .get(ColaboradorController.buscarTodos)
        .post(ColaboradorController.adicionar)
        .put(ColaboradorController.editar)
        .delete(ColaboradorController.deletar)
            
    }

}

module.exports = ColaboradorRoute