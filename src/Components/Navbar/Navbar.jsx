import React, { useState } from 'react'
import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [ShowNav ,setShowNav] = useState(false)
    return (
        <nav>
            <div className="navContainer">
                <div className="navIcon">
                    <a href="#">Portfolio</a>
                </div>
                <div className="navLinks">
                    <ul>
                        <li><a href="#Home">About</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Project">Projects</a></li>
                        <li><a href="#Education">Education</a></li>
                    </ul>
                </div>
                <div className="navBtn">
                    <a href="http://">Resume</a>
                    <a href="" id='hamburger'><RxHamburgerMenu size={20}/></a>
                </div>
        
            </div>
        </nav>
    )
}

export default Navbar
