import React, { useState } from 'react';
import './footer-bottom.css'

function FooterBottom() {



    return (
        <div id="footer-bottom">
            <div id="footer-copyright">
                <span >Copyright 2019 SA LA NACION | Todos los derechos reservados</span>
            </div>
            <div id="legal">
                <span id="legal-text">Miembro de GDA. Grupo de Diarios América</span>
                <img id="data" src={'https://static.glanacion.com/v2/ln/img/data.jpg'} />
           
            </div>
        </div>
    )
}


export default FooterBottom;
