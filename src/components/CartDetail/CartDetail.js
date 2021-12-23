//Context
import { CartContext } from '../CartContext/CartContext';
//React
import { useContext} from 'react';
//Semantic UI
import {Icon} from 'semantic-ui-react';
//React Router Dom
import { Link } from 'react-router-dom';
//Estilos
import './CartDetail.css';


const CartDetail = ({cantItems, setCantItemsCart}) => {
  
    const [cartContent, , , , cartTotal, , , , removeItem, clear, , ] = useContext(CartContext);
    
    const trashIconClickHandler= (itemId) =>{
       removeItem(itemId);
       setCantItemsCart(cartContent.length);
    }

    const clearBtnClickHandler= () =>{
        clear();
        setCantItemsCart(0);
    }
    
    return (
        <div className='cartDetail'>
            {cartContent.map((item) => {
                return (
                    <div className='cartItem'>
                        <img className='imgItem' src={item.image} alt={item.name}/>
                        <div className='itemDetail'>
                            <h3>{item.name}</h3>
                            <h4>${item.price} x {item.quantity} u</h4>
                            <h3>$ {item.quantity*item.price}</h3>
                        </div>
                        <Icon className='icono' name='trash alternate outline' onClick={()=> trashIconClickHandler(item.itemId)}/>
                    </div>

            )})}
            <h2 className='totalCarrito'>Total:  ${cartTotal}</h2>
            <Link to="/shopping">
                <button className="btn-cart">Terminar compra</button>
            </Link>
            <button className="btn-cart" onClick={()=>clearBtnClickHandler()}>Limpiar carrito</button>
        </div>
    )
}

export default CartDetail;