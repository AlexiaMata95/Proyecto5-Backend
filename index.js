const express = require('express');
const app = express()
require('dotenv').config()
const cors = require('cors')

require('./db/mongo')
const apiRouter = require('./apis')

app.use(cors())
app.use(express.json())


app.use('/api/v1', apiRouter)
app.get('/',( req, res )=>{
    res.send('Servidor vivo')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log('----------------------')
    console.log('Sevidor conectado en el puerto ' + PORT)
    console.log('----------------------')
})
