const Usuario = require('./../model/Usuario')
const UsuarioController = require('./../controller/UsuarioController')

class UsuarioRoute{
    constructor(app){
        app.route('/Usuario')
            .get(UsuarioController.buscarTodos)
            .post(UsuarioController.adicionar)
            .delete(UsuarioController.deletar)
            .put(UsuarioController.editar)

        app.route('/autenticar')
            .post(UsuarioController.autenticar)
    }

}

module.exports = UsuarioRoute;