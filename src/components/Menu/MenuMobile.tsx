import * as React from 'react';
import styles from './MenuMobile.module.scss';
import { MenuItemType, scrollToTargetAdjusted } from './Menu';

interface Props {
    items: MenuItemType[];
}

export const MenuMobile: React.FC<Props> = ({ items }) => {
    const [menu, setMenu] = React.useState({
        main: { transform: 'translateY(-150%)' },
        burger: { transform: 'none' },
        overlay: { display: 'none' },
    });

    const openMenu = () => {
        setMenu({
            main: { transform: 'translateY(0)' },
            burger: { transform: 'translateY(-300%)' },
            overlay: { display: 'block' },
        });
    };

    const closeMenu = () => {
        setMenu({
            main: { transform: 'translateY(-150%)' },
            burger: { transform: 'none' },
            overlay: { display: 'none' },
        });
    };

    const swipeMenu = {
        start: { x: 0, y: 0 },
        dist: { x: 0, y: 0, xMax: 100, yMin: -100 },
        time: { start: 0, elapsed: 0, allowed: 500 },
    };

    const handleMenuTouchStart = (e: React.TouchEvent) => {
        const { start, time } = swipeMenu;
        const touchObj = e.changedTouches[0];
        start.x = touchObj.pageX;
        start.y = touchObj.pageY;
        time.start = new Date().getTime();
    };

    const handleMenuTouchEnd = (e: React.TouchEvent) => {
        const { start, dist, time } = swipeMenu;
        const touchObj = e.changedTouches[0];
        dist.x = touchObj.pageX - start.x;
        dist.y = touchObj.pageY - start.y;
        time.elapsed = new Date().getTime() - time.start;

        if (time.elapsed <= time.allowed && Math.abs(dist.x) <= dist.xMax && dist.y < dist.yMin) {
            closeMenu();
        }
    };

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        closeMenu();
        scrollToTargetAdjusted(document.querySelector(e.currentTarget.hash));
    };

    return (
        <div
            className={styles.root}
            onTouchStart={handleMenuTouchStart}
            onTouchEnd={handleMenuTouchEnd}
        >
            <div className={styles.burgerMenu} onClick={openMenu} style={menu.burger}>
                <span className={styles.burgerMenu_line}></span>
                <span className={styles.burgerMenu_line}></span>
                <span className={styles.burgerMenu_line}></span>
            </div>
            <div className={styles.overlay} style={menu.overlay} onClick={closeMenu}></div>
            <div className={styles.menuWrapper} style={menu.main}>
                <div className={styles.closeMenu} onClick={closeMenu}></div>
                <div className={styles.menuitems}>
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
            </div>
        </div>
    );
};
