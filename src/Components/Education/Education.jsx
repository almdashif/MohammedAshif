import React from 'react'
import './education.css'
import logo from '../../assets/nanosoftlogo.png'
import zeonerlogo from '../../assets/zeonerlogo.png'
const Education = () => {
    return (
        <section id='Education'>
            <div className="EducationHeadings">
                <h1>Education</h1>
                <h5>My education has been a journey of self-discovery and growth. My educational details are as follows.</h5>
            </div>

            <div className="EducationParent">

                <div className="EducationContainer">
                    <div className="EducationBox">
                        <div className="EducationBoxHeading">
                            <div className="companyImage">
                                <img src='https://imgs.search.brave.com/rSRJiZ9dR4JTdT-MhjVCd82pdQ2MPx1Lqwwa2RunPGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxLzA4/LzNhLzAxMDgzYWE4/ZWQyMTdlYjI0MjE3/YzkxZThmMDUyZDhi/LmpwZw' alt="EducationLogo" />
                            </div>
                            <div className="titles">
                                <h4>Bharathiyar University, Coimbatore</h4>
                                <h5>MCA - Master of Computer Application </h5>
                                <p>June 2023 - June 2025</p>
                            </div>

                        </div>
                        <div className="EducationTechStacks">
                            <strong>Grade:</strong>
                            <span>8.71 CGPA</span>
                        </div>
                        <p>Working on the frontend of the web application using ReactJS, Redux, and TailwindCSS</p>

                    </div>

                    <div className="EducationBox">
                        <div className="EducationBoxHeading">
                            <div className="companyImage">
                                <img src='https://imgs.search.brave.com/-hpPokzHXqqEcAntJH5_aetDS_cM0PdNVlv_WCq8EhQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91bml2/ZXJzaXR5a2FydC5i/LWNkbi5uZXQvL0Nv/bnRlbnQvdXBsb2Fk/L2FkbWluLzV3bGhk/dTR4LnhicS5qcGc' alt="EducationLogo" />
                            </div>
                            <div className="titles">
                                <h4>Bishop Appasamy College, Coimbatore</h4>
                                <h5>Bsc - Bachelor of Computer Science </h5>
                                <p>June 2020 - June 2023</p>
                            </div>

                        </div>
                        <div className="EducationTechStacks">
                            <strong>Grade:</strong>
                            <span>8.71 CGPA</span>
                        </div>
                        <p>Working on the frontend of the web application using ReactJS, Redux, and TailwindCSS</p>

                    </div>

                    <div className="EducationBox">
                        <div className="EducationBoxHeading">
                            <div className="companyImage">
                                <img src='https://noorsait.org/assets/images/logo.jpg' alt="EducationLogo" />
                            </div>
                            <div className="titles">
                                <h4>NS Matriculation Hr Sec School, Coimbatore</h4>
                                <h5>HSC - Higher Secondary Certificate</h5>
                                <p>June 2017 - June 2019</p>
                            </div>

                        </div>
                        <div className="EducationTechStacks">
                            <strong>Grade:</strong>
                            <span>61%</span>
                        </div>
                        <p>Working on the frontend of the web application using ReactJS, Redux, and TailwindCSS</p>

                    </div>

                    <div className="EducationBox">
                        <div className="EducationBoxHeading">
                            <div className="companyImage">
                                <img src='https://noorsait.org/assets/images/logo.jpg' alt="EducationLogo" />
                            </div>
                            <div className="titles">
                                <h4>NS Matriculation Hr Sec School, Coimbatore</h4>
                                <h5>SSLC - Secondary School Leaving Certificate</h5>
                                <p>June 2015 - June 2017</p>
                            </div>

                        </div>
                        <div className="EducationTechStacks">
                            <strong>Grade:</strong>
                            <span>93%</span>
                        </div>
                        <p>Working on the frontend of the web application using ReactJS, Redux, and TailwindCSS</p>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Education
