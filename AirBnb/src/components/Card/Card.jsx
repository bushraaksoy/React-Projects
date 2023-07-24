import React from 'react';
import './Card.css'
import star from '../../images/star.png'

const Card = (props) => {
    console.log(props)

    let badge;
    badge = props.openSpots === 0? 'SOLD OUT' : (props.location === 'Online' && 'ONLINE')

    return (
        <div className='card'>
            <div className='card-img-container'>
                { badge &&  <div className='cards-status'>{badge}</div>}
                <img className='cards-img' src={require(`../../images/${props.coverImg}`)} alt="Activity" />
            </div>
            <div className='rating'>
                <img src={star} alt='star' />
                <span>{props.stats.reviewCount}</span>
                <span className='grey-color'>({props.stats.rating})•{props.location}</span> 
            </div>
            <div className='bio'>{props.title}</div>
            <div className='pricing'> <span className='bold'>From ${props.price} </span>/ person</div>
        </div>
    )
}

export default Card;