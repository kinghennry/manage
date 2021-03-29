import React from 'react'
import "./NewsLetter.css"
import ns from  "../images/bg-simplify-section-mobile.svg"
import nd from  "../images/bg-simplify-section-desktop.svg"
function NewsLetter() {
    return (
        <section className="newsletter py">
            <div className="container px">
                <img className="ns__img" src={ns} alt=""/>
                <img className="nd__img" src={nd} alt=""/>
                <div className="newsletter__text ai fx ct fc jc ">
                    <h1>
                        Simplify how your team works today. 
                    </h1>
                    <div className="btn__div">
                    <a href="" className="newsletter__btn">
                            Get Started
                    </a>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
