import './Portfolio.css';
import templates from '../data/templates.json';
import SocialMediaIcons from "../components/SocialMediaIcons";
import PortfolioNavLink from "../components/portfolio/PortfolioNavLink";
import Template from "../components/portfolio/Template";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {ScrollRestoration} from "react-router-dom";

function Portfolio() {
    return (
        <>
            <ScrollRestoration getKey={location => location.pathname}/>
            <Header/>
            <div className="portfolio-container">
                <div className="portfolio-heading-container wrapper">
                    <div className="portfolio-heading">
                        <h4 className="paragraph paragraph_font-weight_500 portfolio-heading__subtitle">
                            What we created
                        </h4>
                        <h1 className="title-primary portfolio-heading__title">
                            Out Work Portfolio
                        </h1>
                        <p className="paragraph paragraph_font-weight_500 portfolio-heading__desc">
                            We help teams create great digital products by providing them with tools and technology
                            to make the design-to-code process universally accessible.
                        </p>
                        <SocialMediaIcons isDark={true}/>
                    </div>
                </div>
                <div className="portfolio-content wrapper">
                    <nav className="portfolio-categories">
                        <ul className="portfolio-categories__list">
                            <PortfolioNavLink>All</PortfolioNavLink>
                            <PortfolioNavLink>UI Design</PortfolioNavLink>
                            <PortfolioNavLink>Webflow Design</PortfolioNavLink>
                            <PortfolioNavLink>Figma Design</PortfolioNavLink>
                        </ul>
                    </nav>
                    <section className="portfolio-templates-container">
                        <ul className="portfolio-templates__list">
                            {
                                templates.map((template, i) => <Template data={template} index={i + 1} key={i}></Template>)
                            }
                        </ul>
                    </section>
                    <div className="portfolio-contact-us">
                        <h2 className="title-primary portfolio-contact-us__title">
                            Let's build something great together
                        </h2>
                        <p className="paragraph paragraph_font-weight_500 portfolio-contact-us__desc">
                            Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies
                            nec dolor sit amet, scelerisque cursus purus.
                        </p>
                        <button className="btn contact-us-btn">Contact Us</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Portfolio;
