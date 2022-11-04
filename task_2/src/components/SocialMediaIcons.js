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

const SOCIAL_NETWORK = {
    inst: ['instagram', 'Instagram'],
    fb: ['facebook', 'Facebook'],
    tw: ['twitter', 'Twitter'],
    lnk: ['linked_in', 'Linked In']
};

function SocialMediaIcons({isDark, className = ""}) {
    return (
        <ul className={`social-media-icons ${className}`}>
            {
                Object.keys(SOCIAL_NETWORK).map(key => (
                    <SocialMediaIcon src={resolveLogo(SOCIAL_NETWORK[key][0], isDark)} alt={SOCIAL_NETWORK[key][1]}/>)
                )
            }
        </ul>
    )
}

function resolveLogo(logo, isDark) {
    switch (logo) {
        case SOCIAL_NETWORK.fb[0]:
            logo = isDark ? facebookLogoDark : facebookLogo;
            break;
        case SOCIAL_NETWORK.tw[0]:
            logo = isDark ? twitterLogoDark : twitterLogo;
            break;
        case SOCIAL_NETWORK.inst[0]:
            logo = isDark ? instagramLogoDark : instagramLogo;
            break;
        case SOCIAL_NETWORK.lnk[0]:
            logo = isDark ? linkedInLogoDark : linkedInLogo;
            break;
        default:
            throw new Error(`Logo ${logo} was not found`);
    }

    return logo;
}

export default SocialMediaIcons;
