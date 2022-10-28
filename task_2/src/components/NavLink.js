import {Link} from "react-router-dom";

function NavLink({to = "#", className, children}) {
    return (
        <li className="nav-link">
            <Link to={to} className={className}>{children}</Link>
        </li>
    )
}

export default NavLink;
