'use strict'

const Cliente = require('../model/Cliente')
const ClienteRoute = require('../controller/ClienteController')

class ClienteRoute{

    constructor(app){
        app.route('/Cliente')

        .get(ClienteController.buscarTodos)
        .post(ClienteController.adicionar)
        .put(ClienteController.editar)
        .delete(ClienteController.deletar)
        
    }


}