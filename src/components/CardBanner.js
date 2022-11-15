import React from 'react';
import styles from '../assets/css/CardBanner.module.css'

const CardBanner = ({img , desc}) => {
    return (
        <div className={styles.card}>
            <img src={img} alt={desc}/>
            <h4>{desc}</h4>
        </div>
    );
};

export default CardBanner;