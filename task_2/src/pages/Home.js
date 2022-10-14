import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <h1 className="title-primary home-container__title">Home</h1>
            <nav className="home-container-nav">
                <ul className="home-container-nav__list">
                    <li className="home-container-nav__item">
                        <Link className="home-container__link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="home-container-nav__item">
                        <Link className="home-container__link" to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;
