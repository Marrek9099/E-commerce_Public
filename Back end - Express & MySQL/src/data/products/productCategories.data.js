const db = require('../db')


async function getProductCategories() {

    let sql = 'SELECT * FROM product_category'
    
    const result = await db.query(sql)

    return result[0]
}


module.exports = {
    getProductCategories
}

