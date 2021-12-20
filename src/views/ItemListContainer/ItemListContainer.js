//React
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
//Estilos
import './ItemListContainer.css';
//Componentes
import ItemList from '../../components/ItemList/ItemList';
import Spinner from '../../components/Spinner/Spinner';
//Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';



const ItemListContainer = ({greeting}) => {
    
    let category='';
    const [items, setItems] = useState([query(collection(db,'ItemCollection'))]);
    const [isLoading, setIsLoading] = useState(true);

    let id = useParams();

    if (id.id!==undefined) {
        category=id.id;
    };

    useEffect(() => {
        setIsLoading(true)
        const getProducts = async () =>{
            const q1 = query(collection(db,'ItemCollection'));
            const q2 = query(collection(db,'ItemCollection'), where('categoryId', '==', category));
            let q=q1
            const docs =[];
            if (category===''){
                q= q1;
            }else{
                q= q2;
            }
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id:doc.id });
            });
            console.log('DATA', docs);
            setItems(docs);
            setIsLoading(false);
        };
        getProducts();
    }, [category]);
//Vista contenedora de la lista de Items
    return (
        <div className='ItemListContainer'>
            <h2>{greeting}</h2>
            {isLoading ? <Spinner /> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer
