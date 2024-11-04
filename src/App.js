import './App.css';
import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const products = [
    { id: 1, name: 'Телефон', price: 11500 },
    { id: 2, name: 'Навушники', price: 1500 },
    { id: 3, name: 'Ноутбук', price: 22500 },
  ];
  const product = products[0];
  const [exchangeRate] = useState(41.22);

  return (
    <div>
      <h1>Список товарів</h1>
      <ProductList products={products} />
      <ProductDetails product={product} />
      <CurrencyConverter price={product.price} exchangeRate={exchangeRate} />
    </div>
  );
}

export default App;
