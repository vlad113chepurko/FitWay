import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jpg';

import {  motion } from "motion/react";

import { useEffect, useState } from 'react';

import Form from './Form';

export default function Main() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function dataJSON() {
            const response = await fetch('./data.json');
            const data = await response.json();
            setItems(data.images);
        }
        dataJSON();
    }, [])

    return (
        <main>
            <section className='margin-bottom'>
                <motion.h1
                    initial={{ opacity: 0, fontSize: '10px' }}
                    whileInView={{ opacity: 1, fontSize: '80px' }}
                    className='container__h1'>PERSONAL TRAINERS</motion.h1>
                <motion.p
                    initial={{ opacity: 0, fontSize: '0px' }}
                    whileInView={{ opacity: 1, fontSize: '20px' }}
                    className='container__p'>Our trainers will help you achieve your goals!
                    <br></br>
                    This is motivation, instructions, and much more.</motion.p>
            </section>

            <nav className="container__main margin-top">
                <motion.i
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='container__img'>
                    <h1 className='name'>Wiliam</h1>
                    <img src={trainer1} alt="t1" />
                </motion.i>
                <motion.i
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='container__img'>
                    <h1 className='name'>Wiliam</h1>
                    <img src={trainer2} alt="t2" />
                </motion.i>
                <motion.i
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='container__img'>
                    <h1 className='name'>Wiliam</h1>
                    <img src={trainer3} alt="t3" />
                </motion.i>
            </nav>

            <div className='beast-container'>
                <section className='beast__section '>
                    <motion.h1
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        className='margin-bottom'>BEAST MODE</motion.h1>
                    <motion.p
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        className='margin-bottom'>Feel your power and turn into a real beast! In 'Beast' mode you push your
                        limits: maximum intensity, relentless focus and absolute energy.
                        This mode is created for those who are ready to give 110%, overcome pain and become
                        stronger every second. Activate 'Beast' mode and prove that you are ready for real
                        challenges!</motion.p>
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className='margin-top '>Register</motion.button>
                </section>
            </div>

            <div className='programs-container'>

                <section className='program-title-container '>
                    <motion.h1
                        initial={{ opacity: 0, fontSize: '10px' }}
                        whileInView={{ opacity: 1, fontSize: '80px' }}
                    >Programs and Sections</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, fontSize: '0px' }}
                        whileInView={{ opacity: 1, fontSize: '20px', marginBottom: '20px' }}
                    >A variety of workouts and activities for all fitness levels. <br></br>
                        Find your ideal program and start the path to a healthy life</motion.p>
                </section>

                <section className='programs-wrapper '>
                    {items.map((item) => {
                        return (
                            <i className='programs__img-container' key={item.id}>
                                <img src={item.src} alt={item.alt} />
                                <h1 className='programs__h1'>{item.alt}</h1>
                            </i>
                        )
                    })}
                </section>
            </div>
            <Form />
        </main >
    );
}