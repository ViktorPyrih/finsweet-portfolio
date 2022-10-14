import {Link} from "react-router-dom";

function SocialMediaIcon(props) {
    return (
        <li>
            <Link to="#">
                <img src={props.src} alt={props.alt}/>
            </Link>
        </li>
    )
}

export default SocialMediaIcon;
