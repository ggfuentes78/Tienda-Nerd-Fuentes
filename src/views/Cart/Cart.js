//Context
import { CartContext } from '../../components/CartContext/CartContext';
//React
import { useContext, useState } from 'react';
//Css
import './Cart.css'
//Components
import CartDetail from '../../components/CartDetail/CartDetail';
//React Router DOM
import{ Link } from "react-router-dom"


const Cart = () =>{

    const [cartContent, , , , , ,  , , , , , ] = useContext(CartContext);

    const [cantItemsCart, setCantItemsCart] = useState(cartContent.length);

    return (
        <div>
            {cantItemsCart===0 ? <h2>Carrito vacio</h2> : <CartDetail setCantItemsCart={setCantItemsCart}/>}
            <Link to="/"><button className='btn-cart'>Seguir comprando</button></Link>
        </div>
     )    
}

export default Cart
