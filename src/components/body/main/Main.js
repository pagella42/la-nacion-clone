import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './main.css'
import '../body.css'

import { Link } from 'react-router-dom'


function Main(props) {


    return (

        <div id="main">
            <div>
                <span id="title">Acumulado Grilla</span>
            </div>

            <div id="tag-cont">
                {props.tags ?
                    props.tags.map((t, i) => i < 10 ? <Link class="tag-link" to="/"> <span class="tag">{t} •</span></Link> : null) :
                    null
                }
                {props.tags ?
                    props.tags.map((t, i) => i == 10 ? <Link class="tag-link" to="/"> <span class="tag">{t}</span></Link> : null) :
                    null}
            </div>

            <div id="articles">
                {props.articles ?
                    props.articles.map(a => a.subtype == 7 ?
                        <div class="article">
                            <div class="article-photo-cont">
                                <img class="article-photo" src={a.promo_items.basic.url} />
                            </div>
                            <div class="article-title-cont">
                                <span>{a.headlines.basic}</span>
                            </div>
                        </div> :
                        null) :
                    null}
            </div>
        </div>

    )
}


export default Main;
