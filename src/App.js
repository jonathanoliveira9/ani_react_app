import React from 'react';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 'R$ 2000',
      colors: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      name: 'Notebook',
      price: 'R$ 3000',
      colors: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      name: 'Tablet',
      price: 'R$ 1500',
      colors: ['#365069', '#47c1c8', '#f95786']
    }
  ]
  return ( 
    <section>
      <div>
        {products.filter((product) => ( parseInt(product['price'].replace('R$ ', '')) > 1500 )).map(({id, name, price, colors}) => (
          <ul>
            <h1>{name}</h1>
            <p>Preço: R$ {price}</p>
            {colors.map((color) =>(
              <li key={color} style={{backgroundColor: color, color: 'white'}}>{color}</li>
            ))} 
          </ul>
        ))}
      </div>
    </section>
  );
}

export default App;
