import React, {useState} from 'react';
import s from './Header.module.css'


export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <header className={s.header}>
            <a href="#home" className={s.logo}>Portfolio</a>

            <i className={isOpen ? 'bx bx-x' : 'bx bx-menu'} id={s.menu} onClick={() => setIsOpen(!isOpen)}></i>

            <nav className={s.navbar + (isOpen ? ' ' + s.active : '')}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
        </header>
    )
}