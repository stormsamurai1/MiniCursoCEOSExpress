const express = require('express')

const routes = express.Router()

const methods = require('./methods')

//Recebe os dados que estão no dataSet
routes.get('/user', methods.index)

//Cria dados no dataSet
routes.post('/user',methods.create)

//A partir de um nome, atualiza idade e cargo
routes.put('/user', methods.update)

routes.get('/teste', (req,res)=>{
    return res.send('It works!')
})

module.exports = routes