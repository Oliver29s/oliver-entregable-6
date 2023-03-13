import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../components/CardProduct";
import {
  getProductsByName,
  setAllProductsThunk,
} from "../store/slice/products.slice";

const HomePage = () => {
  const { products } = useSelector((state) => state);
  const [categorys, setcategorys] = useState();
  const [inputPrice, setinputPrice] = useState({ from: 0, to: Infinity });
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

  const category = (id) => {
    dispatch(getProductsByName(id, true));
  };

  const product = () => {
    dispatch(setAllProductsThunk());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setinputPrice({
      from: +e.target.from.value.trim(),
      to: +e.target.to.value.trim(),
    });
  };
  return (
    <div className="card__main">
      <div>
      <form onSubmit={submit}  className="form__search">
        <input type="text" id="search" />
        <button>
          <i className="bx bx-search-alt"></i>
        </button>
      </form>
      <form onSubmit={onSubmit} className="form__price">
        <h3>
          Price <i className="bx bxs-chevron-down"></i>
        </h3>
        <div>
          <label htmlFor="from">
            {" "}
            From:
            <input type="number" id="from" required />
          </label>
        </div>
        <div>
          <label htmlFor="to">
            {" "}
            To:
            <input type="number" id="to" required />
          </label>
        </div>
        <button>Filter Price</button>
      </form>
     
      <article>
        <h3>
          Category <i className="bx bxs-chevron-down"></i>
        </h3>
        <ul>
          <li onClick={product}>All Products</li>
          {categorys?.map((prod) => (
            <li key={prod.id} onClick={() => category(prod.id)}>
              {prod.name}
            </li>
          ))}
        </ul>
      </article>
      </div>

      {products?.length === 0 ? (
        <h1>Not Product</h1>
      ) : (
        products?.filter(price => price.price >= inputPrice.from && price.price <= inputPrice.to).map((product) => (
          <CardProduct key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default HomePage;
