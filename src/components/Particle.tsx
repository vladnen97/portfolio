import React, {useCallback} from 'react';
import Particles from 'react-particles';
import type {Container, Engine} from 'tsparticles-engine';
import {loadFull} from 'tsparticles';
import type { ISourceOptions } from "tsparticles-engine";


const optons: ISourceOptions = {
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    name: "Link Triangles",
    particles: {
        number: {
            value: 35,
            density: {
                enable: true,
                value_area: 900
            },
        },
        color: {
            value: "#fff",
            animation: {
                enable: true,
                speed: 10,
                sync: true,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.3,
        },
        size: {
            value: {
                min: 1,
                max: 3,
            },
        },
        links: {
            enable: true,
            distance: 300,
            color: "#fff",
            opacity: 0.3,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
        },
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },

        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 1,
            },
            remove: {
                quantity: 2,
            },
        },
    },
    background: {
        color: "#1f242d",
    },
};

export const Particle = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optons}/>
    );
};

