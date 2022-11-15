import React from 'react';
import styles from '../assets/css/CardsBanner.module.css'
import CardBanner from './CardBanner';
import img1 from '../assets/img/Banner/1Banner-card.webp'
import img2 from '../assets/img/Banner/2Banner-card.webp'
import img3 from '../assets/img/Banner/3Banner-card.webp'
const CardsBanner = () => {
    return (
        <div className={styles.container}>
            <CardBanner img={img1} desc='DIAMOND SHAPES' />
            <CardBanner img={img2} desc='EXPERT TIPS' />
            <CardBanner img={img3} desc='FREE RING SIZER' />
        </div>
    );
};

export default CardsBanner;