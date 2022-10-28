import './Article.css';
import arrow from '../../assets/img/svg/Arrow.svg';
import {Link} from "react-router-dom";

function Article(props) {
    const article = props.data;
    return (
        <li className="blog-content__item">
            <img src={article.image} alt="Blog" className="blog-content__img"/>
            <p className="paragraph paragraph_font-weight_500 blog-content__date">{article.date_published}</p>
            <h6 className="title-secondary blog-content__subtitle">
                {article.title}
            </h6>
            <p className="paragraph blog-content__desc">
                {article.description}
            </p>
            <Link to="#" className="blog-content-link">
                <span className="paragraph paragraph_font-weight_500 blog-content-link__text">Read more</span>
                <img src={arrow} alt="Arrow" className="blog-content-link__img"/>
            </Link>
        </li>
    );
}

export default Article;
