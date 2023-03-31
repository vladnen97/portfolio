import React from 'react';
import s from './Skillbox.module.css'

type SkillboxPropsType = {
    class: string
    title: string
    desc: string
}

export const Skillbox = (props: SkillboxPropsType) => {
    return (
        <div className={s.skillBox}>
            <div className={s.image}>
                <i className={props.class}></i>
            </div>
            <h3>{props.title}</h3>
            <p>
                {props.desc}
            </p>
        </div>
    )
}

