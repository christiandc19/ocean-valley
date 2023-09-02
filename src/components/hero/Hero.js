import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/Bg-Video2.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />
            <div className="hero-container">

                <div className="content">
                        <h1>Ocean Valley Behavioral Health</h1>
                        <h2>Healing. Recovery. Peace of mind.</h2>
                    <Fade left>
                        <h3>Substance Abuse Addiction and Mental Health Treatment Facility</h3>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Contact Us</button>
                    </Link>
                    </div>
                    <br />
                    <Fade bottom>
                        <p>Find your happiness and learn to put it first.</p>
                    </Fade>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero