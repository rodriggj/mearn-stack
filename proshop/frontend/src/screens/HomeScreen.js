import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
// import products from '../products.js'
import Product from '../components/Product.js'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=> {
                return <>
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product key={product._id} product={product}/>
                </Col>
                </>
            })}
        </Row>
    </>
  )
}

export default HomeScreen