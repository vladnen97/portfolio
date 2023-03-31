import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <a href="src/components/Header/Header#home" className={s.logo}>Portfolio</a>

            {/*<i className='bx bx-menu' id={'burgerMenu'}></i>*/}

            <nav className={s.navbar}>
                <a href="src/components/Header/Header#home" className={s.active}>Home</a>
                <a href="src/components/Header/Header#skills">Skills</a>
                <a href="src/components/Header/Header#projects">Projects</a>
                <a href="src/components/Header/Header#contact">Contact</a>
            </nav>
        </header>
    )
}