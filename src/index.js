require('./db/mongodb')
const express = require('express')
const carregarModels = require('./models/index')
const carregarRotas = require('./routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors('*'))

app.get('/pedido', (req, res) => {
    return res.status(200).send({teste: '123'})
})


carregarModels()
carregarRotas(app)

app.listen(3001, ()=> {
    console.log('Api rodando...')
})



