import React, { useState } from "react";
import styles from "../assets/css/Card.module.css";
import up from "../assets/img/icons/Up.svg";
import down from "../assets/img/icons/Down.svg";

const Card = ({ productData }) => {
  const [counter, setCounter] = useState(0);

  const downHandler = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const upHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <img className={styles.cardImg} src={productData.img} alt="img" />
        <button className={styles.btn}>{productData.btn}</button>
      </div>
      <div className={styles.textBox}>
        <p className={styles.stars}>
          <img src={productData.rate} alt="star" /> <span>5.0</span>
        </p>
        <p className={styles.desc}>{productData.desc}</p>
        <p className={styles.price}>
          {productData.price}{" "}
          {counter
            ? `* ${counter} = ${
                counter * Number(productData.price.split(" ")[1])
              }`
            : ""}
          $
        </p>

        <div className={styles.counter}>
          <img
            className={counter ? "" : styles.deactive}
            src={down}
            onClick={downHandler}
            alt="arrowDown"
          />
          <span>{counter}</span>
          <img src={up} onClick={upHandler} alt="arrowUp" />
        </div>
      </div>
    </div>
  );
};

export default Card;
