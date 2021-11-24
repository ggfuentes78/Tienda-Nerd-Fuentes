import React from 'react';
import './ItemList.css'
import Item from '../Item/Item.js';

const ItemList = ({items}) => {

    return (
        <div className='ItemList'>
            {items.map((item) => {
					return <Item data={item} key={item.id} />;
				})}
        </div>
    );
};

export default ItemList
