import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setAllProducts: (state, action) => action.payload,
  },
});

export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const setAllProductsThunk = () => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products";
  axios
    .get(url)
    .then((res) => dispatch(setAllProducts(res.data)))
    .catch((err) => console.log(err));
};
