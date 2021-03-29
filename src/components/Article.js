import React from 'react'
import "./Article.css"
import {articles} from "../data"
function Article() {
    return (
        <section className="article">
            <div className="container">
                <div className="article__flex">
                    <div className="article__text ct px">
            <h1 className="fb">What’s different about Manage?</h1> 
            <p className="fw "> Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
                </div>
                    <div className="article__item ">
                        {articles.map((article) => {
                        const { id, span, title, description } = article
                            return (
                            <>
                            <h3 key={id}><span>{span}</span>{title}</h3>
                            <p className="fw px">{description}</p> 
                            </>
                      )  
                        })}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Article
