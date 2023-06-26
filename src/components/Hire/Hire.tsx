import React from 'react';
import s from './Hire.module.css'
import {Fade} from 'react-awesome-reveal';

export const Hire = () => {
    return (
        <section className={s.hire}>
            <Fade delay={300} cascade>
                <h2 className={s.heading}>I consider options for <span>remote work</span></h2>
                <a href="#contact" className={s.btn}>Hire me</a>
            </Fade>
        </section>
    );
};

