//Context
import { CartContext } from '../CartContext/CartContext';
//React
import { useContext} from 'react';
//Estilos
import './CartWidget.css';

//Icono del carrito para el NavBar
const CartWidget = () => {

    const [ , , , totalItems, , , , , , , , ] = useContext(CartContext);

    return (
        <div className='carrito'>
            <button className='btn-carrito'><i className='material-icons xl'>shopping_cart</i><p className='totalItems'>{totalItems}</p></button>
        </div>
    )
}

export default CartWidget