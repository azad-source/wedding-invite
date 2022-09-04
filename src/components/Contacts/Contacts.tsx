import { PageWrapper } from 'components/layout/PageWrapper';
import * as React from 'react';
import cn from 'classnames';
import styles from './Contacts.module.scss';
import pageStyles from 'styles/page.module.scss';

interface Props {
    className?: string;
}

export const Contacts: React.FC<Props> = ({ className }) => {
    return (
        <PageWrapper>
            <div className={pageStyles.h1} id="contacts">Контактная информация</div>
            <div className={cn(styles.root, className)}>
                <div className={pageStyles.description}>
                    На нашей свадьбе будет работать координатор Евгения&nbsp;ЛЕОНОВА.
                    <br /> С пожеланиями и вопросами относительно свадебного дня Вы можете
                    обратиться к ней любым удобным способом по номеру: +79171244133
                    (telegram/whatsapp)
                </div>
            </div>
        </PageWrapper>
    );
};
