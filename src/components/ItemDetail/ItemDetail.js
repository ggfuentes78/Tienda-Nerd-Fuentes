//React
import React, {useState} from 'react';
//Semantic UI
import { Grid, Image } from 'semantic-ui-react';
//Estilos
import "./ItemDetail.css";
//Componentes
import ItemCount from '../ItemCount/ItemCount';
import { Link, useLinkClickHandler } from 'react-router-dom';

const stock=10;

const ItemDetail = ({item}) => {

//Muestra mensaje cuando se agregan items al carrito
    
    const [carrito, setCarrito] = useState(0); //Totaliza cantidad de items en el carrito
    
    const [estadoBtnTerminar, setEstadoBtnTerminar] = useState('invisible'); //Determina si el boton Terminar Compra se debe mostrar o no

    const [stockDisponible, setStockDisponible] = useState(stock);

    const onAdd = (count) => {
        setCarrito(count);
        setEstadoBtnTerminar('visible')
    }

    console.log (`Se agregaron ${carrito} items al carrito`)
    
   
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
                        />
                        <Link className={`btn-ItemDetail ${estadoBtnTerminar}`} to="/cart">
                            <h2 className="btn-itemTerminar">Terminar compra</h2>
                        </Link>
                    </div>
                    <p>{(item.description)}</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default ItemDetail