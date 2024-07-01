import React, { useState } from 'react'
import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { RiMacFill } from "react-icons/ri";
import { MdMilitaryTech } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import resume from '../../assets/Resume.pdf'
const Navbar = () => {
    const [ShowNav, setShowNav] = useState(false)
    return (
        <nav>
            <div className="navContainer">
                <div className="navIcon">
                    <a href="#">Mohammed Ashif</a>
                </div>
                <div className="navLinks">
                    <ul>
                        <li><a href="#Home">About</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Project">Projects</a></li>
                        <li><a href="#Education">Education</a></li>
                        <li><a href="#Education">Contact</a></li>
                    </ul>
                </div>
                <div className="navBtn">
                    <a href={resume} download='MohammedAshifAL_ReactNative&ReactJS_2+yrs_Resume' rel="noopener noreferrer">Resume</a>
                    <a href="" id='hamburger' onClick={(e) => { e.preventDefault(); setShowNav(true) }}><RxHamburgerMenu size={20} /></a>
                </div>
                {ShowNav ?
                    <div className="drawerParent">
                        <div className="drawer">
                            <div className="navLinks">
                                <ul>
                                    <li><a href="#Home" onClick={(e) => { setShowNav(false) }}><IoPerson size={20} id='icon' /> About</a></li>
                                    <li><a href="#skill" onClick={(e) => { setShowNav(false) }}><MdMilitaryTech size={20} id='icon' /> Skills</a></li>
                                    <li><a href="#Experience" onClick={(e) => { setShowNav(false) }}><FaBriefcase size={20} id='icon' /> Experience</a></li>
                                    <li><a href="#Project" onClick={(e) => { setShowNav(false) }}><RiMacFill size={20} id='icon' /> Projects</a></li>
                                    <li><a href="#Education" onClick={(e) => { setShowNav(false) }}><FaGraduationCap size={20} id='icon' /> Education</a></li>
                                    <li><a href="#Contact" onClick={(e) => { setShowNav(false) }}><FaMailBulk size={20} id='icon' /> Contact Me</a></li>

                                </ul>

                            </div>
                            <a href="" id='hamburger' onClick={(e) => { e.preventDefault(); setShowNav(false) }}><RxCross2 size={24} /></a>
                        </div>
                        <div className="backpress" onClick={(e) => {  setShowNav(false) }}>
                            
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </nav>
    )
}

export default Navbar
