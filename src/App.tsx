import React from 'react';
import { Header } from 'components/Header/Header';
import { DateTime } from 'components/DateTime/DateTime';
import { Maps } from 'components/Map/Map';
import { Contacts } from 'components/Contacts/Contacts';
import mainBg from 'images/mainBg.png';
import styles from './App.module.scss';
import { Menu } from 'components/Menu/Menu';
import { MenuMobile } from 'components/Menu/MenuMobile';

const menuItems = [
    {
        id: 'datetime',
        caption: 'Дата / время',
    },
    {
        id: 'contacts',
        caption: 'Контакты',
    },
    {
        id: 'location',
        caption: 'Расположение',
    },
];

function App() {
    return (
        <div className={styles.root} style={{ backgroundImage: `url(${mainBg})` }}>
            <Menu items={menuItems} />
            <MenuMobile items={menuItems} />
            <div className={styles.content}>
                <Header />
                <DateTime />
                <Contacts />
                <Maps />
            </div>
        </div>
    );
}

export default App;
