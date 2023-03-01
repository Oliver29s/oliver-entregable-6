import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../CardProduct";

const SimilarProducts = ({ categories, productId }) => {
  const [filterProducts, setFilterProducts] = useState();
  const { products } = useSelector((state) => state);
  useEffect(() => {
    setFilterProducts(
      products?.filter((product) => product.category.id === categories)
    );
  }, [products, categories]);

  console.log(filterProducts);

  return (
    <div className="info__discover">
      <h2>Discover Similar Products</h2>
      <div className="info__similar">
        {filterProducts?.map((prod) => {
          if (prod.id !== productId) {
           return <CardProduct key={prod.id} product={prod} />;
          }
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
