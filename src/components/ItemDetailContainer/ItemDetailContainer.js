import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = ({item}) => {
    console.log(item)
    const onAdd = (count) => {
        alert(`Agregaste ${count} al carrito`)
      }     
    const [open, setOpen] = React.useState(false)


    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='large'
            trigger={<Button>Comprar</Button>}
        >
            <ItemDetail item={item}/>
            <Modal.Actions>
                  <ItemCount 
                      stock='10'
                      initial='1'
                      onAdd={onAdd}
                  />  
              </Modal.Actions>
        </Modal>
  )
}

export default ItemDetailContainer