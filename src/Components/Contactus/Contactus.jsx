import React, { useRef, useState } from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser';
const Contactus = () => {
    const [Name, setName] = useState(null)
    const [Email, setEmail] = useState(null)
    const [Subject, setSubject] = useState(null)
    const [Message, setMessage] = useState(null)


    const [ShowNameError, setShowNameError] = useState(false)
    const [ShowEmailError, setShowEmailError] = useState(false)
    const [ShowSubjectError, setShowSubjectError] = useState(false)
    const [ShowMessageError, setShowMessageError] = useState(false)
    const [ShowMsg, setShowMsg] = useState(false)
    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
      
      
       

        if (Name && Email && Subject && Message) {
            setShowMsg(true);
            emailjs.sendForm('service_i9qurwh', 'template_vjoz5vk', form.current, {
                publicKey: 'Td21T8IWYP7Cjpnq-',
            })
                .then(
                    () => {
                        responseSubmitted()
                   
                        setShowMessageError(false)
                        setShowNameError(false)
                        setShowEmailError(false)
                        setShowSubjectError(false)
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            if (Name == null) {
                setShowNameError(true)
            } else if (!Email) {
                setShowEmailError(true)
            } else if (!Subject) {
                setShowSubjectError(true)
            } else if (!Message) {
                setShowMessageError(true)
            } else {
                setShowNameError(false)
                setShowEmailError(false)
            }
        }


    }

    const responseSubmitted = () => {
  
        setTimeout(() => {
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            setShowMsg(false);
        }, 7000);
    }
    return (
        <section id='Contact'>
            <div className="ContactusHeadings">
                <h1>Contact Me</h1>
                <h5>Feel free to reach out to me for any questions or opportunities!</h5>
            </div>

            <div className="ContactusParent">
                <h4>Email Me</h4>
                <form ref={form} onSubmit={onSubmit} id='form'>
                    <input type="text" placeholder='Your Name *' value={Name} onChange={(e) => { setName(e.target.value) }} name="name" id="" />
                    {ShowNameError ? <span>Name is required</span> : null}
                    <input type="text" placeholder='Your Email *' value={Email} onChange={(e) => { setEmail(e.target.value) }} name="email" id="" />
                    {ShowEmailError ? <span>Email is required</span> : null}
                    <input type="text" placeholder='Subject *' value={Subject} onChange={(e) => { setSubject(e.target.value) }} name="subject" id="" />
                    {ShowSubjectError ? <span>Subject is required</span> : null}
                    <textarea type="text" placeholder='Message *' rows={5} value={Message} onChange={(e) => { setMessage(e.target.value) }} name="message" id="" />
                    {ShowMessageError ? <span>Message is required</span> : null}
                    <button type='submit'>Send</button>

                </form>
            </div>
            {ShowMsg ?
                <div className='EmailTemplate'>
                    <h4>Dear {Name ? Name : 'Client !'}</h4>
                    <h2>Thanks for writing to us <img src="https://imgs.search.brave.com/6hBDmLlUv9oHeevI-vcyUcF0enVYOlj7EAr43BPdkSo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbW9q/aWdyYXBoLm9yZy9t/ZWRpYS9qb3lwaXhl/bHMvcGFydHktcG9w/cGVyXzFmMzg5LnBu/Zw" alt="partycone" /></h2>
                    <p>We got your email and within 2 days, we will get in touch.</p>
                </div>
                : null}

        </section>
    )
}

export default Contactus
