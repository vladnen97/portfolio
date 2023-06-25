import React from 'react';
import {Header} from './components/Header/Header';
import {Home} from './components/Home/Home';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {Contact} from './components/Contact/Contact';
import {Footer} from './components/Footer/Footer';
import {Hire} from './components/Hire/Hire';
import {Particle} from './components/Particle';

function App() {
    return (
        <>
            <Particle/>
            <Header/>
            <main>
                <Home />
                <Skills/>
                <Projects/>
                <Hire/>
                <Contact/>
            </main>
            <Footer/>
        </>)
}

export default App;
