import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartPage/CartItem";
import confi from "../layout/confi";
import { getCartThunk } from "../store/slice/cart.slice";

const CartPage = () => {
  const { cart } = useSelector((state) => state);
  const [totalPrice, settotalPrice] = useState();
  const dispatch = useDispatch()
  
  useEffect(() => {
    settotalPrice(
      cart?.reduce((acc, cv) => acc + cv.quantity * cv.product.price, 0)
    );
  }, [cart]);

  const handlePruchases= () =>{
    const url ='https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
      axios
      .post(url,{},confi)
      .then(res => {console.log(res.data),
      dispatch(getCartThunk())
      } )
      .catch(err => console.log(err.response.data))
  }

  return (
    <>
      <div>
        {cart?.map((car) => (
          <CartItem key={car.id} car={car.product} carTwo={car} />
        ))}
      </div>
      <div>
        <h2>
          Total:<span>{totalPrice}.00</span>
        </h2>
      </div>
      <button onClick={handlePruchases}> buy this Cart</button>
    </>
  );
};

export default CartPage;
