import React from 'react';
import s from './Contact.module.css'

export const Contact = () => {
    return (
        <section className={s.contact} id={'contact'}>
            <h2 className={s.heading}>Contact <span>Me!</span></h2>

            <form action="src/components/Contact/Contact#">
                <div className={s.inputBox}>
                    <input type="text" placeholder={'Enter your name'} required/>
                    <input type="number" placeholder={'Enter your phone'}/>
                    <input type="email" placeholder={'Enter your email'} required/>
                    <textarea name="" id="" cols={30} rows={10} placeholder={'Your message'}></textarea>
                </div>
                <button type="submit" className={s.btn}>Send</button>
            </form>
        </section>
    );
};

