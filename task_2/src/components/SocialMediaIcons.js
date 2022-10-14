import './SocialMediaIcons.css';
import facebookLogo from '../assets/img/svg/social-media/facebook.svg';
import twitterLogo from '../assets/img/svg/social-media/twitter.svg';
import instagramLogo from '../assets/img/svg/social-media/instagram.svg';
import linkedInLogo from '../assets/img/svg/social-media/linked_in.svg';
import facebookLogoDark from '../assets/img/svg/social-media/facebook-black.svg';
import twitterLogoDark from '../assets/img/svg/social-media/twitter-black.svg';
import instagramLogoDark from '../assets/img/svg/social-media/instagram-black.svg';
import linkedInLogoDark from '../assets/img/svg/social-media/linked_in-black.svg';
import SocialMediaIcon from "./SocialMediaIcon";

function SocialMediaIcons(props) {
    const isDark = props.isDark;
    return (
        <ul className="social-media-icons social-media-icons__list">
            <SocialMediaIcon src={resolveLogo('facebook', isDark)} alt="Facebook"/>
            <SocialMediaIcon src={resolveLogo('twitter', isDark)} alt="Twitter"/>
            <SocialMediaIcon src={resolveLogo('instagram', isDark)} alt="Instagram"/>
            <SocialMediaIcon src={resolveLogo('linked_in', isDark)} alt="Linked In"/>
        </ul>
    )
}

function resolveLogo(logo, isDark) {
    switch (logo) {
        case 'facebook':
            logo = isDark ? facebookLogoDark : facebookLogo;
            break;
        case 'twitter':
            logo = isDark ? twitterLogoDark : twitterLogo;
            break;
        case 'instagram':
            logo = isDark ? instagramLogoDark : instagramLogo;
            break;
        case 'linked_in':
            logo = isDark ? linkedInLogoDark : linkedInLogo;
            break;
        default:
            throw new Error(`Logo ${logo} was not found`);
    }

    return logo;
}

export default SocialMediaIcons;
