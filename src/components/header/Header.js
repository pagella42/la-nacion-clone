import React, { useState } from 'react';
import './header.css'
import './burger.css'
import HeaderMenu from './header-menu';
import Headroom from 'react-headroom'

function Header() {

    const [container, setContainer] = useState("")
    const [focus, setFocus] = useState(false)

   

    return (
        <Headroom style={{zIndex:30}}>

        <div id="header-cont">
            <div id={`header-inner${container}`}>
            <HeaderMenu focus={focus} setFocus={setFocus} container={container} setContainer={setContainer}/>
               
                {!focus ? <div id="logo-cont">  <a href="https://www.lanacion.com.ar/"><img id="logo-head" src={require('../../assets/lanacion.png')} /></a>  </div> : null}
                
                <div id="button-cont">
                    <div>
                        <button id="user-sub" className="user-butt">SUSCRIBITE</button>
                        <button id="user-ing" className="user-butt">INGRESAR</button>
                    </div>
                </div>
            </div>

        </div>
        </Headroom>
    )
}


export default Header;

