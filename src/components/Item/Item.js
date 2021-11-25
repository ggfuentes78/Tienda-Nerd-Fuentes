import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import './item.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = ({data}) => {
	
	// const onAdd = (count) => {
		// alert(`Agregaste ${count} al carrito`)
	// }

	return(
	  	<Card className='Item'>
    	    <Image src={data.images.poster.url} wrapped ui={false} />
    	    <Card.Content>
				<Card.Header>{data.title}</Card.Header>
				<Card.Meta>
					<span className='date'>{data.developer}</span>
				</Card.Meta>
				<Card.Description className='cardDescription'>${data.price.amount}</Card.Description>
			</Card.Content>
			<ItemDetailContainer item={data} />
		</Card>

	)
}

export default Item
