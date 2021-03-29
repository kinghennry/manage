import React from 'react'
import "./Footer.css"
import fb from "../images/icon-facebook.svg"
import yb from "../images/icon-youtube.svg"
import tw from "../images/icon-twitter.svg"
import pi from "../images/icon-pinterest.svg"
import it from "../images/icon-instagram.svg"
import footerLogo from "../images/logo-white.svg"
const Footer = () => {
    return (
        <footer>
            <div className="footer__flex ">
                <form action="" className="ds">
                    <input type="text"/>
                    <button>Go</button>
                </form>
                <div className="footer__links">
                    <a href="">Home</a>
                    <a href="">Pricing</a>
                    <a href="">Products</a>
                    <a href="">About us</a>
                    <a href=""></a>
                </div>
                <div className="footer__socials">
                    <a href="">
                        <img src={fb} alt=""/>
                    </a>
                    <a href="">
                        <img src={yb} alt=""/>
                    </a>
                    <a href="">
                        <img src={tw} alt=""/>
                    </a>
                    <a href="">
                        <img src={pi} alt=""/>
                    </a>
                    <a href="">
                        <img src={it} alt=""/>
                    </a>
                </div>
                <div className="footer__logo">
                    <img src={footerLogo} alt=""/>
                </div>
                <div className="copyright__link">
                    Copyright 2021. All Rights Reserved.
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
