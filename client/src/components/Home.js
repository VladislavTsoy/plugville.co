import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import '../styles/style.css';
import '../styles/home.css';

// Required Components
import Headline from './Headline';
import EventCard from './EventCard';

class Home extends PureComponent {
    render(){
        return (
            <Fragment>
                <Headline />
                {this.props.events && <EventCard width="100%" {...this.props.events[0]} />}
                
                <div className="slider">
                    {this.props.events.map((e, i) => {
                        if(i !== 0) {
                            return <img key={i} className="slides" src={e.flyer} style={{height: '150px'}} alt="flyers"/>
                        }
                        return <Fragment key={i}></Fragment>
                    })}
                </div>
            </Fragment>
        );
    };
};

export default connect(state => ({
    events: state.loadEvents,
    isAuthenticated: state.isAuthenticated
}), {})(Home);