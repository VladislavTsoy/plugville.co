import React from 'react';

const EventCard = props => {
    const style = {
        width: props.width
    }
    return (
        <img src={props.flyer} alt={props.title} style={style}/>
    );
};

export default EventCard;