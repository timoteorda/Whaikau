import React from 'react'

export const ItemDetail = ({producto}) => {
  return (
      <div>
          <img src={producto.img} alt={producto.title} />
          <h1>{producto.title}</h1>
          <h2>{producto.precio}</h2>
      </div>

  )
}

export default ItemDetail
