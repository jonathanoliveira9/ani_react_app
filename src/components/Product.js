import React from 'react'

const Product = ({ name, properties }) => {
  return (
    <div style={{border: '1px solid', margin: '1rem 0', padding: '1rem'}}>
      <p>{name}</p>
      <ul>
        {properties.map((property) => (
          <li>{property}</li>
        ))}
      </ul>
    </div>
  )
}

export default Product