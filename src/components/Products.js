import React from 'react'
import Title from './Title'
import Product from './Product';
const Products = () => {
  const products = [
    { name: 'Notebook', properties: ['16gb ram', '512gb'] },
    { name: 'Smartphone', properties: ['2gb ran', '128gb'] }
  ];

  return (
    <section>
      <Title color="green" text="Products"></Title>
      {products.map((product) => (
        <Product key={product.name} {...product}></Product>
      ))}    
    </section>
  )
}

export default Products