import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import products  from '../maindash'

function HomeScreen() {
  return (
    <div>
        <h1>Main Dashboard:</h1>
        <Row>
          {products.map(product =>(
            <Col key={product._id} sm={12} md={6} lg={6} xl={6}>
              <Product n={product}/>
            </Col>
          ))}
        </Row>
          </div>
  )
}

export default HomeScreen
