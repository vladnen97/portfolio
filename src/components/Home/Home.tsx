import React from 'react';
import s from './Home.module.css'
import ReactTypingEffect from 'react-typing-effect';

export const Home = () => {
    return (
        <section className={s.home} id={'home'}>
            <div className={s.content}>
                <h3>Hello, It's Me</h3>
                <h1>Vlad Nenashkin</h1>
                <h3>And I'm a <span>
                    <ReactTypingEffect
                        text={'React Frontend Developer'}
                    speed={100}
                    eraseSpeed={100}
                    typingDelay={1000}/>
                    </span>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum esse fugit illum ipsum nisi
                    provident. Eveniet.</p>
            </div>

            <div className={s.photo}>
                <img src="https://placehold.jp/600x600.png" alt=""/>
            </div>
        </section>
    );
};

