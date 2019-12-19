import React, { useState } from 'react';
import './nav-bar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div id="navbar-cont">
            <div id="navbar-inner">
                <div id="icons">
                <FontAwesomeIcon  class="icon" icon={faHome}/>
                <FontAwesomeIcon  class="icon" icon={faWallet}/>
                <FontAwesomeIcon  class="icon" icon={faComment}/>
                <FontAwesomeIcon  class="icon" icon={faBars}/>
                </div>
                <div id="text">
                    <span class="text">Home</span>
                    <span class="text">Club LA NACION</span>
                    <span class="text">Mi cuenta</span>
                    <span class="text">Menú</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
