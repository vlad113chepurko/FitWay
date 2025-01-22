import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jpg';

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
                <h1 className='container__h1'>PERSONAL TRAINERS</h1>
                <p className='container__p'>Our trainers will help you achieve your goals!
                    <br></br>
                    This is motivation, instructions, and much more.</p>
            </section>

            <nav className="container__main margin-top">
                <i className='container__img'>
                    <h1 className='name'>Wiliam</h1>
                    <img src={trainer1} alt="t1" />
                </i>
                <i className='container__img'>
                    <h1 className='name'>Wiliam</h1>
                    <img src={trainer2} alt="t2" />
                </i>
                <i className='container__img'>
                    <h1 className='name'>Wiliam</h1>
                    <img src={trainer3} alt="t3" />
                </i>
            </nav>

            <div className='beast-container'>
                <section className='beast__section '>
                    <h1 className='margin-bottom'>BEAST MODE</h1>
                    <p className='margin-bottom'>Feel your power and turn into a real beast! In 'Beast' mode you push your
                        limits: maximum intensity, relentless focus and absolute energy.
                        This mode is created for those who are ready to give 110%, overcome pain and become
                        stronger every second. Activate 'Beast' mode and prove that you are ready for real
                        challenges!</p>
                    <button className='margin-top '>Register</button>
                </section>
            </div>

            <div className='programs-container'>

                <section className='program-title-container '>
                    <h1>Programs and Sections</h1>
                    <p>A variety of workouts and activities for all fitness levels. <br></br>
                        Find your ideal program and start the path to a healthy life</p>
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