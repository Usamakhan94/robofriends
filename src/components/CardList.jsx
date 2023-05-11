import React from 'react';
import Card from './Card';
import './CardList.css'

const CardList = ({ robots })=>{
    const AllCards = robots.map((user, i)=>{
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div className='robo-cards'>
        {AllCards}
        </div>
    );
}

export default CardList;