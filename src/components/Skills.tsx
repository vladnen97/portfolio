import React from 'react';

export const Skills = () => {
    return (
        <section className={'skills'} id={'skills'}>
            <h2 className="heading">My <span>Skills</span></h2>

            <div className={'container'}>
                <div className={'skillBox'}>
                    <div className={'skillImage'}>
                        <img
                            src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
                            alt="HTML"/>
                    </div>
                    <h3>HTML</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, necessitatibus, veniam. Assumenda
                        dolorem expedita fugiat, minima nisi odit porro voluptates.
                    </p>
                </div>

                <div className={'skillBox'}>
                    <div className={'skillImage'}>
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                            alt="CSS"/>
                    </div>
                    <h3>CSS</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, necessitatibus, veniam. Assumenda
                        dolorem expedita fugiat, minima nisi odit porro voluptates.
                    </p>
                </div>

                <div className={'skillBox'}>
                    <div className={'skillImage'}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
                            alt="JavaScript"/>
                    </div>
                    <h3>JS</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, necessitatibus, veniam. Assumenda
                        dolorem expedita fugiat, minima nisi odit porro voluptates.
                    </p>
                </div>

            </div>
            
        </section>
    );
};

