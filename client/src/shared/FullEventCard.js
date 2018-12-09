import React, { Fragment } from 'react';

const FullEventCard = props => {
    return (
        <Fragment>
            <img src={props.flyer} alt={props.title} style={{width: '100%'}}/>
        </Fragment>
    );
};

export default FullEventCard;