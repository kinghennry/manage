import React,{useState,useEffect} from 'react'
import { FaQuoteRight } from "react-icons/fa"
import "./Testimonials.css"
import { FaArrowCircleRight } from "react-icons/fa"
import { FaArrowCircleLeft } from "react-icons/fa"
import {IoIosArrowDropleft} from "react-icons/io"
import {IoIosArrowDropright} from "react-icons/io"
import items from '../item';
function Testimonials() {
    const [people, setPeople] = useState(items)
    const [index, setIndex] = useState(0)
    
  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex ) {
      setIndex(0)
    }
  }, [index,people])
    return (
        <section className="testimonials ct">
            <div className="container">
            <h1 className="fb ct px py">What they've said</h1> 
                <div className="section-center">
                    {people.map((person,personIndex )=> {
                    const { id, image, name, quote } = person
                        let position='nextSlide'
                        if (personIndex === index) {
                            position="activeSlide"
                                }
                        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                            position="lastSlide"
                                }
           return (
         <article className={position} key={id}>
          <img src={image} alt={name } className="person-img"/>
               <h4 className="fb name">{name}</h4>
               <p className="text fw">{ quote}</p>
        </article>
        )
        })}
                </div>
          <button className="prev" onClick={() => setIndex(index - 1)}>
            {/* <FaArrowCircleLeft className="btn__icon" /> */}
          <IoIosArrowDropleft className="btn__icon og"/>
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            {/* <FaArrowCircleRight className="btn__icon" /> */}
            <IoIosArrowDropright className="btn__icon"/>
          </button>
            </div>
        </section>
    )
}

export default Testimonials