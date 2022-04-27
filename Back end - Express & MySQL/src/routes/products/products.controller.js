const {getAllProducts,
       getProductsByCategoryId , 
       getProductsByName,
       getProductBySku} 
       = require('../../data/products/products.data')


async function httpGetAllProducts(req, res){
    
    const pageNumber = req.query.page
    
    try {
        const products = await getAllProducts(pageNumber)
    
        return res.status(200).json(products)
    }
    catch(err) {
        return res.status(500).json('Server error')
    }
        
}


async function httpGetProductsByCategoryId(req, res){
    
    const categoryId = req.query.id
    const pageNumber = req.query.page

    try {
        const products = await getProductsByCategoryId(categoryId,pageNumber)

        return res.status(200).json(products)
    }
    catch(err) {
        return res.status(500).json('Server error')
    }
    
}

async function httpGetProductsByName(req, res){
    
    const searchName = req.query.name
    const pageNumber = req.query.page

    try {
        const products = await getProductsByName(searchName,pageNumber)

        return res.status(200).json(products)
    }
    catch(err) {
        return res.status(500).json('Server error')
    }
    
}

async function httpGetProductBySku(req, res){

    const sku = req.params.sku

    
    try {
        const product = await getProductBySku(sku)
    
        return res.status(200).json(product)
    }
    catch(err) {
        return res.status(500).json('Server error')
    }
        
}

module.exports = { 
    httpGetAllProducts,
    httpGetProductsByCategoryId,
    httpGetProductsByName,
    httpGetProductBySku
}