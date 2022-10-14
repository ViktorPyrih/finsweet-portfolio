import './HeaderNavLink.css';
import {Link} from "react-router-dom";

function HeaderNavLink(props) {
    return (
        <li className="header-nav__item">
            <Link to={props.to} className="header-nav__link">{props.children}</Link>
        </li>
    )
}

export default HeaderNavLink;
