import * as React from 'react';
import styles from './PageWrapper.module.scss';

interface Props {
    children: React.ReactNode;
}

export const PageWrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.root}>
            <div className={styles.root__inner}>{children}</div>
        </div>
    );
};
