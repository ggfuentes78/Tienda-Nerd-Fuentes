//React
import React from 'react';
//Semantic UI
import { Grid, Image } from 'semantic-ui-react';
//Estilos
import "./ItemDetail.css";
//Componentes
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({item}) => {

//Muestra mensaje cuando se agregan items al carrito
    const onAdd = (count) => { 
        alert(`Agregaste ${count} al carrito`)
    }
         
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
                    <ItemCount  //Botones para seleccionar cantidad de items a ingresar al carrito
                        stock='10'
                        initial='1'
                        onAdd={onAdd}
                    />
                    <p>{(item.description)}</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default ItemDetail