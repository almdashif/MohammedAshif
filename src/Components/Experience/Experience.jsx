import React from 'react'
import './experience.css'
import logo from '../../assets/nanosoftlogo.png'
import zeonerlogo from '../../assets/zeonerlogo.png'
import DigimindsLogo from '../../assets/DigimindsLogo.png'
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
                                <img src={logo} alt="Nanosoft logo" />
                            </div>
                            <div className="titles">
                                <h4>Frontend Developer (Mobile & Web)</h4>
                                <h5>Nanosoft Engineers India pvt ltd </h5>
                                <p>June 2023 - Present</p>
                            </div>

                        </div>
                        <p>
                            As a Frontend Developer at Nanosoft Engineers India Pvt Ltd, I specialized in creating intuitive and responsive user interfaces for both mobile and web applications. Leveraging my expertise in React Native and React.js, I contributed to the development of visually appealing and functional frontends that enhanced user experience across multiple platforms.
                            During my tenure, I collaborated closely with UX/UI designers Database Engineers and backend developers to ensure seamless integration of frontend elements with backend logic.Overall, my experience at Nanosoft Engineers India Pvt Ltd equipped me with valuable skills in frontend development, teamwork, and problem-solving, making significant contributions to the company's projects and goals</p>
                        <div className="experienceTechStacks">
                            <strong>Skills:</strong>
                            <ul>
                                <li>React Native</li>
                                <li>React JS</li>
                                <li>Vite JS</li>
                                <li>Context API</li>
                                <li>HTML 5</li>
                                <li>CSS3</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experienceBox experience-right">
                        <div className="experienceBoxHeading">
                            <div className="companyImage" >
                                <img src={DigimindsLogo} alt="DigimindsLogo" />
                            </div>
                            <div className="titles">
                                <h4>Web Developer & Digital Marketing</h4>
                                <h5>Digiminds</h5>
                                <p>June 2022 - June 2023</p>
                            </div>

                        </div>
                        <p>As a Web Developer & Digital Marketing specialist at Digiminds,My responsibilities encompassed designing and developing dynamic websites using HTML, CSS, JavaScript, and CMS platforms like WordPress.In the realm of digital marketing, I leveraged SEO techniques, SEM campaigns, and social media strategies to drive traffic, increase brand visibility, and generate leads. Utilizing analytical tools such as Google Analytics and SEO auditing tools.My proactive approach and dedication to delivering results contributed to achieving organizational goals and maintaining client satisfaction.Overall, my experience at Digiminds equipped me with a comprehensive skill set in web development and digital marketing, enabling me to contribute effectively to projects and drive business growth through innovative digital solutions.</p>
                        <div className="experienceTechStacks">
                            <strong>Skills:</strong>
                            <ul>
                                <li>React JS</li>
                                <li>Wordpress</li>
                                <li>WooCommerce</li>
                                <li>HTML 5</li>
                                <li>CSS3</li>
                                <li>Javascript</li>
                                <li>Mail Chimp</li>
                                <li>SEO Optimization</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experienceBox experience-left">
                        <div className="experienceBoxHeading">
                            <div className="companyImage">
                                <img src={zeonerlogo} alt="zeonerlogo" />
                            </div>
                            <div className="titles">
                                <h4>Frontend Developer</h4>
                                <h5>Zeoner India Pvt Ltd</h5>
                                <p>Sept 2021 - Feb 2022</p>
                            </div>

                        </div>
                        <p>During my internship as a Frontend Developer at Zeoner India Pvt Ltd, I gained valuable hands-on experience in creating responsive and user-friendly interfaces for web applications. Under the guidance of senior developers, I worked with HTML, CSS, and JavaScript to implement frontend designs and functionalities.Throughout my internship, I collaborated closely with team members, learning Agile development practices and contributing to sprint planning meetings. My internship at Zeoner India Pvt Ltd provided me with a solid foundation in frontend development principles, enhancing my skills in problem-solving and teamwork. It was a valuable learning experience that sparked my enthusiasm for pursuing a career in web development.</p>
                        <div className="experienceTechStacks">
                            <strong>Skills:</strong>
                            <ul>
                                <li>HTMl 5</li>
                                <li>CSS3</li>
                                <li>Javascript</li>
                                <li>Wordpress</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience
