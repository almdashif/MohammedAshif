import React from 'react'
import './experience.css'
import logo from '../../assets/nanosoftlogo.png'
import zeonerlogo from '../../assets/zeonerlogo.png'
const Experience = () => {
    return (
        <section id='Experience'>
            <div className="ExperienceHeadings">
                <h1>Experience</h1>
                <h5>My work experience as a software engineer and working on different companies and projects.</h5>
            </div>

            <div className="experienceParent">
              
                <div className="ExperienceContainer">
                    <div className="experienceBox experience-left">
                        <div className="experienceBoxHeading">
                            <div className="companyImage">
                                <img src={logo} alt="experienceLogo" />
                            </div>
                            <div className="titles">
                                <h4>Frontend Developer (Mobile & Web)</h4>
                                <h5>Nanosoft Engineers India pvt ltd </h5>
                                <p>June 2023 - Present</p>
                            </div>

                        </div>
                        <p>Working on the frontend of the web application using ReactJS, Redux, and TailwindCSS</p>
                        <div className="experienceTechStacks">
                            <strong>Skills:</strong>
                            <ul>
                                <li>React JS</li>
                                <li>Redux</li>
                                <li>CSS3</li>
                                <li>Node JS</li>
                                <li>Express JS</li>
                                <li>Typescript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experienceBox experience-right">
                        <div className="experienceBoxHeading">
                            <div className="companyImage">
                                <img src={logo} alt="experienceLogo" />
                            </div>
                            <div className="titles">
                                <h4>Web Developer & Digital Marketing</h4>
                                <h5>Digiminds</h5>
                                <p>June 2023 - Present</p>
                            </div>

                        </div>
                        <p>Working on the frontend of the web application using ReactJS, Redux, and TailwindCSS</p>
                        <div className="experienceTechStacks">
                            <strong>Skills:</strong>
                            <ul>
                                <li>React JS</li>
                                <li>Redux</li>
                                <li>CSS3</li>
                                <li>Node JS</li>
                                <li>Express JS</li>
                                <li>Typescript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experienceBox experience-left">
                        <div className="experienceBoxHeading">
                            <div className="companyImage">
                                <img src={zeonerlogo} alt="experienceLogo" />
                            </div>
                            <div className="titles">
                                <h4>Frontend Developer</h4>
                                <h5>Zeoner India Pvt Ltd</h5>
                                <p>June 2023 - Present</p>
                            </div>

                        </div>
                        <p>Working on the frontend of the web application using ReactJS, Redux, and TailwindCSS</p>
                        <div className="experienceTechStacks">
                            <strong>Skills:</strong>
                            <ul>
                                <li>React JS</li>
                                <li>Redux</li>
                                <li>CSS3</li>
                                <li>Node JS</li>
                                <li>Express JS</li>
                                <li>Typescript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience
