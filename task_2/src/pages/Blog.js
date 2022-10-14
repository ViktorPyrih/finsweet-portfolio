import './Blog.css';
import articles from '../data/articles.json';
import peopleWorkingInFrontOfComputerImg from '../assets/img/jpg/People-working-in-front-of-computer.jpg';
import Article from "../components/blog/Article";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {Link, ScrollRestoration} from "react-router-dom";

function Blog() {
    return (
        <>
            <ScrollRestoration getKey={location => location.pathname}/>
            <Header/>
            <div className="blog-container wrapper">
                <div className="blog-heading">
                    <h2 className="title-primary blog-heading__title">
                        A UX Case Study on Creating a
                        Studious Environment for Students
                    </h2>
                    <p className="paragraph paragraph_font-weight_500 blog-heading__author">
                        Andrew Jonson Posted on 27th January 2021
                    </p>
                    <img src={peopleWorkingInFrontOfComputerImg} alt="People-working-in-front-of-computer" className="blog-heading__img"/>
                    <p className="paragraph blog-heading__desc">
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the
                        stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the
                        spectator on a hillside.
                    </p>
                    <Link to="#" className="paragraph blog-heading__link">Read more</Link>
                </div>
                <section className="blog-content">
                    <h1 className="title-primary blog-content__title">Our Blog</h1>
                    <ul className="blog-content__list">
                        {articles.map((article, i) => <Article data={article} key={i}/>)}
                    </ul>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Blog;
