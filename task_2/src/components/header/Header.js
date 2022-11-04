import './Header.css';
import logo from '../../assets/img/png/Logo.png';
import NavBar from "../NavBar";

function Header() {
    return (
        <header className="header wrapper">
            <img className="header__logo" src={logo} alt="Finsweet"/>
                <nav className="header-nav">
                    <NavBar className="header-nav__link"/>
                    <button className="btn header-nav__contact-us-btn">Contact us</button>
                </nav>
        </header>
    );
}

export default Header;
