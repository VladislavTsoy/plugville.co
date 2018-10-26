// Required modules
import React from 'react';

// Required components
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import '../styles/style.css'

const App = () => {
    return (
        <div className="app-container">
            <MainContainer />
            <Navbar />
        </div>
    );
};

export default App;