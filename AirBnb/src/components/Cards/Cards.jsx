import React from 'react';
import Card from "../Card/Card";
import './Cards.css';
import { cardsInfo } from '../../constants/cardsInfo.js';

const Cards = () => {
    const cards = cardsInfo.map(data => <Card
        key={data.id}
        {...data}
        />)

    return (
        <div className="cards">
            {cards}
        </div>
    )
}

export default Cards;