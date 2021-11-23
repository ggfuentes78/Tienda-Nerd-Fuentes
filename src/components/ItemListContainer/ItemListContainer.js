import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) => {
    return (
        <div className='ItemListContainer'>
            <h3>{greeting}</h3>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
