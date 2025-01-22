import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer-section">

                <i className="footer-img">
                    <img src={github} alt="github" />
                    <a href="https://github.com/vlad113chepurko">GitHub</a>
                </i>

                <i className="footer-img">
                    <img src={linkedin} alt="linkedin" />
                    <a href="www.linkedin.com/in/vlad-chepurko-0953b32b0">LinkedIn</a>
                </i>

            </section>
        </footer>
    );
}