import React, {useEffect, useState} from 'react';
import './ItemList.css'
import Item from '../Item/Item.js';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((json)=>setItems(json));
    }, []);

    console.log (items)
        return (
        <div className='ItemList'>
            {items.map((item) => {
					return <Item data={item} key={item.id} />;
				})}
        </div>
    );
};

export default ItemList
