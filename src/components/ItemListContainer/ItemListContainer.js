import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='ItemListContainer'>
            <h3>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer
