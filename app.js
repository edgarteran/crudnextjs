const express = require('express')
const app = express()
app.get('/',(req,res)=>
{
   console.log('peticion recibida') 
    res.status(200).send('hola mundo')
}),

app.listen(4000,()=> {
    console.log('servidor escuchando en el puerto 4000')
} )