import React from 'react';

export const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className="socials">
                <a href="https://vk.com/id71946297" target={'_blank'}><i className='bx bxl-vk'></i></a>
                <a href="https://t.me/vlad_asset102" target={'_blank'}><i className='bx bxl-telegram'></i></a>
                <a href="https://www.instagram.com/darkdescent97/" target={'_blank'}><i
                    className='bx bxl-instagram-alt'></i></a>
                <a href="#" target={'_blank'}><i className='bx bxl-linkedin'></i></a>
            </div>
            <div className={'copyright'}>
                <p>Copyright &copy; 2023 by Me | All Rights Reserved</p>
            </div>
        </footer>
    );
};

