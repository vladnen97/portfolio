import React, {useState} from 'react';
import s from './Header.module.css'
import {Link} from 'react-scroll';


export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <span className={s.logo}>Portfolio</span>
                <i className={isOpen ? 'bx bx-x' : 'bx bx-menu'} id={s.menu} onClick={() => setIsOpen(!isOpen)}></i>
            </div>

            <nav className={s.navbar + (isOpen ? ' ' + s.active : '')}>
                <Link activeClass={s.active} to={'home'} spy={true} smooth={true} offset={0}
                      onClick={() => setIsOpen(false)}>
                    Home
                </Link>
                <Link activeClass={s.active} to={'skills'} spy={true} smooth={true} offset={1}
                      onClick={() => setIsOpen(false)}>
                    Skills
                </Link>
                <Link activeClass={s.active} to={'projects'} spy={true} smooth={true} offset={1}
                      onClick={() => setIsOpen(false)}>
                    Projects
                </Link>
                <Link activeClass={s.active} to={'contact'} spy={true} smooth={true} offset={1}
                      onClick={() => setIsOpen(false)}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}