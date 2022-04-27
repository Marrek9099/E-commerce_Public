const db = require('../db')

async function getAllProducts(page){

    const offset = calculateOffset(page)

    const filterCondition = ``

    const totalPages = await getTotalPages(filterCondition)

    const sql = `SELECT * FROM product ORDER BY name LIMIT 6 OFFSET ${offset}`

    const sqlResult = await db.query(sql)

    const products = sqlResult[0]

    const resultData = {
        totalPages,
        products
    }

   return resultData
}



async function getProductsByCategoryId(id, page){

    const offset = calculateOffset(page)

    const filterCondition = `WHERE category_id = ${Number(id)}`

    const totalPages = await getTotalPages(filterCondition)

    const sql = `SELECT * FROM product ${filterCondition} LIMIT 6 OFFSET ${offset}`

    const sqlResult = await db.query(sql)

    const products = sqlResult[0]

    const resultData = {
        totalPages,
        products
    }

   return resultData
}  

async function getProductsByName(searchName, page){

    const offset = calculateOffset(page)

    const filterCondition = `WHERE name LIKE '%${searchName}%'`

    const totalPages = await getTotalPages(filterCondition)

    const sql = `SELECT * FROM product ${filterCondition} LIMIT 6 OFFSET ${offset}`

    const sqlResult = await db.query(sql)

    const products = sqlResult[0]

    const resultData = {
        totalPages,
        products
    }

   return resultData
}

async function getProductBySku(sku){

    const sql = `SELECT * FROM product WHERE sku = '${sku}'`

    const sqlResult = await db.query(sql)
    
    const product = sqlResult[0][0]

    return product
}

async function getTotalPages(filterCondition){

    const sql = `SELECT COUNT(*) FROM product ${filterCondition}`

    const sqlResult = await db.query(sql)

    const totalProducts = sqlResult[0][0]['COUNT(*)']
  

    let totalPages 

    if(totalProducts % 6 !== 0) {
        totalPages = Math.floor(totalProducts / 6) + 1
    }
    else {
        totalPages = totalProducts / 6
    }

    return  totalPages

}

const calculateOffset = page => page * 6


module.exports = {
    getAllProducts,
    getProductsByCategoryId,
    getProductsByName,
    getProductBySku
}