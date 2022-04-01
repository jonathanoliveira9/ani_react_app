import React from 'react'

const Product = ({datas }) => {
  return (
    <div>
      <h1>{datas.nome}</h1>
      <p>R$ {datas.preco}</p>
      <img src={datas.fotos[0].src} alt={datas.fotos[0].titulo}></img>
    </div>
  )
}

export default Product