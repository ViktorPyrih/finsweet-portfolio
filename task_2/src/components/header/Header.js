import './Header.css';
import logo from '../../assets/img/png/Logo.png';
import NavLink from "../NavLink";

function Header() {
    return (
        <header className="header wrapper">
            <img className="header__logo" src={logo} alt="Finsweet"/>
                <nav className="header-nav">
                    <ul className="header-nav__list">
                        <NavLink to="/" className="header-nav__link">Home</NavLink>
                        <NavLink to="/portfolio" className="header-nav__link">About us</NavLink>
                        <NavLink className="header-nav__link">Features</NavLink>
                        <NavLink className="header-nav__link">Pricing</NavLink>
                        <NavLink className="header-nav__link">FAQ</NavLink>
                        <NavLink to="/blog" className="header-nav__link">Blog</NavLink>
                    </ul>
                    <button className="btn header-nav__contact-us-btn">Contact us</button>
                </nav>
        </header>
    );
}

export default Header;
