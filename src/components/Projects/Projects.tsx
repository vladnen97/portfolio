import React from 'react';
import s from './Projects.module.css'
import {Projectbox} from './Projectbox/Projectbox';
import {Fade} from 'react-awesome-reveal';

export const Projects = () => {
    const projects = [
        {
            id: 1,
            img: 'https://placehold.jp/400x300.png',
            linkGitHub: 'https://www.google.com',
            linkDeploy: 'https://www.google.com',
            title: 'Social Network',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 2,
            img: 'https://placehold.jp/400x300.png',
            linkGitHub: 'https://www.google.com',
            linkDeploy: 'https://www.google.com',
            title: 'ToDo',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 3,
            img: 'https://placehold.jp/400x300.png',
            linkGitHub: 'https://www.google.com',
            linkDeploy: 'https://www.google.com',
            title: 'Homework',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 4,
            img: 'https://placehold.jp/400x300.png',
            linkGitHub: 'https://www.google.com',
            linkDeploy: 'https://www.google.com',
            title: 'Cards',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ]

    const mappedProjects = projects.map(el => <Projectbox key={el.id} img={el.img} linkGitHub={el.linkGitHub}
                                                          title={el.title} linkDeploy={el.linkDeploy}
                                                          desc={el.desc}/>)


    return (
        <section className={s.projects} id={'projects'}>
            <Fade delay={300}>
                <h2 className={s.heading}>My <span>Projects</span></h2>
            </Fade>
            <div className={s.container}>
                {mappedProjects}
            </div>
        </section>
    )
}

