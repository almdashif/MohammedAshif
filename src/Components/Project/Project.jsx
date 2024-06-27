import React from 'react'
import './project.css'
import logo from '../../assets/nanosoftlogo.png'
import zeonerlogo from '../../assets/zeonerlogo.png'
const Project = () => {
    return (
        <section id='Project'>
            <div className="ProjectHeadings">
                <h1>Projects</h1>
                <h5>I have worked on a wide range of projects from Web Apps to Mobile Apps (IOS & Android). Here are some of my projects.</h5>
            </div>

            <div className="ProjectContainer">
                <div className="ProjectBox">
                    <div className="projectBannerImg">
                        <img src="https://cdn.dribbble.com/userupload/14605196/file/original-d44cea1dbc4ebe4f99ae59e21ddf5d58.png?resize=1024x768" alt="" />
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
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error illum quisquam ex hic repellendus libero similique corrupti in animi fugiat. Numquam animi nulla illum sapiente laborum ipsam molestias culpa perferendis.</p>
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
