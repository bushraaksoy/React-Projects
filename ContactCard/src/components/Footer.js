import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faSquareTwitter,  faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="links">
            <a><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a><FontAwesomeIcon icon={faSquareTwitter} /></a>
            <a><FontAwesomeIcon icon={faSquareFacebook} /></a>
            <a><FontAwesomeIcon icon={faSquareGithub} /></a>
        </div>
    )
}

export default Footer