import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(parseInt(initial));
    const [carrito, setCarrito] = useState(0);
    const [stockDisponible, setStockDisponible] = useState(stock);

    const handlerCounterUp=()=>{
        if (counter<stockDisponible){
            setCounter(counter + 1);
        }
    }

    const handlerCounterDown=()=>{
        if (counter>0){
            setCounter(counter - 1);
        }
    }
    
    const handlerAddItems=()=>{
        
        if(counter>0){
            if (counter<=stockDisponible){
                setCarrito(carrito+counter);
                setStockDisponible(stockDisponible-counter);
                onAdd(counter);
                console.log(`En el carrito hay ${carrito+counter} items`)
                if (stockDisponible-counter===0){
                    setCounter(0);
                }else{
                    setCounter(parseInt(initial));
                }
            } else{
                alert(`Stock insuficiente.
                Quedan ${stockDisponible} items en stock.`)
            }
        }
    }

     return (
        <Form className='itemCount'>
            <Form.Group>
                <Button.Group >
                <Button icon='plus' onClick={handlerCounterUp} />  
                <Form.Input fluid placeholder={counter} readOnly className='inputCant'/>
                <Button icon='minus' onClick={handlerCounterDown} />
                </Button.Group>
                <button className='btn-agregar' onClick={handlerAddItems}>Agregar al carrito</button>
            </Form.Group>
            
        </Form>
    )
}

export default ItemCount

