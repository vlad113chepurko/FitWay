import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jpg';

export default function Main() {
    return (
        <main>
            <section className='margin-bottom'>
                <h1>PERSONAL TRAINERS</h1>
                <p>Our trainers will help you achieve your goals!
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
        </main>
    );
}