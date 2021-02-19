import React from 'react'
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
             <video src="/videos/video-2.mp4" autoPlay loop muted />
             <h1> DANG DANGA DANG</h1>
             <p> BUWAHAHAHAHA</p>
             <div className="hero-btns">

                <button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>LETS GO</button>

                <button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'> WATCH TRAILER <i className='far fa-play-circle' /></button>
             </div>
        </div>
    )
}

export default HeroSection
