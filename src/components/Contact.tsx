import React from 'react';

export const Contact = () => {
    return (
        <section className={'contact'} id={'contact'}>
            <h2 className="heading">Contact <span>Me!</span></h2>

            <form action="#">
                <div className={'inputBox'}>
                    <input type="text" placeholder={'Enter your name'}/>
                    <input type="number" placeholder={'Enter your phone'}/>
                    <input type="email" placeholder={'Enter your email'}/>
                    <textarea name="" id="" cols={30} rows={10} placeholder={'Your message'}></textarea>
                </div>
                <input type="submit" value={'Send message'} className={'btn'}/>
            </form>
        </section>
    );
};

