import React from 'react';
import Product from './components/Product'
const App = () => {
  const [product, setProduct] = React.useState(null);
  React.useEffect(() => {
    const productLocal = window.localStorage.getItem('product')
    if(productLocal != null) {
      setProduct(productLocal)
    }
  }, [])

  React.useEffect(() => {
    if (product != null) {
      window.localStorage.setItem('product', product)
    }
  }, [product])
  
  function handleClick({target}) {
   setProduct(target.innerText)
  }


  return (
    <div>
      <h1>Preferência: {product}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Product product={product}></Product>
    </div>
  );
}

export default App;
