import { useState, createContext} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartContent, setCartContent] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const addItem = (item, cant) => {
        if (isInCart(item.id)){
            //En caso de que exista un item en el carrito sumo la cantidad a la definida anteriormente
            let newCart= cartContent;
            newCart[cartIndex(item.id)].quantity+=cant;
            setCartContent(newCart);
            setTotalItems(itemsInCart(cartContent));
            console.log(totalItems)
        }else{
            let newCart= cartContent;
            newCart.push({'itemId': item.id, 'image': item.images.poster.url , 'name': item.title , 'price': item.price.amount , 'quantity': cant});
            //Uso Spread Operator para modificar el array cartContent con la funcion actualizadora de estado setCartContent
            //setCartContent(()=>[...cartContent, {'itemId': item.id, 'image': item.images.poster.url , 'name': item.title , 'price': item.price.amount , 'quantity': cant}]);
            setCartContent(newCart);
            setTotalItems(itemsInCart(cartContent));
            console.log(totalItems)
        }
    }
    //Cuenta la cantidad de items en el carrito
    const itemsInCart = (cartContent) =>{
        let cantItems=0
        cartContent.map( (item) => cantItems += item.quantity );
        return cantItems;
        }

    const removeItem = (itemId) =>{
        console.log("remove" + itemId);
        if (isInCart(itemId)){
            let cartRemove= cartContent;
            cartRemove.splice(cartIndex(itemId),1);
            setCartContent(cartRemove);
            setTotalItems(itemsInCart(cartContent));
        }
        console.log(cartContent);
    }

    const clear = () => {
        setCartContent({});
        setTotalItems(itemsInCart(cartContent));
    }

    const isInCart = (item) => { 
        if (cartIndex(item) ===-1) {
            console.log(false)
            return false
        }else{
            console.log(true)
            return true
        }
    };

    const cartIndex = (item) => {
        return cartContent.findIndex((e)=>e.itemId===item);
    };

    return (
        <CartContext.Provider value={[cartContent, setCartContent, setTotalItems, totalItems, addItem, removeItem, clear, isInCart, cartIndex]}>
            {children}
        </CartContext.Provider>
    );
};
