import React from 'react'
import {Link} from 'react-router-dom'

function Item ({producto}) {
  return (
    <div className='cardProducto'>
      <a href="#"><img className="imagenCard" src={producto.img} alt={producto.title} /></a>
      <a href='#'><h2 className='producto'>{producto.title}</h2></a>
      <h3 className='precio'>${producto.precio}</h3>
    </div>
  );
}

export default Item


