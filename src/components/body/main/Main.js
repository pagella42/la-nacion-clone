import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './main.css'
import '../body.css'



function Main(props) {
    const dates = {
        "01": "Enero",
        "02": "Febrero",
        "03": "Marzo",
        "04": "Abril",
        "05": "Mayo",
        "06": "Junio",
        "07": "Julio",
        "08": "Agosto",
        "09": "Septiembre",
        "10": "Octubre",
        "11": "Noviembre",
        "12": "Diciembre",

    }
    return (

        <div id="main">
            <div>
                <span id="title">Acumulado Grilla</span>
            </div>

            <div id="tag-cont">
                {props.tags ?
                    props.tags.map((t, i) => i < 10 ? <a href={`https://www.lanacion.com.ar/tema/${props.tagSlug[t]}`}><span class="tag">{t} •</span></a> : null) :
                    null
                }
                {props.tags ?
                    props.tags.map((t, i) => i == 10 ? <a href={`https://www.lanacion.com.ar/tema/${props.tagSlug[t]}`}><span class="tag">{t}</span></a> : null) :
                    null}
            </div>
            <div>
                <div id="articles">
                    {props.articles ?
                        props.articles.map(a => a.subtype == 7 ?
                            <div class="article">
                                <a href={`https://www.lanacion.com.ar${a.website_url}`}>
                                    <div class="article-photo-cont">
                                        <img class="article-photo" src={a.promo_items.basic.url} />
                                    </div>
                                </a>

                                <div class="article-title-cont">
                                    <span class="article-title">{a.headlines.basic}</span>
                                    <span class="article-date">{a.display_date.split("-")[2].split("T")[0] + " de " + dates[a.display_date.split("-")[1]] + " de " + a.display_date.split("-")[0]}</span>
                                </div>
                            </div> :
                            null) :
                        null}
                </div>
                <div id="loadmore-cont">
               {props.articles.length > 1 ? <button id="loadmore">MÁS NOTAS DE ACUMULADO GRILLA</button>: null} 

                </div>
            </div>
        </div>

    )
}


export default Main;
