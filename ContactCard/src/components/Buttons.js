import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Buttons = () => {
    return (
        <div className="buttons">
            <button><FontAwesomeIcon icon={faEnvelope}/> Email</button>
            <button><FontAwesomeIcon icon={ faLinkedin } /> Linkedln</button>
        </div>
    )
}

export default Buttons;