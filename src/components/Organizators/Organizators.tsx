import { PageWrapper } from 'components/layout/PageWrapper';
import * as React from 'react';
import styles from './Organizators.module.scss';
import pageStyles from 'styles/page.module.scss';

interface Props {
    className?: string;
}

export const Organizators: React.FC<Props> = ({ className }) => {
    return (
        <PageWrapper className={styles.root}>
            <div id="organizators">
                <div className={pageStyles.h1}>Организаторы</div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        Ведущий:&nbsp;
                        <a
                            href="http://xn--80adbcefdvj4dzbd8cva.xn--p1ai/"
                            className={styles.item__link}
                        >
                            Пугачев Андрей
                        </a>
                    </div>
                    <div className={styles.item}>
                        Видеограф:&nbsp;
                        <a
                            href="https://weva.pro/ru/videographer/arzu_magerramov/"
                            className={styles.item__link}
                        >
                            Мегеррамов Арзу
                        </a>
                    </div>
                    <div className={styles.item}>
                        Фотограф:&nbsp;
                        <a href="https://vk.com/id23756667" className={styles.item__link}>
                            Белова Альбина
                        </a>
                    </div>
                    <div className={styles.item}>
                        Координатор:&nbsp;
                        <a
                            href="https://www.instagram.com/leonova.je/"
                            className={styles.item__link}
                        >
                            Леонова Евгения
                        </a>
                    </div>
                    <div className={styles.item}>
                        Декоратор:&nbsp;
                        <a href="https://vk.com/tlt_rf" className={styles.item__link}>
                            «Резиденция ФЕИ»
                        </a>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};
