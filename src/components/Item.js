import React from 'react'


function Item ({producto}) {
  return (
    <div className='cardProducto'>
      <img className="imagenCard" src={producto.img} alt={producto.title} />
      <h2 className='producto'>{producto.title}</h2>
      <h3 className='precio'>${producto.precio}</h3>
      <button className='botonCard'>VER MAS</button>
    </div>
  );
}

export default Item


