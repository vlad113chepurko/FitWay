export default function Form() {
    return (
        <div className="form-wrapper">
            <h1>Write us</h1>
            <form action="" className="form">
                <label htmlFor="name">Your name*</label>
                <input className='margin-bottom' type="text" id="name" />
                <label htmlFor="email">E-mail*</label>
                <input className='margin-bottom' type="email" id="email" />
                <label htmlFor="message">Enter message to us!</label>
                <textarea className='margin-bottom' name="message" id="message"></textarea>
                <button type="submit">Send Now!</button>
            </form>
        </div>
    );
}