import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import confi from "../layout/confi";
import "./shared/styles/cardProducts.css";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleClickTwo = (e) => {
    e.stopPropagation();
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

    const data = {
      quantity: 1,
      productId: product.id,
    };
    axios
      .post(url, data, confi)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.res));
  };

  return (
    <div onClick={handleClick} className="card__contain">
      <header>
        <img src={product?.images[0].url} alt="" />
      </header>
      <section>
        <header>
          <h3 className="card__ligth">{product?.brand}</h3>
          <h2 className="card__bold">{product?.title}</h2>
        </header>
        <div>
          <div className="card__ligth">Price</div>
          <div className="card__bold prices">{product?.price}</div>
        </div>
        <button onClick={handleClickTwo}>
          <i className="bx bxs-cart-add"></i>
        </button>
      </section>
    </div>
  );
};

export default CardProduct;
