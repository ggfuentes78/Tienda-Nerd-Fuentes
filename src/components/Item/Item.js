//React
import React from 'react';
// Semantic UI
import { Card, Image } from 'semantic-ui-react'
//Estilos
import './item.css';

// Devuelve una tarjeta con la info basica de un producto que recibe por la prop 'data'
const Item = ({data}) => { 
 
	return(
	  	<Card className='Item'>
    	    <Image src={data.image} wrapped ui={false} />
    	    <Card.Content>
				<Card.Header>{data.title}</Card.Header>
				<Card.Description className='cardDescription'>${data.price}</Card.Description>
			</Card.Content>
		</Card>

	)
}

export default Item
