import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import confi from "../layout/confi";
import { getCartThunk } from "../store/slice/cart.slice";
import "./shared/styles/cardProducts.css";

const CardProduct = ({ product }) => {
  const dispatch = useDispatch();
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
      .then((res) => {
        dispatch(getCartThunk());
        console.log(res.data);
      })
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
        <div className="position_relative">
          <div>
            <div className="card__ligth">Price</div>
            <div className="card__bold prices">{product?.price}</div>
          </div>
          <button onClick={handleClickTwo}>
            <i className="bx bxs-cart-add"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CardProduct;
