function FooterNavLink(props) {
    return (
        <li className="footer-nav__item">
            <a href={props.to} className="footer-nav__link">
                {props.children}
            </a>
        </li>
    );
}

export default FooterNavLink;
