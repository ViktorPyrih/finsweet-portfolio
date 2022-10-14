import './Header.css';
import logo from '../../assets/img/png/Logo.png';
import HeaderNavLink from "./HeaderNavLink";

function Header() {
    return (
        <header className="header wrapper">
            <img className="header__logo" src={logo} alt="Finsweet"/>
                <nav className="header-nav">
                    <ul className="header-nav__list">
                        <HeaderNavLink to="/">Home</HeaderNavLink>
                        <HeaderNavLink to="/portfolio">About us</HeaderNavLink>
                        <HeaderNavLink to="#">Features</HeaderNavLink>
                        <HeaderNavLink to="#">Pricing</HeaderNavLink>
                        <HeaderNavLink to="#">FAQ</HeaderNavLink>
                        <HeaderNavLink to="/blog">Blog</HeaderNavLink>
                    </ul>
                    <button className="btn header-nav__contact-us-btn">Contact us</button>
                </nav>
        </header>
    );
}

export default Header;
