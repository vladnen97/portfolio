import React from 'react';
import s from './Projects.module.css'
import {Projectbox} from './Projectbox/Projectbox';
import {Fade} from 'react-awesome-reveal';
import  socialNetwork  from '../../assets/social-network.jpg'
import  flashCards  from '../../assets/flashcards.png'
import  toDoList  from '../../assets/to-do-list.jpg'
import  homework  from '../../assets/homework.jpg'

export const Projects = () => {
    const projects = [
        {
            id: 1,
            img: socialNetwork,
            linkGitHub: 'https://github.com/vladnen97/social-network',
            linkDeploy: 'https://vladnen97.github.io/social-network',
            title: 'Social Network',
            desc: 'An online application that is used for communication, dating, creating social relationships between people who have similar interests. React, Redux, TS, Axios, Ant Design'
        },
        {
            id: 2,
            img: toDoList,
            linkGitHub: 'https://github.com/vladnen97/todo-list',
            linkDeploy: 'https://vladnen97.github.io/todo-list',
            title: 'Todolist',
            desc: 'Todolist is a to-do list and task manager. It will help you gain concentration, organization and peace. React, RTK, TS, MUI, Axios, StoryBook'
        },
        {
            id: 3,
            img: homework,
            linkGitHub: 'https://github.com/vladnen97/homework',
            linkDeploy: 'http://vladnen97.github.io/homework',
            title: 'Homework',
            desc: 'My homework assignments that I did during my studies.'
        },
        {
            id: 4,
            img: flashCards,
            linkGitHub: 'https://www.google.com',
            linkDeploy: 'https://www.google.com',
            title: 'Cards',
            desc: 'Not implemented yet'
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

