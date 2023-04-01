import React from 'react';
import s from './Hire.module.css'

export const Hire = () => {
    return (
        <section className={s.hire}>
            <h2 className={s.heading}>I consider options for  <span>remote work</span></h2>

            <a href="#contact" className={s.btn}>Hire me</a>
        </section>
    );
};

