import * as React from 'react';
import headerBg from 'images/headerBg.jpg';
import rings from 'images/rings.png';
import styles from './Header.module.scss';
import { PageWrapper } from 'components/layout/PageWrapper';

export const Header = () => {
    return (
        <PageWrapper bg={headerBg} className={styles.root}>
            <div className={styles.root__title}>
                <div>Азад</div>
                <div className={styles.root__rings}>
                    <img src={rings} alt="rings" />
                </div>
                <div>Курсум</div>
            </div>
        </PageWrapper>
    );
};
