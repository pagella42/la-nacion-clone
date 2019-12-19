import React, { useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header/Header';
import Footer from './footer/Footer';
import Body from './body/Body';



function Acumulado() {



    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


export default Acumulado;
