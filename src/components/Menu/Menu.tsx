import * as React from 'react';
import styles from './Menu.module.scss';

export type MenuItemType = { caption: React.ReactNode; id: string };

interface Props {
    items: MenuItemType[];
}

export function scrollToTargetAdjusted(element: Element | null) {
    if (element) {
        const headerOffset = 85;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}

export const Menu: React.FC<Props> = ({ items }) => {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        scrollToTargetAdjusted(document.querySelector(e.currentTarget.hash));
    };

    return (
        <div className={styles.root}>
            {items.length > 0 &&
                items.map(({ caption, id }) => {
                    return (
                        <a
                            key={`idx_${id}`}
                            href={`#${id}`}
                            className={styles.menuItem}
                            onClick={handleScrollTo}
                        >
                            {caption}
                        </a>
                    );
                })}
        </div>
    );
};
