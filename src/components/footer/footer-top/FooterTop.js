import React, { useState } from 'react';
import './footer-top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import GooglePlay from './GooglePlay';
import AppleStore from './AppleStore';


function FooterTop() {
    return (

        <div id="footer-top">
            <div id="footer-icons">
                <a class="icon-link" target="_blank" href="https://www.facebook.com/lanacion">
                    <FontAwesomeIcon class="facebookFIcon icon" icon={faFacebookF} />
                </a>
                <a class="icon-link" target="_blank" href="https://twitter.com/LANACION">
                    <FontAwesomeIcon class="twitterIcon icon" icon={faTwitter} />
                </a>
                <a class="icon-link" target="_blank" href="https://www.instagram.com/lanacioncom/">
                    <FontAwesomeIcon class="instagramIcon icon" icon={faInstagram} />
                </a>
                <a class="icon-link" target="_blank" href="http://servicios.lanacion.com.ar/herramientas/rss/ayuda">
                    <FontAwesomeIcon class="rssIcon icon" icon={faRss} />
                </a>
            </div>

            <div id="footer-logo-cont">
                <a href="https://www.lanacion.com.ar/">
                    <img id="logo" src={require('../../../assets/lanacion.png')} />
                </a>
            </div>

            <div id="footer-stores">
                <div id="footer-stores-inner">
                    <GooglePlay />
                    <AppleStore />
                </div>
            </div>
        </div>
    )
}
export default FooterTop;
