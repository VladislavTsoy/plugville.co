import React from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

// Required components
import Home from './Home';
import Events from './Events';
import Vicario from './Vicario';
import Agency from './Agency';

const MainContainer = () => {
    return (
        <div className="main-content-container">
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/events' component={ Events } />
                <Route exact path='/vicario' component={ Vicario } />
                <Route exact path='/agency' component={ Agency } />
            </Switch>
        </div>
    );
};

export default withRouter(MainContainer);