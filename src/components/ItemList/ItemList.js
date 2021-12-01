//React
import React from 'react';
//Estilos
import './ItemList.css'
//Componentes
import Item from '../Item/Item.js';
//React-Router-Dom
import { Link } from 'react-router-dom';

//Devuelve lista de items a mostrar
const ItemList = ({items}) => {
    return (
        <div className='ItemList'>
            {items.map((item) => {
					return (
                        //Link dinamico al id del item
                        <Link to={`/item/${item.id}`} key={item.id}> 
                            <Item data={item}/>
                        </Link>
                    )
				})}
        </div>
    );
};

export default ItemList
