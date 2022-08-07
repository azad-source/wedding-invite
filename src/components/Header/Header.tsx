import * as React from 'react';
import cn from 'classnames';
import flower from 'images/flower.png';
import greens from 'images/greens.png';
import rings from 'images/rings.png';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.header__title}>
                    <div>Азад</div>
                    <div className={styles.ampersand}>&amp;</div>
                    <div>Курсум</div>
                    <div className={cn(styles.header__img, styles.header__img4)}>
                        <img src={rings} alt="rings" />
                    </div>
                </div>
                <div className={cn(styles.header__img, styles.header__img1)}>
                    <img src={flower} alt="flowers" />
                </div>
                <div className={cn(styles.header__img, styles.header__img2)}>
                    <img src={flower} alt="flowers" />
                </div>
                <div className={cn(styles.header__img, styles.header__img3)}>
                    <img src={greens} alt="greens" />
                </div>
            </div>
        </header>
    );
};
