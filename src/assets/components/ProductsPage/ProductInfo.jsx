import React, { useState } from "react";
import "./styles/productInfo.css";

const ProductInfo = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const [counterTwo, setcounterTwo] = useState(0);

  const handleBack = () => {
    setCounter(counterTwo + 1);
    if (counterTwo > 2) {
      setCounter((counterTwo = 0));
    }
  };
  const handleAdvance = () => {
    setCounter(counterTwo - 1);
    if (counterTwo < 0) {
      setcounterTwo((counterTwo = 2));
    }
  };

  const handlePlus = () => {
    if (counter >= 2) {
      setCounter((counter = 0));
    } else {
      setCounter(counter + 1);
    }
  };
  const handleminus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <section className="section__main">
      <h3>{product?.brand}</h3>
      <div className="div__slider">
        <button onClick={handleAdvance}> {"<"} </button>
        <img src={product?.images[counterTwo]?.url} alt="logo" />
        <button onClick={handleBack}> {">"} </button>
      </div>
      <h2>{product?.title}</h2>

      <div className="info__quantity">
        <article className="info__articleOne">
          <h4>Price</h4>
          <span>{product?.price}</span>
        </article>
        <article className="info__articleTwo">
          <h4>Quantity: {counter}</h4>
          <div className="info__button">
            <button onClick={handleminus}>-</button>
            <button onClick={handlePlus}>+</button>
          </div>
        </article>
      </div>
      <button className="info_add" >
        Add to cart <i className="bx bxs-cart-add adds"></i>
      </button>
      <p>{product?.description}</p>
    </section>
  );
};

export default ProductInfo;
