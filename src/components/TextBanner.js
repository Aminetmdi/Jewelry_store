import React from "react";
import styles from "../assets/css/TextBanner.module.css";
import womenPic from '../assets/img/Banner/AVATAR.jpg'

const TextBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.textBox}>
          <h2>JEWELLERY ONLINE SHOP</h2>
          <p>
            Jewellery sets breathtaking accents. Jewellery ensures spectacular
            details. Jewellery is the individual icing on the cake for every
            style and the highlight of every look. Of all fashion elements,
            jewellery is certainly the most expressive and multifaceted. The
            selection of brands, materials and designs is diverse and does not
            limit creativity. Always present yourself from your most attractive
            side: with beautiful fashionable jewellery and exclusive
            accessories. Jewellery is always a perfect eye-catcher. Nobody can
            escape its special magic.
          </p>
        </div>
        <div className={styles.imgPic}>
            <img src={womenPic} alt='Women'/>
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
