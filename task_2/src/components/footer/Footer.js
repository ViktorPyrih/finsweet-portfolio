import './Footer.css';
import logo from '../../assets/img/png/Logo.png';
import SocialMediaIcons from "../SocialMediaIcons";
import Copyright from "../Copyright";
import NavLink from "../NavLink";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content wrapper">
                <div className="footer-heading">
                    <div className="logo-container">
                        <img src={logo} alt="Finsweet" className="logo-container__img"/>
                        <p className="paragraph paragraph_font-weight_500 logo-container__subtitle">
                            We are always open to discuss your project and improve your online presence.
                        </p>
                    </div>
                    <div className="lets-talk">
                        <h2 className="title-primary title_text-align_left lets-talk__title">
                            Let's Talk!
                        </h2>
                        <p className="paragraph lets-talk__desc">
                            We are always open to discuss your project,
                            improve your online presence and help with your
                            UX/UI design challenges.
                        </p>
                        <div className="lets-talk-social-media-icons">
                            <SocialMediaIcons/>
                        </div>
                    </div>
                </div>
                <div className="footer-contact-info">
                    <div className="contact-info-block">
                        <h3 className="contact-info-block__title">
                            Email me at
                        </h3>
                        <a href="mailto:contact@website.com"
                           className="contact-info-block__link">contact@website.com</a>
                    </div>
                    <div className="contact-info-block">
                        <h3 className="contact-info-block__title">
                            Call us
                        </h3>
                        <a href="tel:0927 6277 28525" className="contact-info-block__link">0927 6277 28525</a>
                    </div>
                </div>
            </div>
            <div className="footer-links wrapper">
                <Copyright className="footer-copyright-info"></Copyright>
                <nav className="footer-nav">
                    <ul className="footer-nav__list">
                        <NavLink to="/" className="footer-nav__link">Home</NavLink>
                        <NavLink to="/portfolio" className="footer-nav__link">About us</NavLink>
                        <NavLink className="footer-nav__link">Features</NavLink>
                        <NavLink className="footer-nav__link">Pricing</NavLink>
                        <NavLink className="footer-nav__link">FAQ</NavLink>
                        <NavLink to="/blog" className="footer-nav__link">Blog</NavLink>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
