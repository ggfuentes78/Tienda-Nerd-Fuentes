import ItemList from '../ItemList/ItemList';
import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import Spinner from '../Spinner/Spinner';


const ItemListContainer = ({greeting}) => {
    
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch ('https://xbox-api.pazguille.me/api/games?list=deals')
            .then((response) => response.json())
            .then((json)=>{
                setItems(json);
                setIsLoading(false)
            });
    }, []);

    return (
        <div className='ItemListContainer'>
            <h3>{greeting}</h3>
            {isLoading ? <Spinner /> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer
