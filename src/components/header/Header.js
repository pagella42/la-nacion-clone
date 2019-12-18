import React, { useState } from 'react';
import './header.css'
import './burger.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [burger, setBurger] = useState(false)

    const [burgerState, setBurgerState] = useState("")
    const [menuState, setMenuState] = useState("MENÚ")
    const [container, setContainer] = useState("")

    const [focus, setFocus] = useState(false)
    const [blur, setBlur] = useState(true)


    function focusFunc(boolean) {
        if (boolean) {
            setFocus(true)
            setContainer("-search")
        }
        else {
            setFocus(false)
            setContainer("")
        }
    }

    function openBurger(){
        setBurger(!burger)
        if(burger){
            setBurgerState("open")
            setMenuState("CERRAR")
        }
        else{
            setBurgerState("")
            setMenuState("MENÚ")
        }
        

    }

   

    return (
        <div id="header-cont">

            <div id={`header-inner${container}`}>
                <div id="header-menu">
                        <div id="burger-cont" onClick={() => openBurger()}>
                            <div id="nav-icon4" className={burgerState}>  <span></span>  <span></span> <span></span></div>
                            <span id="header-menu-title">{menuState}</span>
                        </div> 
                    <div id="search-bar-cont">
                        <input id="search" type="text" placeholder="Buscar" onFocus={() => { focusFunc(true) }} onBlur={() => focusFunc(false)} />
                        {!focus ? <FontAwesomeIcon  class="searchIcon" icon={faSearch}/> : null}

                        <button id={`buscar-butt${container}`}>BUSCAR</button> 
                    </div>
                </div>
                {!focus ? <div id="logo-cont">  <a href="https://www.lanacion.com.ar/"><img id="logo" src={require('../../assets/lanacion.png')} /></a>  </div> : null}
                
                <div id="button-cont">
                    <div>
                        <button id="user-sub" className="user-butt">SUSCRIBITE</button>
                        <button id="user-ing" className="user-butt">INGRESAR</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Header;

