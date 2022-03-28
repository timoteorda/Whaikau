import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import Contexto from './Contexto'
import { useContext } from 'react'
import { contexto } from './Contexto'

const ItemDetail = ({producto}) => {

  const {addItem} = useContext(contexto)
  
  const [seleccionado,setSeleccionado] = useState(true)

  const onAdd= (cant) => {
      setSeleccionado(cant)
      addItem(producto, cant)
  }

  return (
      <div className='cart'>
        <div>
          <img className='imagenDetail' src={producto.img} alt={producto.title} />
        </div>
        <div className='derechaDetail'>
          <div>
           <h1 className='tituloDetail'>{producto.title}</h1>
          </div>
          <div>
            <h2 className='precioDetail'>${producto.precio}</h2>
          </div>
          <div className='counterDetail'>
            <ItemCount stock ={producto.stock} onAdd = {onAdd} />
          </div>
        </div>            
      </div>

  )
}

export default ItemDetail
