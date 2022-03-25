import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'


const ItemDetail = ({producto}) => {

  const [seleccionado,setSeleccionado] = useState(true)

  const onAdd= (cantidadSeleccionada) => {
      setSeleccionado(cantidadSeleccionada)
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
            <ItemCount stock ={producto.stock} onAdd = {onAdd} />
          </div>
        </div>            
      </div>

  )
}

export default ItemDetail
