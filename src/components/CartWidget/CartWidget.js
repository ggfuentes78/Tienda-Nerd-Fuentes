import React from 'react';
//Estilos
import './CartWidget.css';

//Icono del carrito para el NavBar
const CartWidget = () => {

    //const [carrito, setCarrito] = useState(0); //Totaliza cantidad de items en el carrito
    
    return (
        <div className='carrito'>
            <button className='btn-carrito green darken-3'><i className='material-icons xl'>shopping_cart</i></button>
        </div>
    )
}

export default CartWidget