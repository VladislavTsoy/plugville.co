import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../styles/events.css'

// Required Componenets
import Headline from './Headline';

const Events = props => {
    return (
        <Fragment>
            <Headline />
            <div className="events-container">
                <div className="events-left">
                    {props.events.map((e, i) => {
                        if(i % 2 === 0) return <img key={i} src={e.flyer} alt={e.title} style={{width: '100%'}}/>
                        return <Fragment key={i}></Fragment>
                    })}
                </div>
                <div className="events-right">
                {props.events.map((e, i) => {
                        if(i % 2 === 1) return <img key={i} src={e.flyer} alt={e.title} style={{width: '100%'}}/>
                        return <Fragment key={i}></Fragment>
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default connect(state=> ({
    events: state.loadEvents,
    isAuthenticated: state.isAuthenticated
}))(Events);