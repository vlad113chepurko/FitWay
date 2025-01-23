
import { motion } from "motion/react";

export default function Form() {
    return (
        <div className="form-wrapper">
            <motion.h1
            initial={{opacity: 0, fontSize: '20px'}}
            whileInView={{opacity: 1, fontSize: '80px'}}
            >Write us</motion.h1>
            <form action="" className="form">
                <label htmlFor="name">Your name*</label>
                <input className='margin-bottom' type="text" id="name" />
                <label htmlFor="email">E-mail*</label>
                <input className='margin-bottom' type="email" id="email" />
                <label htmlFor="message">Enter message to us!</label>
                <motion.textarea
                whileInView={{height: '200px'}}
                className='margin-bottom' name="message" id="message"></motion.textarea>
                <motion.button
                whileInView={{height: '50px'}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}
                type="submit">Send Now!</motion.button>
            </form>
        </div>
    );
}