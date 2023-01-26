const express = require('express')
require ('dotenv').config
const app = express()
app.get('/',(req,res)=>
{
   console.log('peticion recibida') 
    res.status(200).send('hola mundo')
})

const PORT = process.env.PORT 

app.listen(PORT,()=> {
    console.log('servidor escuchando en el puerto ${PORT}')
} )