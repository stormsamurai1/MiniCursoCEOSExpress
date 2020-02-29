const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(routes)

app.listen(3333, ()=>{
    console.log('It Works!')
})