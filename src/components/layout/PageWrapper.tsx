import * as React from 'react';
import styles from './PageWrapper.module.scss';
import cn from 'classnames';

interface Props {
    children: React.ReactNode;
    className?: string;
    bg?: string;
}

export const PageWrapper: React.FC<Props> = ({ bg, className, children }) => {
    return (
        <div
            className={cn(styles.root, className)}
            style={{ backgroundImage: !!bg ? `url(${bg})` : undefined }}
        >
            <div className={styles.root__inner}>{children}</div>
        </div>
    );
};
