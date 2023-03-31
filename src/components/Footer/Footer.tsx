import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.socials}>
                <a href="https://vk.com/id71946297" target={'_blank'}><i className='bx bxl-vk'></i></a>
                <a href="https://t.me/vlad_asset102" target={'_blank'}><i className='bx bxl-telegram'></i></a>
                <a href="src/components/Footer/Footer" target={'_blank'}><i
                    className='bx bxl-instagram-alt'></i></a>
                <a href="src/components/Footer/Footer#" target={'_blank'}><i className='bx bxl-linkedin'></i></a>
            </div>
            <div className={s.copyright}>
                <p>Copyright &copy; 2023 by Me | All Rights Reserved</p>
            </div>
        </footer>
    );
};

