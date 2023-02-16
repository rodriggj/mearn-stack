const express = require('express') 
const app = express()
const products = require('./data/products')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello from the backend API...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})