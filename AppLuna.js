'use strict'
const Express = require('express')
const Cors = require('cors')
const Mongoose = require('mongoose')
const env = process.NODE_ENV || 'development'
const BodyParser = require('body-parser')
const config = require('./config.json')[env]
const UsuarioModel = require('./model/Usuario')


class AppLuna{

    constructor(){
        this.App
    }

    init(){
        this.app = Express()

        this.app.use(BodyParser.json())

        this.app.use(Cors())

        Mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.url}/${config.db.name}`, { useNewUrlParser: true})

        //Chamando Entidades
        new UsuarioModel()

        //Chamando Rotas
        const UsuarioRoute = require('./route/UsuarioRoute')

        //Objeto que Definem Rotas
        new UsuarioRoute(this.app)

        //Define a rota e o handler da rota raiz (/) da API
        this.app.get('/', function(req, res){
        res.send('Teste API')
        })

        //Listener
        this.app.listen(config.port, function(){
        console.log('API ouvindo porta ' + config.port)
        })

    }

}

new AppLuna().init()