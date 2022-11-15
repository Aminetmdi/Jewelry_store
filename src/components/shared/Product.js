import React, { useContext } from "react";
import styles from "../../assets/css/Cards.module.css";
import { Link } from "react-router-dom";
// CONTEXT
import { productContext } from "../../context/ProductContextProvider";
// import Product from "./shared/Product";
import Card from "../Card";

const Products = () => {
  const products = useContext(productContext);
  return (
    <div>
      <div className={styles.title}>
        <h1>- TRENDING -</h1>
      </div>
      <div className={styles.container}>
        {products.slice(0, 4).map((item) => (
          <Card key={item.id} productData={item} />
        ))}
      </div>
      <div className={styles.showMore}>
        <Link to="/products">
          <button>
            SHOW MORE{" "}
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L9 9L2 16"
                stroke="#5A5A5A"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
