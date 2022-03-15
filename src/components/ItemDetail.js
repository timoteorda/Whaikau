import React from 'react'
import ItemCount from './ItemCount'

export const ItemDetail = ({producto}) => {
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
            <ItemCount/>
          </div>
        </div>             
      </div>

  )
}

export default ItemDetail
