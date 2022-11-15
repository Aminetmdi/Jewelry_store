import React from "react";
import styles from "../assets/css/Sections.module.css";

const Sections = () => {
  return (
    <div className={styles.container}>
      <section className={styles.borderSection}>
        <h2>Amazing Value</h2>
        <p>The highest-quality design at a great price.</p>
      </section>

      <section className={styles.borderSection}>
        <h2>Peace of Mind</h2>
        <p>30-day returns, diamond price-match guarantee and more.</p>
      </section>

      <section>
        <h2>Inspiring Assortment</h2>
        <p>The perfect pieces for every occasion.</p>
      </section>
    </div>
  );
};

export default Sections;
