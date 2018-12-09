// Required Modules
import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

// Required Components
import Headline from '../shared/Headline';
import Ad from '../shared/Ad';
import '../styles/navbar.css';

const FullNav = props => {
    return (
        <div className="full-nav-view">
            <Headline />
            <hr/>
            <ul className="full-nav-links">
                <li className="full-nav-links-child">
                    <div className="social-links-container">
                        <a href='https://www.twitter.com/plugville'><img src="https://s3.us-east-2.amazonaws.com/plugville-events/resources/twitter.png" alt=""/></a>
                        <a href='https://www.instagram.com/plugville'><img src="https://s3.us-east-2.amazonaws.com/plugville-events/resources/ig.png" alt=""/></a>
                        <a href='http://snapchat.com/add/plugville'><img src="https://s3.us-east-2.amazonaws.com/plugville-events/resources/snap.png" alt=""/></a>
                    </div>    
                </li>
                <li className="full-nav-links-child" onClick={() => props.handleToggle()}><Link to="/">Home</Link></li>
                <li className="full-nav-links-child" onClick={() => props.handleToggle()}><Link to="events">Events</Link></li>
                <li className="full-nav-links-child" onClick={() => props.handleToggle()}><Link to="/vicario">Vicario</Link></li>
                <li className="full-nav-links-child" onClick={() => props.handleToggle()}><Link to="agency">Agency</Link></li>
            </ul>
            <div className='main-subscribe' id="mc_embed_signup">
                <form action="https://plugville.us19.list-manage.com/subscribe/post?u=9623420fd7bc35ba9adee1a96&amp;id=4b26578c48" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <input type="email" value="" placeholder='EMAIL' name="EMAIL" className="required email" id="mce-EMAIL" required />
                    <button className='btn-subscribe' type="submit">subscribe</button>
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                        <input type="text" name="b_9623420fd7bc35ba9adee1a96_4b26578c48" tabIndex="-1" value="" />
                    </div>
                </form>
                <h6 id='onSub'>subscribed!</h6>
            </div>
            <div className="close-full-nav" onClick={() => props.handleToggle()}><CloseIcon /></div>
            <div style={{marginTop: "50px"}}>
                <Ad />
            </div>
            <div className="full-nav-footer">
                <div className="footer-links">
                    <h4>privacy policy</h4>
                    <h4>copyright</h4>
                    <h4>terms of use</h4>
                    <h4>about our ads</h4>
                    <h4>contact</h4>
                </div>
                <div className="footer-logo">
                    <img src="https://s3.us-east-2.amazonaws.com/plugville-events/resources/pinky-white.png" alt="plugville logo"/>
                </div>
                <div className='copyright-footline'>
                    <h6>
                        copyright &copy; 2017 plugville all rights reserved.
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default FullNav;