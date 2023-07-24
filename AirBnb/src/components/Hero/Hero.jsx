import React from 'react';
import heroImg from '../../images/hero-img.png'
import './Hero.css'


const Hero = () => {
    return (
        <>
            <img className='hero-grid' src={heroImg} alt='grid'/>
            <div className='online-experiences'>
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by 
                    one-of-a-kind hosts-all without leaving home.
                </p>
            </div>
        </>
    )
}

export default Hero;