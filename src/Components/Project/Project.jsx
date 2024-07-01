import React from 'react'
import './project.css'
import SmartfmReachV5 from '../../assets/SmartfmReachV5.jpeg'

const Project = () => {
    return (
        <section id='Project'>
            <div className="ProjectHeadings">
                <h1>Projects</h1>
                <h5>I have worked on a wide range of projects from Web Apps to Mobile Apps (IOS & Android). Here are some of my projects.</h5>
            </div>

            <div className="ProjectContainer">
                <div className="ProjectBox" >
                    <div className="projectBannerImg">
                        <a href="https://play.google.com/store/apps/details?id=com.nano.smartfm.reachv5" target='__blank'>
                        <img src={SmartfmReachV5} alt="Smart FMmReachV5" />
                        </a>
                    </div>

                    <div className="techStackUsed">
                        <ul>
                            <li>React Native</li>
                            <li>CSS3</li>
                            <li>Axios</li>
                            <li>Context API</li>
                            <li>Javascript</li>
                            <li>Push Notification</li>
                            <li>Firebase</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="projectDetails">
                        <h5>SmartFM Reach V5 - Facility Management Application</h5>
                        <span>Jun 2023 - Jul 2023</span>
                        <p>
                        • Leveraged a component-based architecture to create a robust and extensible user interface.<br />
                        • Implemented Redux for efficient state management, ensuring seamless data flow and consistency across the entire application.<br />
                        • Employed Webpack to bundle and optimize the application for production, resulting in faster load times and improved performance.<br />
                        • Implemented push notifications using Firebase Cloud Messaging (FCM).<br />
                        • Actively kept up-to-date with industry trends and best practices in React JS, Node JS, and SQL.<br />
                        • Collaborated closely with cross-functional teams, including designers and product managers, to deliver high-quality software products.<br />
                        </p>
                    </div>

                </div>
                <div className="ProjectBox">
                    <div className="projectBannerImg">
                        <img src="https://cdn.dribbble.com/userupload/14531612/file/original-c92570c2c606a057eb3bd5392d33ec03.png?resize=1024x768" alt="" />
                    </div>

                    <div className="techStackUsed">
                        <ul>
                            <li>Docker</li>
                            <li>React Native</li>
                            <li>NodeJs</li>
                            <li>Express JS</li>
                            <li>Netlify</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <div className="projectDetails">
                        <h5>Trackify</h5>
                        <span>Jun 2023 - Jul 2023</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error illum quisquam ex hic repellendus libero similique corrupti in animi fugiat.</p>
                    </div>

                </div>
                <div className="ProjectBox">
                    <div className="projectBannerImg">
                        <img src="https://cdn.dribbble.com/userupload/14969322/file/original-e4174a568a4f4ac98f2fe71cfc50a4c6.png?resize=1024x768" alt="" />
                    </div>

                    <div className="techStackUsed">
                        <ul>
                            <li>Docker</li>
                            <li>React Native</li>
                            <li>NodeJs</li>
                            <li>Express JS</li>
                            <li>Netlify</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <div className="projectDetails">
                        <h5>Trackify</h5>
                        <span>Jun 2023 - Jul 2023</span>
                        <p>Numquam animi nulla illum sapiente laborum ipsam molestias culpa perferendis.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Project
