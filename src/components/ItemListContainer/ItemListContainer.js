import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';




const ItemListContainer = ({greeting}) => {
    
    const onAdd = (count) => {
        alert(`Agregaste ${count} al carrito`)
    }

    return (
        <div className='ItemListContainer'>
            <h3>{greeting}</h3>
            <ItemCount 
                stock='10'
                initial='1'
                onAdd={onAdd}
            />
        </div>
    )
}

export default ItemListContainer
