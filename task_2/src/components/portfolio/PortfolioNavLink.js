import './PortfolioNavLink.css';
import {Link} from "react-router-dom";

function PortfolioNavLink(props) {
    return (
        <li className="portfolio-categories__item">
            <Link to="#" className="portfolio-categories__link">{props.children}</Link>
        </li>
    );
}

export default PortfolioNavLink;
