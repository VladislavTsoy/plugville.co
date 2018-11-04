import React from 'react';

const EventCard = props => {
    const style = {
        width: props.width,
        height: props.height
    }
    return (
        <img className={props.className} src={props.flyer} alt={props.title} style={style}/>
    );
};

export default EventCard;