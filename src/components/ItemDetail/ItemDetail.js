import React from 'react'
import {  Header, Image, Modal } from 'semantic-ui-react'

const ItemDetail = ({item}) => {
    return (
        <>
        <Modal.Header>{item.title}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={item.images.poster.url} wrapped />
            <Modal.Description className='detail'>
                <Header>{item.title}</Header>
                <p>{(item.description).substr(0,400)}...</p>
                <h3>${item.price.amount}</h3>
            </Modal.Description>
        </Modal.Content>
        </>   
    )
}

export default ItemDetail
