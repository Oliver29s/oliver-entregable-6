import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import confi from "../../layout/confi";
import { getCartThunk } from "../../store/slice/cart.slice";

const CartItem = ({ car, carTwo }) => {
  const dispatch = useDispatch();
  const hadleDelete = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${carTwo.id}`;
    axios
      .delete(url, confi)
      .then((res) => {
        console.log(res.data);
        dispatch(getCartThunk());
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <section>
      <header>
        <img src={car.images[0].url} alt="" />
      </header>
      <main>
        <h2>{car.brand}</h2>
        <h3>{car.title}</h3>
        <ul>
          <li>
            <span>Unit Price</span>
            <span>{car.price}</span>
          </li>
          <li>
            <span>Quantity</span>
            <span>{carTwo.quantity}</span>
          </li>
        </ul>
        <button onClick={hadleDelete}>
          <i className="bx bxs-message-alt-x"></i>
        </button>
      </main>
    </section>
  );
};

export default CartItem;
