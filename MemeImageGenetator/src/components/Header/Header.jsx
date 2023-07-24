import React from "react";
import './Header.css'
import logo from '../../images/troll-face.png'

const Header = () => {
    return (
        <header>
            <div className="logo-container" >
                <img src={logo} alt="logo" />
                <span className="logo-txt" >Meme Generator</span>
            </div>
            <h3>React Course - Project 3</h3>
        </header>
    )
}

export default Header