import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import './item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({data}) => {
	
	const onAdd = (count) => {
		alert(`Agregaste ${count} al carrito`)
	}

	return(
	  	<Card className='Item'>
    	    <Image src={data.thumbnailUrl} wrapped ui={false} />
    	    <Card.Content>
				<Card.Header>{data.title}</Card.Header>
				<Card.Meta>
					<span className='date'>{data.id}</span>
				</Card.Meta>
				<Card.Description>{data.url}</Card.Description>
			</Card.Content>
			<ItemCount 
    			stock='10'
    			initial='1'
    			onAdd={onAdd}
			/>
		</Card>
	)
}

export default Item
