import React, { useState } from 'react';
import './footer.css'
import FooterTop from './footer-top/FooterTop';
import FooterMiddle from './footer-middle/footerMiddle';
import FooterBottom from './footer-bottom/footerBottom';
import NavBar from './nav-bar/navBar';

function Footer() {
    return (
        <div id="footer-cont">
            <div id="footer-inner">
                <FooterTop/>
                <FooterMiddle/>
                <FooterBottom/>
            </div>
            <NavBar/>
        </div>
    )
}

export default Footer;
