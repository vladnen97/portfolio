import React from 'react';
import s from './Projectbox.module.css'
import {Fade} from 'react-awesome-reveal';

type ProjectboxPropsType = {
    img: string
    link: string
    title: string
    desc: string
}

export const Projectbox = (props: ProjectboxPropsType) => {
    return (
        <Fade delay={300}>
            <div className={s.projectBox}>
                <div className={s.image}>
                    <img src={props.img} alt="project"/>
                    <div className={s.mask}>
                        <a href={props.link} target="_blank"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>
                <div className={s.content}>
                    <h4>{props.title}</h4>
                    <p>
                        {props.desc}
                    </p>
                </div>
            </div>
        </Fade>
    )
}

