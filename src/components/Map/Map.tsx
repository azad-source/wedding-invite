import * as React from 'react';
import cn from 'classnames';
import styles from './Map.module.scss';

interface Props {
    className?: string;
}

export const Map: React.FC<Props> = ({ className }) => {
    return <div className={cn(styles.root, className)}>asd</div>;
};
