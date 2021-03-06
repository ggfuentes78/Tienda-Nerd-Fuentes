//React
import React, { useState } from 'react';
//Semantic UI
import { Form, Button } from 'semantic-ui-react';
//Estilos
import './ItemCount.css';


const ItemCount = ({stockDisponible, setStockDisponible, initial, onAdd, item}) => {

    const [counter, setCounter] = useState(parseInt(initial)); //Cuenta items a agregar al carrito

    const handlerCounterUp=()=>{ //Aumenta la cantidad a comprar al presionar el boton +
        if (counter<stockDisponible){
            setCounter(counter + 1);
        }
    }

    const handlerCounterDown=()=>{ //Decrementa el contador de items a comprar al presionar -
        if (counter>0){
            setCounter(counter - 1);
        }
    }
    
    const handlerAddItems=()=>{
        
        if(counter>0){
            if (counter<=stockDisponible){
                setStockDisponible(stockDisponible-counter);
                onAdd(item, counter);
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

//Dibuja los botones para seleccionar las cantidades a comprar y controla stock que recibe por props
     return (
        <Form className='itemCount'>
            <Form.Group>
                <Button.Group >
                <Button icon='plus' onClick={handlerCounterUp} />  
                <Form.Input fluid placeholder={counter} readOnly className='inputCant'/>
                <Button icon='minus' onClick={handlerCounterDown} />
                </Button.Group>
                <button className='btn-itemDetail' onClick={handlerAddItems}>Agregar al carrito</button>
            </Form.Group>
        </Form>
    )
}

export default ItemCount

