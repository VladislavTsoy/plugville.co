import React, { PureComponent, Fragment } from 'react';
import { borderTop, borderBottom, borderLeft, borderRight, leftPos, rightPos, topPos, bottomPos } from './DynamicStyling';
import { CSSTransition } from 'react-transition-group';

import '../styles/events.css';

class EventCard extends PureComponent {
    constructor(){
        super();
        this.state = {
            toggle: false
        };
    };

    handleClick = () => {
        if(this.props.active){
            this.setState({toggle: !this.state.toggle});
        };
    };
    render(){
        const style = {
            width: this.props.width,
            height: this.props.height
        };


        const eventStyle = {
            position: 'absolute',
            width: '70vw',
            zIndex: 2,
            bottom: bottomPos(this.props.pos, this.props.len),
            top: topPos(this.props.pos, this.props.len),
            left: leftPos(this.props.pos),
            right:rightPos(this.props.pos),
            borderTop: borderTop(this.props.pos),
            borderBottom: borderBottom(this.props.pos, this.props.len),
            borderLeft: borderLeft(this.props.pos),
            borderRight: borderRight(this.props.pos)
        };

        return (
            <Fragment>
                <img className={this.props.className} src={this.props.flyer} alt={this.props.title} style={style} onClick={() => this.handleClick()}/>
                {this.state.toggle && 
                <CSSTransition in={true} appear={true} timeout={150} classNames="fade">
                    <img className={this.props.className} src={this.props.flyer} alt={this.props.title} style={eventStyle} onClick={() => this.handleClick()}/>
                </CSSTransition>
                }
            </Fragment>
        );
    }
};

export default EventCard;