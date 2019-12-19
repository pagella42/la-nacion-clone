import React, { useState } from 'react';
import './footer-middle.css'

function FooterMiddle() {



    return (
        <div id="footer-middle">
            <div id="footer-links">
                <div>
                    <a class="footer-links-href" href="http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html"><span class="footer-link">Mapa del sitio</span></a>
                    <a class="footer-links-href" href="https://micuenta.lanacion.com.ar/ayuda"><span class="footer-link">Ayuda</span></a>
                    <a class="footer-links-href" href="https://micuenta.lanacion.com.ar/tyc"><span class="footer-link">Términos y condiciones</span></a>
                    <a class="footer-links-href" href="https://www.lanacion.in/#/"><span class="footer-link">¿Cómo anunciar?</span></a>
                    <a class="footer-links-href" href="https://suscripciones.lanacion.com.ar/suscribirme/"><span class="footer-link">Suscribirse al diario impreso</span></a>
                </div>
            </div>
            <div id="footer-captcha">
                <span>Protegido por re CAPTCHA: <br />
                    <a  class="footer-captcha-link" target="_blank" href="https://policies.google.com/terms?hl=es-419">
                        Condiciones
                    </a>
                    <a class="footer-captcha-link" target="_blank" href="https://policies.google.com/privacy?hl=es-419">
                        Privacidad
                    </a>
                </span>
            </div>
        </div>
    )
}


export default FooterMiddle;
