import React from 'react';
import s from './Skills.module.css'
import {Fade} from 'react-awesome-reveal';
import {Skillbox} from './Skillbox/SkillBox';
import sass from '../../assets/svg/sass.svg'
import nextjs from '../../assets/svg/next-js.svg'
import redux from '../../assets/svg/redux.svg'
import storybook from '../../assets/svg/storybook.svg'
import unitTesting from '../../assets/svg/unit-testing.svg'
import html from '../../assets/svg/html.svg'
import css from '../../assets/svg/css.svg'
import js from '../../assets/svg/js.svg'
import react from '../../assets/svg/react.svg'
import ts from '../../assets/svg/ts.svg'


export const Skills = () => {
    const skills = [
        {
            id: 1,
            svg: html,
            title: 'HTML',
            desc: 'Hypertext markup language for viewing web pages in a browser.'
        },
        {
            id: 2,
            svg: css,
            title: 'CSS',
            desc: 'Document appearance description language'
        },
        {
            id: 3,
            svg: js,
            title: 'JavaScript',
            desc: 'A programming language that allows you to create dynamically updated content.'
        },
        {
            id: 4,
            svg: react,
            title: 'React',
            desc: 'An open source library for developing user interfaces.'
        },
        {
            id: 5,
            svg: redux,
            title: 'Redux',
            desc: 'An open source JavaScript library for managing application state.'
        },
        {
            id: 11,
            svg: redux,
            title: 'Redux Toolkit',
            desc: 'Package that makes working with Redux easier.'
        },
        {
            id: 12,
            svg: redux,
            title: 'RTK Query',
            desc: 'Powerful tool for loading and caching data.'
        },
        {
            id: 6,
            svg: ts,
            title: 'TypeScript',
            desc: 'A programming language that extends the capabilities of JavaScript.'
        },
        {
            id: 7,
            svg: sass,
            title: 'SASS',
            desc: 'A CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files.'
        },
        {
            id: 8,
            svg: nextjs,
            title: 'Next.js',
            desc: 'A JavaScript framework that uses React to build Server Side Render (SSR) applications and statically generated websites.'
        },
        {
            id: 9,
            svg: storybook,
            title: 'StoryBook',
            desc: 'Is a JavaScript tool for organizing user interfaces that makes component development, testing, and documentation more efficient and easier.'
        },
        {
            id: 10,
            svg: unitTesting,
            title: 'Unit Testing',
            desc: 'A process in programming that allows you to check for the correctness of individual modules of the source code of the program.'
        },
    ]

    const mappedSkills = skills.map(el => <Skillbox key={el.id} svg={el.svg} title={el.title} desc={el.desc}/>)


    return (
        <section className={s.skills} id={'skills'}>
            <Fade delay={300}>
                <h2 className={s.heading}>My <span>Skills</span></h2>
            </Fade>
            <div className={s.container}>
                {mappedSkills}
            </div>

        </section>
    );
};

