import React from 'react';

const luana = {
  client: 'Luana',
  year: 27,
  buy: [
    { name: 'Notebook', price: 'R$ 2500' },
    { name: 'Fridge', price: 'R$ 3000' },
    { name: 'Smartphne', price: 'R$ 1500' },
  ],
  active: true,
}

const mario = {
  client: 'Mario',
  year: 31,
  buy: [
    { name: 'Notebook', price: 'R$ 2500' },
    { name: 'Fridge', price: 'R$ 3000' },
    { name: 'Smartphne', price: 'R$ 1500' },
    { name: 'Guitar', price: 'R$ 3500' },
  ],
  active: false,
}
const App = () => {
  const dados = luana;
  const expend = dados.buy.map((a) =>
    parseInt(a.price.replace('R$ ', ''))
  ).reduce((a, b) => a + b)
 return (
   <div>
     <p>Nome: {dados.client}</p>
     <p>Idade: {dados.year}</p>
     <p>Situação: <span style={{ color: dados.active ? 'green' : 'red' }}>{dados.active? 'Ativa' : 'Inativa'}</span></p>
     <p>Total gasto: {expend}</p>
     <p style={{display: expend > 10000 ? 'true' :'none'}}>Você está gastando muito.</p>
   </div>

 );
}

export default App;
