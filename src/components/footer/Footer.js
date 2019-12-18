import React, { useState } from 'react';
import './footer.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function Footer() {



    return (
        <div id="footer-cont">
            <div id="footer-inner">
                <div id="footer-top">
                    <div></div>
                    <div id="footer-logo-cont">
                        <a href="https://www.lanacion.com.ar/">
                            <img id="logo" src={require('../../assets/lanacion.png')} />
                        </a>
                    </div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}


export default Footer;
