import React, { useRef, useState } from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser';
import validation from '../../../utils/Validation';
import { RxCross2 } from "react-icons/rx";
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
    async function onSubmit(e) {
        e.preventDefault();

        await setErrors(validation(Values))
        const hasErrors = await Object.keys(validation(Values)).length != 0

        if (!hasErrors) {
            await setShowMsg(true);
            await emailjs.sendForm('service_i9qurwh', 'template_vjoz5vk', form.current, {
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
            setValues({
                name: "",
                email: "",
                subject: "",
            })
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
                    <input type="text" placeholder='Your Name *' value={Values.name} onChange={handleInput} name="name" id="" />
                    {Errors.name && <span>{Errors.name}</span>}
                    <input type="text" placeholder='Your Email *' value={Values.email} onChange={handleInput} name="email" id="" />
                    {Errors.email && <span>{Errors.email}</span>}
                    <input type="text" placeholder='Subject *' value={Values.subject} onChange={handleInput} name="subject" id="" />
                    {Errors.subject && <span>{Errors.subject}</span>}
                    <textarea type="text" placeholder='Message *' value={Values.message} rows={5} onChange={handleInput} name="message" id="" />
                    {Errors.message && <span>{Errors.message}</span>}
                    <button type='submit'>Send</button>

                </form>
            </div>
            {ShowMsg ?
                <div className='EmailTemplate'>
                    <h4>Dear {Values.name ? Values.name : 'Client !'}</h4>
                    <h2>Thanks for writing to us <img src="https://imgs.search.brave.com/6hBDmLlUv9oHeevI-vcyUcF0enVYOlj7EAr43BPdkSo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbW9q/aWdyYXBoLm9yZy9t/ZWRpYS9qb3lwaXhl/bHMvcGFydHktcG9w/cGVyXzFmMzg5LnBu/Zw" alt="partycone" /></h2>
                    <p>We got your email and within 2 days, we will get in touch.</p>
                    <a href="" style={{ color: '#fff', fontweight: 800, position: 'absolute', top: '5%', right: '5%', padding: '1rem' }} onClick={(e) => {  responseSubmitted() }}><RxCross2 size={24} /></a>

                </div>
                : null}

        </section>
    )
}

export default Contactus
