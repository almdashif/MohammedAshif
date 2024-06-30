import React, { useRef, useState } from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser';
import validation from '../../../utils/Validation';
const Contactus = () => {
    const [Values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [Errors, setErrors] = useState({})
    const [ShowMsg, setShowMsg] = useState(false)
    const form = useRef();


    function handleInput(e) {
        const newObj = { ...Values, [e.target.name]: e.target.value }
        setValues(newObj)
    }
    const onSubmit = (e) => {
        e.preventDefault();

        setErrors(validation(Values))
        console.log(Errors)
        const hasErrors = Object.keys(Errors).length !== 0
        if (!hasErrors) {
            setShowMsg(true);
            emailjs.sendForm('service_i9qurwh', 'template_vjoz5vk', form.current, {
                publicKey: 'Td21T8IWYP7Cjpnq-',
            })
                .then(
                    () => {
                        responseSubmitted()
                    },
                    (error) => {
                        console.log('FAILED....', error.text);
                    },
                );
        }


    }

    const responseSubmitted = () => {

        setTimeout(() => {
            setShowMsg(false);
        }, 5000);
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
                    <input type="text" placeholder='Your Name *' onChange={handleInput} name="name" id="" />
                    {Errors.name && <span>{Errors.name}</span>}
                    <input type="text" placeholder='Your Email *' onChange={handleInput} name="email" id="" />
                    {Errors.email && <span>{Errors.email}</span>}
                    <input type="text" placeholder='Subject *' onChange={handleInput} name="subject" id="" />
                    {Errors.subject && <span>{Errors.subject}</span>}
                    <textarea type="text" placeholder='Message *' rows={5} onChange={handleInput} name="message" id="" />
                    {Errors.message && <span>{Errors.message}</span>}
                    <button type='submit'>Send</button>

                </form>
            </div>
            {ShowMsg ?
                <div className='EmailTemplate'>
                    <h4>Dear {Values.name ? Values.name : 'Client !'}</h4>
                    <h2>Thanks for writing to us <img src="https://imgs.search.brave.com/6hBDmLlUv9oHeevI-vcyUcF0enVYOlj7EAr43BPdkSo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbW9q/aWdyYXBoLm9yZy9t/ZWRpYS9qb3lwaXhl/bHMvcGFydHktcG9w/cGVyXzFmMzg5LnBu/Zw" alt="partycone" /></h2>
                    <p>We got your email and within 2 days, we will get in touch.</p>
                </div>
                : null}

        </section>
    )
}

export default Contactus
