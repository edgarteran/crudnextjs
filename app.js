const express = require('express')
const mongoose =require('mongoose')
const path =require('path')
require('dotenv').config()

const app = express()

mongoose
.connect(
`mongodb+srv://edgarteran:${process.env.MONGO_DB_PASS}@develoment.yimkukm.mongodb.net/crudnextjs?retryWrites=true&w=majority`)
.then((result) => console.log('conexion exitosa a la base de datos')).catch((err) => console.log(err))

const productSchema = mongoose.Schema(
{
name: {type: String,required : true},
price:Number,
    
},
{timestamps: true}
)

const Product = mongoose.model('Product',productSchema)

app.use(express.json())


app.post('/api/v1/products',(req, res) => {
    
const newProduct = new Product(req.body)
newProduct.save() 
.then ((result)=>{
res.status(201).json({ok: true})    
})
.catch((err)=> console.log(err))  
})


app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
