import React from 'react'
import './homepage.css'
import resume from '../../assets/Resume.pdf'
const Homepage = () => {
    return (
        <section id='Home'>

            <div className="homeContainer">
                <h1>Hi, I'm Mohammed Ashif A.L</h1>
                <h3>I'm a <span>Web Developer</span></h3>
                <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                <div className="homeButtons">
                    <a  href={resume}  download='MohammedAshifAL_ReactNative&ReactJS_2+yrs_Resume' rel="noopener noreferrer">Get Resume</a>
                    <a href='#Contact'>Get In Touch</a>
                </div>

            </div>
        </section>
    )
}

export default Homepage
