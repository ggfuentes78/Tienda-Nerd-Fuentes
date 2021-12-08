import { useState, createContext} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartContent, setCartContent] = useState([]);

    const addItem = (item, cant) => {
        if (isInCart(item.id)){
            //En caso de que exista un item en el carrito sumo la cantidad a la definida anteriormente
            let newCart= cartContent
            newCart[cartIndex(item.id)].quantity+=cant
            setCartContent(newCart)
        }else{
            //Uso Spread Operator para modificar el array cartContent con la funcion actualizadora de estado setCartContent
            setCartContent([...cartContent, {'itemId': item.id, 'name': item.title , 'price': item.price.amount , 'quantity': cant}]);
        }
    }

    const removeItem = (itemId) =>{
        setCartContent(cartContent.splice(cartIndex(itemId),1));
    }

    const clear = () => {
        setCartContent({});
    }

    const isInCart = (item) => { 
        if (cartIndex(item) ===-1) {
            return false
        }else{
            return true
        }
    };

    const cartIndex = (item) => {
        return cartContent.findIndex((e)=>e.itemId===item);
    };

    return (
        <CartContext.Provider value={[cartContent, setCartContent, addItem, removeItem, clear, isInCart, cartIndex]}>
            {children}
        </CartContext.Provider>
    );
};
