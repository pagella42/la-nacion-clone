import React, { useState } from 'react';
import './header.css'
import './burger.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function HeaderMenu(props) {
    const [burger, setBurger] = useState(false)

    const [burgerState, setBurgerState] = useState("")
    const [menuState, setMenuState] = useState("MENÚ")

    const [focus, setFocus] = useState(false)


    function focusFunc(boolean) {
        if (boolean) {
            props.setFocus(true)
            props.setContainer("-search")
        }
        else {
            props.setFocus(false)
            props.setContainer("")
        }
    }

    function openBurger() {
        setBurger(!burger)
        if (burger) {
            setBurgerState("open")
            setMenuState("CERRAR")
        }
        else {
            setBurgerState("")
            setMenuState("MENÚ")
        }


    }



    return (


        <div id="header-menu">
            <div id="burger-cont" onClick={() => openBurger()}>
                <div id="nav-icon4" className={burgerState}>  <span></span>  <span></span> <span></span></div>
                <span id="header-menu-title">{menuState}</span>
            </div>
            <div id="search-bar-cont">
                <input id="search" type="text" placeholder="Buscar" onFocus={() => { focusFunc(true) }} onBlur={() => focusFunc(false)} />
                {!props.focus ? <FontAwesomeIcon class="searchIcon" icon={faSearch} /> : null}

                <button id={`buscar-butt${props.container}`}>BUSCAR</button>
            </div>
        </div>


    )
}


export default HeaderMenu;

