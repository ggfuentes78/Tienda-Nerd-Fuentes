//React
import React, {useEffect, useState} from 'react';
//React-Router-Dom
import { useParams } from 'react-router';
//Componentes
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Spinner from '../../components/Spinner/Spinner';
//Estilos
import './ItemDetailContainer.css';

//Vista contenedorar del detalle de un Item
const ItemDetailContainer = () => {

    let id = useParams();
    let prodID = id.id

    const [item, setItem] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch (`https://xbox-api.pazguille.me/api/games?id=${prodID}`) //Busca el item en la api segun el parametro (id) de la url
            .then((response) => response.json()) 
            .then((json)=>{
                setItem(json);
                setIsLoading(false)
            });
    }, [prodID]);

    return (
        <div className="ItemDetailContainer">
            {isLoading ? <Spinner /> : (
                <ItemDetail item={item[0]}/>     
                )
            }
        </div>  
    )
}

export default ItemDetailContainer