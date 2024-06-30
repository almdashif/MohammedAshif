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
                        {/* <div className="EducationTechStacks">
                            <strong>Grade:</strong>
                            <span>8.71 CGPA</span>
                        </div> */}
                        <p>I am currently pursuing my Master of Computer Application (MCA) degree at Bharathiyar University, Coimbatore, through online mode. This program is designed to deepen my understanding of advanced concepts in computer science and enhance my skills in software development, systems analysis, and computer applications.Throughout this online MCA program, I am engaged in a comprehensive curriculum that covers a wide range of subjects including programming languages, database management systems, web technologies, software engineering, and more.</p>

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
                        <p>I pursued my Bachelor of Computer Science (BSc) at Bishop Appasamy College in Coimbatore, where I graduated with distinction, achieving an impressive CGPA of 8.71. This three-year journey was enriching, providing me with comprehensive knowledge and practical skills in the field of computer science. It underscores my commitment to continuous learning and personal growth in the field of computer science.My experience at Bishop Appasamy College has equipped me with a solid foundation in computer science, preparing me to pursue a successful career in the technology sector. </p>

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
                        <p>At NS Matriculation Hr Sec School in Coimbatore, I successfully completed my Higher Secondary Certificate (HSC) with a commendable achievement of 61%. This period was instrumental in shaping my academic journey and preparing me for future challenges.This experience enhanced my analytical thinking, problem-solving abilities, and overall academic resilience.It provided a solid academic foundation upon which I continue to build my career aspirations and personal growth.</p>

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
                        <p>During my time at NS Matriculation Hr Sec School in Coimbatore, I achieved outstanding academic success, graduating with a remarkable 93% in the SSLC (Secondary School Leaving Certificate) examinations. This accomplishment reflects my dedication to academic excellence and my ability to consistently perform at a high level across various subjects. It has laid a solid foundation for my future educational pursuits and career aspirations, instilling in me the confidence to tackle challenges and strive for continuous improvement.</p>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Education
