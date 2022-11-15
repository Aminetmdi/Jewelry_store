import React, { useState } from "react";
import styles from "../assets/css/Hero.module.css";

const Hero = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };
  
  return (
    <div className={styles.hero} style={{display: isShown ? 'flex' : 'none'}}>
      <p>
        Discover our benchmark for brilliance{" "}
        <a href="#">
          | SHOP NOW{" "}
          <svg
            width="14"
            height="11"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L9 9L2 16"
              stroke="#ffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </p>
      <span onClick={handleClick} className={styles.closeBtn}>X</span>
    </div>
  );
};

export default Hero;
