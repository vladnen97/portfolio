import React, {useCallback} from 'react';
import Particles from 'react-particles';
import type {Container, Engine} from 'tsparticles-engine';
import {loadFull} from 'tsparticles';
import type { ISourceOptions } from "tsparticles-engine";

export const Particle = () => {
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
                value: 0.4,
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
                opacity: 0.4,
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

/*{
    fullScreen: {
        enable: true,
            zIndex: -1
    },
    name: "Star",
        particles: {
    number: {
        value: 12,
            density: {
            enable: false,
        },
    },
    color: {
        value: "#fff",
    },
    shape: {
        type: "circle",
            options: {
            star: {
                sides: 5,
            },
        },
    },
    opacity: {
        value: 0.5,
    },
    size: {
        value: 4,
    },
    rotate: {
        value: {
            min: 0,
                max: 360,
        },
        direction: "clockwise",
            animation: {
            enable: true,
                speed: 3,
                sync: false,
        },
    },
    links: {
        enable: true,
            distance: 700,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
    },
    move: {
        enable: true,
            speed: 1,
    },
},
    interactivity: {
        events: {
            onHover: {
                enable: true,
                    mode: "grab",
            },
        },
        modes: {
            grab: {
                distance: 400,
                    links: {
                    opacity: 1,
                        color: "#0ef",
                },
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
        },
    },
    background: {
        color: "#1f242d",
    },
}*/

