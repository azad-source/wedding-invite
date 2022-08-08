import React from 'react';
import { Header } from 'components/Header/Header';
import { DateTime } from 'components/DateTime/DateTime';
import { Maps } from 'components/Map/Map';
import { Contacts } from 'components/Contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Header />
            <DateTime />
            <Contacts />
            <Maps />
        </div>
    );
}

export default App;
