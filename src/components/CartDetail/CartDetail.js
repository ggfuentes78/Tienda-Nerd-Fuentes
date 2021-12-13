//Context
import { CartContext } from '../CartContext/CartContext';
//React
import { useContext} from 'react';
//Semantic UI
import {Icon} from 'semantic-ui-react';


const CartDetail = ({cantItemsCart, setCantItemsCart}) => {
    
    const [cartContent, setCartContent, setTotalItems, totalItems, addItem, removeItem, clear, isInCart, cartIndex] = useContext(CartContext);
    
    const trashIconClickHandler= (itemId) =>{
       console.log(cartContent)
       removeItem(itemId);
       setCantItemsCart(cartContent.length);
       console.log('vacio?' + cartContent)
    }

    const terminarCompra = () => {
        alert('Compra realizada!'); //mensaje transitorio hasta que se desarrolle la funcionalidad de pago y compra
    }

    const clearBtnClickHandler= () =>{
        clear();
        setCantItemsCart(0);
        console.log('vacio?',cartContent)
    }

    return (
        <div className='cartDetail'>
            {cartContent.map((item) => {
                return (
                    <div className='cartItem'>
                        <img className='imgItem' src={item.image}/>
                        <div className='itemDetail'>
                            <h3>{item.name}</h3>
                            <h4>${item.price} x {item.quantity} u</h4>
                            <h3>$ {item.quantity*item.price}</h3>
                        </div>
                        <Icon className='icono' name='trash alternate outline' onClick={()=> trashIconClickHandler(item.itemId)}/>
                    </div>

            )})}
            <button className="btn-cart" onClick={()=>terminarCompra()}>Terminar compra</button>
            <button className="btn-cart" onClick={()=>clearBtnClickHandler()}>Limpiar carrito</button>
        </div>
    )
}

export default CartDetail;