import * as React from 'react';
import styles from './PageWrapper.module.scss';

interface Props {
    children: React.ReactNode;
    bg?: string;
}

export const PageWrapper: React.FC<Props> = ({ bg, children }) => {
    return (
        <div className={styles.root} style={{ backgroundImage: !!bg ? `url(${bg})` : undefined }}>
            <div className={styles.root__inner}>{children}</div>
        </div>
    );
};
