import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Footer() {
    return (
        <div className="footer-container">
            <a href="https://www.facebook.com/" className="social-media"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.twitter.com/" className="social-media"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/" className="social-media"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    )
}

export default Footer;
