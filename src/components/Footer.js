import axios from "axios";
import React, { useState } from "react";
import styles from "../assets/css/Footer.module.css";

const Footer = () => {
  const [Email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (event) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { Email })
      .then((response) => console.log(response.data));
    event.preventDefault();
  };

  return (
    <div className={styles.footer}>
      <section className={styles.form_section}>
        <h3>JOIN OUR WORLD</h3>
        <p>
          lorem ipsum Reference site about Lorem Ipsum, giving information on
          its origins, as well as a random Lipsum generator.
        </p>

        <form onSubmit={submitHandler}>
          <input
            className={styles.email}
            placeholder="Enter your email address"
            type="email"
            onChange={emailHandler}
            value={Email}
            required
          />
          <input className={styles.btn} type="submit" value="SUBSCRIBE" />
        </form>
      </section>
      <section>
        <ul className={styles.footer__list}>
          <li>ABOUT US</li>
          <li>THE COMPANY</li>
          <li>CAREERS</li>
          <li>EAR PIERCING</li>
          <li>TERMS & CONDITIONS</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </section>

      <section>
        <ul className={styles.footer__list}>
          <li>ABOUT US</li>
          <li>THE COMPANY</li>
          <li>CAREERS</li>
          <li>EAR PIERCING</li>
          <li>TERMS & CONDITIONS</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
