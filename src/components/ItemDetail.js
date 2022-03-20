import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

  const onAdd = (cant) => {
      console.log("Se agregaron", cant, "unidades al carrito")
  }

  return (
      <div className='cart'>
        <div>
          <img className='imagenCart' src={producto.img} alt={producto.title} />
        </div>
        <div className='derechaCart'>
          <div>
           <h1 className='tituloCart'>{producto.title}</h1>
          </div>
          <div>
            <h2 className='precioCart'>${producto.precio}</h2>
          </div>
          <div className='counterCart'>
            <ItemCount stock ={5} onAdd = {onAdd} />
          </div>
        </div>            
      </div>

  )
}

export default ItemDetail
