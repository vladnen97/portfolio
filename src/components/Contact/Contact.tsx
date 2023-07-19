import React, {FormEvent, useState} from 'react';
import s from './Contact.module.css'
import {Fade} from 'react-awesome-reveal';
import axios from 'axios';

export const Contact = () => {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post(`http://localhost:3010/feedback`, {name, phone, email, title, message})
            .then((res) => alert(res.data.message))
    }

    return (
        <section className={s.contact} id={'contact'}>
            <Fade delay={300}>
                <h2 className={s.heading}>Contact <span>Me!</span></h2>
            </Fade>
            <form onSubmit={submitHandler}>
                <div className={s.inputBox}>
                    <Fade cascade damping={0.3}>
                        <input type="text"
                               placeholder={'Enter your name'}
                               name={'name'} value={name}
                               onChange={(e) => setName(e.target.value)}/>
                        <input type="number"
                               placeholder={'Enter your phone'}
                               name={'phone'} value={phone}
                               onChange={(e) => setPhone(e.target.value)}/>
                        <input type="email"
                               placeholder={'Enter your email'}
                               name={'email'}
                               required
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text"
                               placeholder={'Enter title'}
                               name={'title'}
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}/>
                        <textarea cols={30}
                                  rows={10}
                                  placeholder={'Your message'}
                                  name={'message'}
                                  required
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}></textarea>
                    </Fade>
                </div>
                <button type="submit" className={s.btn}>Send</button>
            </form>
        </section>
    );
};

