import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import './item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({data}) => {
	
	const onAdd = (count) => {
		alert(`Agregaste ${count} al carrito`)
	}

	return(
	  	<a id={data.id} href="www.google.com"><Card className='Item'>
    	    <Image src={data.images.poster.url} wrapped ui={false} />
    	    <Card.Content>
				<Card.Header>{data.title}</Card.Header>
				<Card.Meta>
					<span className='date'>{data.developer}</span>
				</Card.Meta>
				<Card.Description className='cardDescription'>${data.price.amount}</Card.Description>
			</Card.Content>
			{/* <button className='btn-agregar'>Comprar</button> */}
			<ItemCount 
    			stock='10'
    			initial='1'
    			onAdd={onAdd}
			/>
		</Card></a>

	)
}

export default Item
