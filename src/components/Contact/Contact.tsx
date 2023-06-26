import React from 'react';
import s from './Contact.module.css'
import {Fade} from 'react-awesome-reveal';

export const Contact = () => {
    return (
        <section className={s.contact} id={'contact'}>
            <Fade delay={300}>
                <h2 className={s.heading}>Contact <span>Me!</span></h2>
            </Fade>
            <form>
                <div className={s.inputBox}>
                    <Fade cascade damping={0.3}>
                        <input type="text" placeholder={'Enter your name'} required/>
                        <input type="number" placeholder={'Enter your phone'}/>
                        <input type="email" placeholder={'Enter your email'} required/>
                        <textarea name="" id="" cols={30} rows={10} placeholder={'Your message'}></textarea>
                    </Fade>
                </div>
                <button type="submit" className={s.btn}>Send</button>
            </form>
        </section>
    );
};

