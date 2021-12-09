//Context
import { CartContext } from '../CartContext/CartContext';
//React
import { useContext} from 'react';
//Estilos
import './CartWidget.css';

//Icono del carrito para el NavBar
const CartWidget = () => {

    const [cartContent, setCartContent, setTotalItems, totalItems, addItem, removeItem, clear, isInCart, cartIndex] = useContext(CartContext);

    return (
        <div className='carrito'>
            <button className='btn-carrito green darken-3'><i className='material-icons xl'>shopping_cart</i><p className='totalItems'>{totalItems}</p></button>
        </div>
    )
}

export default CartWidget