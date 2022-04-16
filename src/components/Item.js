import React from 'react'
import {Link} from 'react-router-dom'

function Item ({producto}) {
  return (
    <div className='cardProducto'>
      <Link to={`/producto/${producto.id}`} ><img className="imagenCard" src={producto.img} alt={producto.title} /></Link>
      <Link to={`/producto/${producto.id}`}><h2 className='producto'>{producto.title}</h2></Link>
      <h3 className='precio'>${producto.precio}</h3>
    </div>
  );
}

export default Item


