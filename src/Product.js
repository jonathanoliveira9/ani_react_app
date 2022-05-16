import React from 'react'

const Product = ({data}) => {
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
      <img src={data.fotos && data.fotos[0].src}></img>
    </div>
  )
}

export default Product