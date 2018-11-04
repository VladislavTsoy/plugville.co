// Required modules
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { verify, loadEvents } from '../redux/actions'
import { withRouter } from 'react-router-dom';

// Required components
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import Ad from './Ad'
import '../styles/style.css';


class App extends PureComponent {
    componentDidMount = () => {
        this.props.verify();
        this.props.loadEvents();
    }

    render(){
        return (
            <div className="app-container">
                <Ad />
                <MainContainer />
                <Navbar />
            </div>
        );
    };
};

export default withRouter(connect(null, { verify, loadEvents })(App));