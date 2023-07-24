import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Card = ({img, name, phone, email}) => {

    return (
        <div className="card">
            <img src={img} placeholder={name + "'s image"} />
            <h5 className="name">{name}</h5>
            <div className="contact-info">
                <div className="phone"><FontAwesomeIcon icon={faPhone} /> {phone}</div>
                <div className="email"><FontAwesomeIcon icon={faEnvelope} /> {email}</div>
            </div>
        </div>
    )
}

export default Card;