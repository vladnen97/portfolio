import React from 'react';
import s from './Projectbox.module.css'
import {Fade} from 'react-awesome-reveal';

type ProjectboxPropsType = {
    img: string
    linkGitHub: string
    linkDeploy: string
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
                        <div style={{fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
                            <a href={props.linkGitHub} target="_blank"><i className="bx bx-link-external"></i></a>GitHub
                        </div>
                        <div style={{fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
                            <a href={props.linkDeploy} target="_blank"><i className="bx bx-link-external"></i></a>Deploy
                        </div>
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

