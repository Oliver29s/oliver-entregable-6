import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import confi from "../../layout/confi";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (estate, action) => action.payload,
  },
});
export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
export const getCartThunk = () => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
  
 axios
    .get(url, confi)
    .then((res) => dispatch(setCart(res.data)))
    .catch((err) => console.log(err));
};
