import React from 'react';
import s from './Skills.module.css'
import {Skillbox} from './Skillbox/Skillbox';


export const Skills = () => {
    const skills = [
        {
            id: 1,
            class: 'bx bxl-html5',
            title: 'HTML',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt eaque fugiat minima!'
        },
        {
            id: 2,
            class: 'bx bxl-css3',
            title: 'CSS',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt eaque fugiat minima!'
        },
        {
            id: 3,
            class: 'bx bxl-javascript',
            title: 'JavaScript',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt eaque fugiat minima!'
        },
        {
            id: 4,
            class: 'bx bxl-react',
            title: 'REACT',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt eaque fugiat minima!'
        },
        {
            id: 5,
            class: 'bx bxl-redux',
            title: 'REDUX',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt eaque fugiat minima!'
        },
    ]

    const mappedSkills = skills.map(el => <Skillbox key={el.id} class={el.class} title={el.title} desc={el.desc}/>)


    return (
        <section className={s.skills} id={'skills'}>
            <h2 className={s.heading}>My <span>Skills</span></h2>

            <div className={s.container}>
                {mappedSkills}
            </div>

        </section>
    );
};

