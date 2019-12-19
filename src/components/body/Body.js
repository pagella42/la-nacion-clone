import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './body.css'
import { Link } from 'react-router-dom'
import Main from './main/Main';


function Body() {

    
    useEffect(() => getData(), [])

    const [articles, setArticles] = useState([])
    const [tags, setTags] = useState([])
    const [tagSlug, setTagSlug] = useState([])



    function getData() {
        axios.get('http://localhost:5000/articles')
            .then(
                response => {
                    setArticles(response.data.articles)
                    setTags(response.data.tags)
                    setTagSlug(response.data.tagSlug)
                }
            )
    }

    return (
        <div id="body-cont">
            <div id="banner-top">
                <div id="banner-inner"></div>
            </div>
            <div id="main-outter">
                <Main tagSlug={tagSlug} tags={tags} articles={articles}/>
                <div id="side-bar">
                    <div class="banner-side"></div>
                    <div class="banner-side"></div>
                </div>

            </div>
        </div>
    )
}


export default Body;
