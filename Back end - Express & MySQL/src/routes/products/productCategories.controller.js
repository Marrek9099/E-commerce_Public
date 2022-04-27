const {getProductCategories} = require('../../data/products/productCategories.data')


async function httpGetProductCategories(req, res) {

    try {
        return res.status(200).json(
            await getProductCategories()
        )
    }
    catch (err) {
        return res.status(400).json({error: 'wrong request'})
    }
    
}



module.exports = {
    httpGetProductCategories
}