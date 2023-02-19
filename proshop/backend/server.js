import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import cors from 'cors'

const app = express()

app.use(cors())
dotenv.config()
connectDB()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello from the backend API...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode and running on port ${PORT}`)
})