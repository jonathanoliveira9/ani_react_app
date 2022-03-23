import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';

const App = () => {
  const { pathname } = window.location;
  let Page = Home;
  if (pathname === '/products') {
    Page = Products;
  } else {
    Page = Home;
  }

  return (
    <div>
      <Header />
      <Page />
    </div>
  );
}

export default App;
