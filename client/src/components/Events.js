import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import '../styles/events.css';

// Required Componenets
import Headline from '../shared/Headline';
import EventCard from '../shared/EventCard';
import FullEventCard from '../shared/FullEventCard';
import ReorderIcon from '@material-ui/icons/Reorder';
import MosaicIcon from '@material-ui/icons/ViewQuilt';

class Events extends PureComponent {
    state = {
        toggle: false
    };

    render() {
        return (
            <Fragment>
                <Headline />
                {this.state.toggle ? 
                <div className="list-view-container">
                    {this.props.events.map((e, i) => {
                        return <FullEventCard key={i} {...e}/>
                    })}
                </div>
                : 
                <div className="events-container">
                    <div className="events-left">
                        {this.props.events.map((e, i) => {
                            if(i % 2 === 0) return (<div key={i} style={{position: 'relative'}}><EventCard pos={i} {...e} alt={e.title} width={'100%'} active={true} len={this.props.events.length}/></div>);
                            return <Fragment key={i}></Fragment>
                        })}
                    </div>
                    <div className="events-right">
                    {this.props.events.map((e, i) => {
                            if(i % 2 === 1) return (<div key={i} style={{position: 'relative'}}><EventCard pos={i} {...e} alt={e.title} width={'100%'} active={true} len={this.props.events.length}/></div>);
                            return <Fragment key={i}></Fragment>
                        })}
                    </div>
                </div>
                }
                <div className="list-view-option-container">
                    <div className="list-view" onClick={() => this.setState({toggle: true}) }><ReorderIcon /></div>
                    <div className="mosaic-view" onClick={() => this.setState({toggle: false})}><MosaicIcon /></div>
                </div>
            </Fragment>
        );
    }
};

export default connect(state=> ({
    events: state.loadEvents,
    isAuthenticated: state.isAuthenticated
}))(Events);