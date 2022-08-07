import { PageWrapper } from 'components/layout/PageWrapper';
import * as React from 'react';
import styles from './DateTime.module.scss';

export const DateTime = () => {
    return (
        <PageWrapper>
            <div className={styles.root}>
                <div className={styles.root__title}>Дорогие родные и друзья!</div>
                <div className={styles.root__description}>
                    <div>
                        Приглашаем Вас на торжество, посвещенное нашему&raquo;бракосочетанию которое
                        состоится
                    </div>
                    <div>15 октября 2022 года</div>
                    <br />
                    <div>
                        в 17:00 в гостиничном комплексе &laquo;Парк Отель&raquo;
                        по&nbsp;адресу&nbsp;г.Тольятти ул. Комзина 6, зал &laquo;Зеркальный&raquo;
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};
