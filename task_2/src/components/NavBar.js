import './NavBar.css';
import NavLink from "./NavLink";

const NAV_LINKS = [
    {
        to: '/',
        label: 'Home'
    },
    {
        to: '/portfolio',
        label: 'About us'
    },
    {
        label: 'Features'
    },
    {
        label: 'Pricing'
    },
    {
        label: 'FAQ'
    },
    {
        to: '/blog',
        label: 'Blog'
    }
];

function NavBar({className}) {
    return (
        <ul className="nav__list">
            {
                NAV_LINKS.map(link => (
                    <NavLink to={link.to} className={className}>
                        {link.label}
                    </NavLink>
                ))
            }
        </ul>
    );
}

export default NavBar;
