const products = require('../products.json')

const getProducts = (req,res,)=> {
    console.log(req.query)
    if(req.query.price) {
        const price = products.filter(val => val.price <= +req.query.price
    )
    res.status(200).send(price)
}
    else{
        res.status(200).send(products)
    }
}
const getProductsById = (req,res,)=> {
    const item = products.find(val => val.id === parseInt(req.params.id))
    if(!item) {
        return res.status(500).send("item not in list")
    }
    res.status(200).send(item)
}
const getProductsByPrice =  (req,res,) => {
    const price = products.filter(val => val.price = parseInt(req.query.price)
    )
    res.status(200).send(price)
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsByPrice
}