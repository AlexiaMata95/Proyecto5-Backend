const mongoose = require('mongoose')
const url = `mongodb+srv://${process.env.mongo_user}:${process.env.mongo_pass}
@cluster1.${process.env.mongo_id}.mongodb.net/${process.env.mongo_colection}?retryWrites=true&w=majority`

mongoose.connect(url)
.then (()=>{
    console.log('----------------------')
    console.log('Base de datos conectada')
    console.log('----------------------')
})
.catch((error) =>{
    console.error(error)
})

module.exports = mongoose


