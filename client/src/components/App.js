// Required modules
import React from 'react';

// Required components
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import Ad from './Ad'
import '../styles/style.css';


const App = () => {
    return (
        <div className="app-container">
            <Ad />
            <MainContainer />
            <Navbar />
        </div>
    );
};

export default App;