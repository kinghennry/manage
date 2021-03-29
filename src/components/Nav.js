import React,{useState} from 'react'
import "./Nav.css"
import {navLinks} from "../data"
import logo from "../images/logo.svg"
function Nav() {
    const [toggle, setToggle] = useState(false)
    return (
        <header>
            <div className="container px">               
                 <nav className="fx sb ai">
                     
                    <div className="nav__logo">
                        <img  src={logo} alt="manage"/>
                    </div>
    <div className="nav__toggle" onClick={() => { setToggle(!toggle) }}>
<span style={{transform: toggle ? "rotate(45deg)" : ""}}></span>
<span style={{ opacity: toggle ? "0" : "" }}></span>
<span style={{ transform: toggle ? "rotate(-45deg)" : "" }}></span>
                    </div>
                    {/* style={{ display: toggle ? "block" : "" }} */}
                <ul  className={`nav__list fx sb ai ${toggle ? "nav__list--active" : ""}`}>
                    {navLinks.map(navLink => {
                        const {id,link}=navLink
                        return (
                            <li className="nav__item" key={id}>
                                <a href="" className="nav__link">{link}</a>
                            </li>
                        )
                    })}
                </ul> 
                 <div className="header__cta">
                    <a>Get Started</a>
                </div>
                </nav>
                
            </div>
        </header>
    )
}

export default Nav
