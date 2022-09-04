import { PageWrapper } from 'components/layout/PageWrapper';
import { Timer } from 'components/Timer/Timer';
import * as React from 'react';
import styles from './DateTime.module.scss';
import pageStyles from 'styles/page.module.scss';

export const DateTime = () => {
    return (
        <PageWrapper>
            <div className={styles.root} id="datetime">
                <div className={pageStyles.h1}>Дорогие родные и друзья!</div>
                <div className={pageStyles.description}>
                    <div>
                        Приглашаем Вас на торжество, посвещенное нашему&nbsp;бракосочетанию которое
                        состоится
                    </div>
                    <div>15 октября 2022 года</div>
                    <br />
                    <div>
                        в 17:00 в гостиничном комплексе &laquo;Парк Отель&raquo;
                        по&nbsp;адресу&nbsp;г.Тольятти ул. Комзина 6, зал &laquo;Зеркальный&raquo;
                    </div>
                </div>
                <Timer
                    className={styles.root__timer}
                    date={new Date(2022, 9, 15, 17, 0, 0)}
                    timerTitle="До начала свадьбы осталось:"
                />
                {/* new Date(2022, 9, 15, 17, 0, 0) */}
            </div>
        </PageWrapper>
    );
};
