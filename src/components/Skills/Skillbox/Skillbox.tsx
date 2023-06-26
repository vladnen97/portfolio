import React from 'react';
import s from './Skillbox.module.css'
import {Fade} from 'react-awesome-reveal';

type SkillboxPropsType = {
    class: string
    title: string
    desc: string
}

export const Skillbox = (props: SkillboxPropsType) => {
    return (
        <Fade delay={300} style={{
            flex: '1 1 30rem'
        }}>
            <div className={s.skillBox}>
                <div className={s.image}>
                    <i className={props.class}></i>
                </div>
                <h3>{props.title}</h3>
                <p>
                    {props.desc}
                </p>
            </div>
        </Fade>
    )
}

