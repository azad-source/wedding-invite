import React from 'react';
import { Header } from 'components/Header/Header';
import { DateTime } from 'components/DateTime/DateTime';
import { Maps } from 'components/Map/Map';
import { Contacts } from 'components/Contacts/Contacts';
import styles from './App.module.scss';
import { Menu } from 'components/Menu/Menu';
import { MenuMobile } from 'components/Menu/MenuMobile';
import { Organizators } from 'components/Organizators/Organizators';

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
    {
        id: 'organizators',
        caption: 'Организаторы',
    },
];

function App() {
    return (
        <div className={styles.root}>
            <Menu items={menuItems} />
            <MenuMobile items={menuItems} />
            <div className={styles.content}>
                <Header />
                <DateTime />
                <Contacts />
                <Maps />
                <Organizators />
            </div>
        </div>
    );
}

export default App;
