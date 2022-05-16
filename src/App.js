import React from 'react';
import Product from './Product';

const App = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  async function loadData (type) {
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${type}`)
    setData(response)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }
  return (
    <div>
      <button style={{ margin: '2px'}} onClick={() => loadData('tablet')}>tablet</button>
      <button style={{ margin: '2px'}} onClick={() => loadData('smartphone')}>smartphone</button>
      <button style={{ margin: '2px'}} onClick={() => loadData('notebook')}>notebook</button>
      {loading && <p>Carregando</p>}
      {data && <Product data={data}/>}
     
    </div>
  );
}

export default App;
