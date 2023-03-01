import React, { useState } from "react";

const ProductInfo = ({ product }) => {
const [counter, setCounter] = useState(1)

const handlePlus = ()=>{
    setCounter(counter + 1)
}
const handleminus = ()=>{
    if (counter > 1) {
        
        setCounter(counter - 1)
    }
}


  return (
    <section>
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <div>
        <article>
          <h4>Price</h4>
          <span>{product?.price}</span>
        </article>
        <article>
          <h4>Quantity: {counter}</h4>
          <div>
            <button onClick={handleminus}>-</button>
            <button onClick={handlePlus}>+</button>
            <button>Add to cart <i className='bx bxs-cart-add'></i></button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductInfo;
