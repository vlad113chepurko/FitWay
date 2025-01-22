import logo from '..//assets/logo_header.png';
import main_logo from '../assets/logo_main.svg';

export default function Header() {
    return (
        <header>
            <div className='wrapper__header'>
                <i className='logo__header'>
                    <img src={logo} alt="logo" />
                </i>
                <nav className='links__header'>
                    <a href="#">Instructors</a>
                    <a href="#">Sections</a>
                    <a href="#">News</a>
                    <a href="#">Contacts</a>
                </nav>
            </div>
            <i className='main-logo'>
                <img src={main_logo} alt="main_logo" />
            </i>
        </header>
    );
}