import './Template.css';
import arrow from '../../assets/img/svg/Arrow.svg'
import {Link} from "react-router-dom";

function Template(props) {
    const template = props.data;
    return (
        <li className="portfolio-templates__item">
            <div className={"portfolio-templates-img-container img-container_gradient_" + props.index}>
                <img src={template.image} alt="Template" className="portfolio-templates__img"/>
            </div>
            <h3 className="portfolio-templates__title">{template.title}</h3>
            <p className="paragraph portfolio-templates__desc">
                {template.description}
            </p>
            <Link to="#" className="portfolio-templates-link">
                <span className="paragraph portfolio-templates-link__text">View portfolio</span>
                <img src={arrow} alt="Arrow" className="portfolio-templates-link__img"/>
            </Link>
        </li>
    );
}

export default Template;
