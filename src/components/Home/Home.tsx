import React from 'react';
import s from './Home.module.css'
import ReactTypingEffect from 'react-typing-effect';
import {Fade} from 'react-awesome-reveal';
import me from '../../assets/me.png'

export const Home = () => {
    return (
        <section className={s.home} id={'home'}>
            <div className={s.content}>
                <Fade cascade damping={0.2}>
                    <h3>Hello, It's Me</h3>
                    <h1>Vlad Nenashkin</h1>
                    <h3>And I'm a <span>
                    <ReactTypingEffect
                        text={'React Frontend Developer'}
                        speed={100}
                        eraseSpeed={100}
                        typingDelay={1200}/>
                    </span>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum esse fugit illum ipsum
                        nisi
                        provident. Eveniet.</p>
                </Fade>
            </div>
            <Fade  delay={300} duration={1500}>
                <div className={s.photo}>
                    <img src={me} alt=""/>
                </div>
            </Fade>
        </section>
    );
};

