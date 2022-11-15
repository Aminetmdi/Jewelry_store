import React from "react";
import styles from "../assets/css/Banner.module.css";
import banner from "../assets/img/Banner/Banner.webp";

const Banner = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={banner} alt="banner" />
        <div className={styles.textbox}>
          <h1>SHOPPING ONLINE !</h1>
          <h3>EASY TO BUY EVERY THINK YOU WANT !</h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
