import React from 'react';
import s from './Projects.module.css'
import {Projectbox} from './Projectbox/Projectbox';

export const Projects = () => {
    const projects = [
        {
            id: 1,
            img: "https://placehold.jp/400x300.png",
            link: "https://www.google.com",
            title: 'Social Network',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 2,
            img: 'https://placehold.jp/400x300.png',
            link: 'https://www.google.com',
            title: 'ToDo',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 3,
            img: 'https://placehold.jp/400x300.png',
            link: 'https://www.google.com',
            title: 'Social Network',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 4,
            img: 'https://placehold.jp/400x300.png',
            link: 'https://www.google.com',
            title: 'ToDo',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ]

    const mappedProjects = projects.map(el => <Projectbox key={el.id} img={el.img} link={el.link} title={el.title} desc={el.desc}/>)


    return (
        <section className={s.projects} id={'projects'}>
            <h2 className={s.heading}>My <span>Projects</span></h2>

            <div className={s.container}>
                {mappedProjects}
            </div>
        </section>
    )
}

