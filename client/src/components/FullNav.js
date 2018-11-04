// Required Modules
import React from 'react';

// Required Components
import Headline from './Headline';
const FullNav = props => {
    return (
        <div className="full-nav-view">
            <Headline />
            <hr/>
            <button style={{height: '100px', width: '100px'}}onClick={() => props.handleToggle()}></button>
        </div>
    );
};

export default FullNav;