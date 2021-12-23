//React
import React, {useEffect, useState} from 'react';
//React-Router-Dom
import { useParams } from 'react-router';
//Componentes
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Spinner from '../../components/Spinner/Spinner';
import Error from '../Error/Error';
//Estilos
import './ItemDetailContainer.css';
//Firebase
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

//Vista contenedorar del detalle de un Item
const ItemDetailContainer = () => {

    let id = useParams();
    let prodID = id.id

    const [item, setItem] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () =>{
            const q = query(collection(db,'ItemCollection'), where(documentId(), '==', prodID));
            const docs =[];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id:doc.id });
            });
            setItem(docs);
            setIsLoading(false);
        };
        getProducts();
    }, [prodID]);

    return (
        <div className="ItemDetailContainer">
            {isLoading ? <Spinner /> : (item.length===0 ? <Error/> : (
                <ItemDetail item={item[0]}/>     
                ))
            }
        </div>  
    )
}

export default ItemDetailContainer