import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../components/CardProduct";
import {getProductsByName,} from "../store/slice/products.slice";

const HomePage = () => {
  const { products } = useSelector((state) => state);
  const [categorys, setcategorys] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories";
    axios
      .get(url)
      .then((res) => {
        setcategorys(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    dispatch(getProductsByName(e.target.search.value.trim().toLowerCase()));
  };

  const category = (id) =>{
        dispatch(getProductsByName(id,true))
  }
  return (
    <div className="card__main">
      <form onSubmit={submit}>
        <input type="text" id="search" />
        <button>
          <i className="bx bx-search-alt"></i>
        </button>
      </form>
      <article>
        <h3>
          Category <i className="bx bxs-chevron-down"></i>
        </h3>
        <ul>
          {categorys?.map((prod) => (
            <li key={prod.id} onClick={ ()=> category(prod.id)}>{prod.name}</li>
          ))}
        </ul>
      </article>
      products
      {
      products?.length === 0 ? 
      <h1>Not Product</h1>
      :
      products?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))
      
      
      }
    </div>
  );
};

export default HomePage;
