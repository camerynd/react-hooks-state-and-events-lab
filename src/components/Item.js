import React, { useState } from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)

  function handleClick() {
    setInCart((inCart) => !inCart)
  }

  const addRemoveCart = inCart ? 'in-cart' : ''

  return (
    <li className={addRemoveCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
