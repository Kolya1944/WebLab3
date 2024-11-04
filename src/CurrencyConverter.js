import React from 'react';

const CurrencyConverter = ({ price, exchangeRate }) => {
  const convertedPrice = (price / exchangeRate).toFixed(2);

  return <p>Ціна в USD: ${convertedPrice}</p>;
};

export default CurrencyConverter;
