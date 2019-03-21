'use strict'

const Express = require('express')
const Mongoose = require('mongoose')
const BodyParser = require('body-parser')
const config = require('./config.json')[env]


class App{

    constructor(){
        this.App
    }

    init(){
        this.app = Express()

        this.app.use(BodyParser.json())

        Mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.url}/${config.db.name}`, { useNewUrlParser: true})
    }

    
}