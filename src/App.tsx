import React from 'react';
import { Header } from 'components/Header/Header';
import { DateTime } from 'components/DateTime/DateTime';
import { Map } from 'components/Map/Map';

function App() {
    return (
        <div className="App">
            <Header />
            <DateTime />
            <Map />
        </div>
    );
}

export default App;
