import './Card.css'
import React from 'react';

const Card = ({name, email, id})=>{
    return(
        <div className='card-container'>
            <img className='card-img' src={`https://robohash.org/${id}`} alt="" />
            <div className='card-info'>
                <h2 className='card-heading'>{name}</h2>
                <p className='card-mail'>{email}</p>
            </div>
        </div>
    );
}

export default Card;