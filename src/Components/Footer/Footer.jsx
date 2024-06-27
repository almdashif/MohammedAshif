import React from 'react'
import './footer.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer id='Footer'>

            <div className="footerContainer">
                <h5>Mohammed Ashif A L</h5>
                <ul>
                    <li><a href="#Home">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Project">Projects</a></li>
                    <li><a href="#Education">Education</a></li>
                </ul>

                <div className="footerIcons">
                    <a href="https://wa.me/+919791851750?text=Hello there!" target='__blank'><IoLogoWhatsapp /></a>
                    <a href="https://www.instagram.com/ashif_al_mohammed" target="_blank" ><AiFillInstagram /></a>
                    <a href="https://www.linkedin.com/in/mohammed-ashif-a-l-4ab3a8211" target="_blank" ><FaLinkedin /></a>
                    <a href="mailto:ashiashi6676@gmail.com" target="__blank" ><IoMdMail /></a>
                </div>
                <p> &copy; 2024 Mohammed Ashif. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
