import React from 'react'

export default function ItemList({productos}) {
  return(
    <section className='sectionCard'>
      {productos.map(producto =>
          <div className='card'>
            <img className='imagenCard' src={producto.img} alt={producto.title}/>
            <h1 className='producto'>{producto.title}</h1>
            <h3 className='precio'>${producto.precio}</h3>
          </div>        
      )}
    </section>

  )
}