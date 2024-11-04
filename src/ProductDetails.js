import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment); 
    alert(`Ваш відгук: "${comment}" додано успішно!`);
    setComment(''); 
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Ціна: {product.price} UAH</p>
      <form onSubmit={handleSubmit}>
        <label>
          Ваш відгук:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};

export default ProductDetails;
