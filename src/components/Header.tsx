import React from 'react';


export const Header = () => {
    return (
        <header className={'header'}>
            <a href="#home" className={'logo'}>Portfolio</a>

            <i className='bx bx-menu' id={'burgerMenu'}></i>

            <nav className={'navbar'}>
                <a href="#home" className={'active'}>Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}