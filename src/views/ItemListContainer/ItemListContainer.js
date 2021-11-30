//React
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
//Estilos
import './ItemListContainer.css';
//Componentes
import ItemList from '../../components/ItemList/ItemList';
import Spinner from '../../components/Spinner/Spinner';


const ItemListContainer = ({greeting}) => {
    
    let category='new';
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let id = useParams();

    if (id.id!==undefined) {
        category=id.id;
    };

    useEffect(() => {
        setIsLoading(true)
        fetch (`https://xbox-api.pazguille.me/api/games?list=${category}`)
            .then((response) => response.json())
            .then((json)=>{
                setItems(json);
                setIsLoading(false)
            });
    }, [category]);
//Vista contenedora de la lista de Items
    return (
        <div className='ItemListContainer'>
            <h3>{greeting}</h3>
            {isLoading ? <Spinner /> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer
