import ItemList from '../ItemList/ItemList';
import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch ('https://xbox-api.pazguille.me/api/games?list=deals')
            .then((response) => response.json())
            .then((json)=>setItems(json));
    }, []);

    return (
        <div className='ItemListContainer'>
            <h3>{greeting}</h3>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
