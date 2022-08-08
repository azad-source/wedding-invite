import React from 'react';
import { Header } from 'components/Header/Header';
import { DateTime } from 'components/DateTime/DateTime';
import { Maps } from 'components/Map/Map';
import { Contacts } from 'components/Contacts/Contacts';
import mainBg from 'images/mainBg.png';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.root} style={{ backgroundImage: `url(${mainBg})` }}>
            <Header />
            <DateTime />
            <Contacts />
            <Maps />
        </div>
    );
}

export default App;
