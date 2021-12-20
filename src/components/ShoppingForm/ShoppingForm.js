import React, { useState, useContext } from 'react';
import { Input, Button, Modal} from 'semantic-ui-react';
import './ShoppingForm.css';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Spinner from '../Spinner/Spinner';
import MessageSuccess from '../MessageSuccess/MessageSuccess';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';



const initialState = {
    nombre:'',
    telefono:'',
    email:'',
};

const ShoppingForm = () => {
    const [cartContent, setCartContent, setTotalItems, totalItems, cartTotal, setCartTotal, calculaTotal , addItem, removeItem, clear, isInCart, cartIndex] = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialState);
    const [orderId, setOrderId] = useState('');
    const [isLoading, setIsLoading] =useState(false);
    const [emailConf, setEmailConf] = useState('');
    const [modalEmail, setModalEmail] = useState(false);
 



    let items=[];
    let totalCart=cartTotal

    
    cartContent.map( (item) =>{
        items.push({
            id: item.itemId,
            title: item.name,
            price: item.price,
            quantity: item.quantity}
        );
        }
    );
    

    const onChangeHandler = (e) =>{
        const {name, value} = e.target;
        if (name==='emailConf'){
            setEmailConf(value)
        } else {
        setBuyer({...buyer, [name]: value});
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    
        if (emailConf===buyer.email){
            setIsLoading(true);
            const docRef = await addDoc(collection(db, 'Orders'), {buyer , items, date: Timestamp.fromDate(new Date()), total: totalCart})
            setOrderId(docRef);
            setIsLoading(false);
            setBuyer(initialState);
            setEmailConf('');
            clear();
        }else{
            setModalEmail(true)
        }

    };

    return (
        <div>
            <form className='form-container' onSubmit={onSubmitHandler}>
                <Input placeholder='Nombre y Apellido' className='frm-input' name="nombre" value={buyer.nombre} onChange={onChangeHandler}/>
                <Input placeholder='Telefono' className='frm-input' name="telefono" value={buyer.telefono}  onChange={onChangeHandler} />
                <Input placeholder='Email' className='frm-input' name="email" value={buyer.email}  onChange={onChangeHandler} />
                <Input placeholder='Repetir Email' className='frm-input' name="emailConf" value={emailConf}  onChange={onChangeHandler} />
                {(buyer.nombre!=='' && buyer.telefono!=='' && buyer.email!=='' && emailConf!=='') ? <Button className='form-btn'>Comprar</Button> : <></>}
            </form>
            <div className='fondoModalEmail'>
            <Modal className='modalEmail'
              size='mini'  
              centered='true'
              open={modalEmail}
              onClose={() => setModalEmail(false)}
              onOpen={() => setModalEmail(true)}
            //   trigger={<Button>Show Modal</Button>}
            >
              <Modal.Header>Ups!</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  El Email ingresado no coincide!
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setModalEmail(false)}>OK</Button>
              </Modal.Actions>
            </Modal>
            </div>
            {isLoading ? <Spinner /> : (orderId.id && (<><MessageSuccess msg={orderId} /> <Link to='/'><Button className='form-btn'>Seguir Comprando</Button></Link></>))}
        </div>
    )
}

export default ShoppingForm
