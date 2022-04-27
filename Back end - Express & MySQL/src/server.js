const path = require('path')

const express = require('express')

const app = express()


const PORT = process.env.PORT || 8000

const productsCategoriesRouter = require('./routes/products/productCategories.router')
const productsRouter = require('./routes/products/products.router')


app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/productCategories', productsCategoriesRouter)
app.use('/products', productsRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))

