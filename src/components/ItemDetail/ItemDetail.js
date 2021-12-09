//React
import React, {useState, useContext} from 'react';
//Semantic UI
import { Grid, Image } from 'semantic-ui-react';
//Estilos
import "./ItemDetail.css";
//Componentes
import ItemCount from '../ItemCount/ItemCount';
//Context
import { CartContext } from '../CartContext/CartContext';
//React Router Dom 6.0.2
import { Link } from 'react-router-dom';

const stock=10;

const ItemDetail = ({item}) => {

//Muestra mensaje cuando se agregan items al carrito
    
    const [cartContent, setCartContent, setTotalItems, totalItems, addItem, cartIndex] = useContext(CartContext); //Totaliza cantidad de items en el carrito
    
    const [estadoBtnTerminar, setEstadoBtnTerminar] = useState('invisible'); //Determina si el boton Terminar Compra se debe mostrar o no

    const [stockDisponible, setStockDisponible] = useState(stock);

    const onAdd = (item, count) => {
        addItem(item, count);
        setEstadoBtnTerminar('visible')
    }

    console.log (cartContent)
    
   
//Arma el detalle de un item (recibido por prop) en un grid de Semantic UI
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Image src={item.images.poster.url} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <h2>{item.title}</h2>
                    <h3>${item.price.amount}</h3>
                    <p>{stockDisponible} unidades disponibles</p>
                    <div className="botones">
                        <ItemCount  //Botones para seleccionar cantidad de items a ingresar al carrito
                            stockDisponible={stockDisponible}
                            setStockDisponible={setStockDisponible}
                            initial='1'
                            onAdd={onAdd}
                            item={item}
                        />
                        <Link className={`btn-ItemDetail ${estadoBtnTerminar}`} to="/cart">
                            <button className="btn-itemTerminar">Terminar compra</button>
                        </Link>
                    </div>
                    <p>{(item.description)}</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default ItemDetail