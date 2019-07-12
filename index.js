const getProducts = require('./getProducts')
const express = require('express')
const app = express()
const PORT = 4001



app.get('/api/products', getProducts.getProducts)
app.get('/api/products/:id',  getProducts.getProductsById)



app.listen(PORT, ( )=> {console.log(`listening on ${PORT}`)})
