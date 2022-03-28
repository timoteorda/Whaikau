import React, { useContext } from 'react'
import {contexto} from './Contexto'



const Cart = (producto) => {

    const {borrarProducto, limpiarCarrito} = useContext(contexto)

    const {carrito, total, setCarrito} = useContext(contexto)
        

  if (carrito == 0) {
    return (
      <div>
          <h3 className='mensajeCarrito'>El carrito no reserva los productos hasta que la compra no haya sido confirmada</h3>
          <h2 className='carritoVacio'>Actualmente el carrito se encuentra vacío</h2>
      </div>

    )
  } else 
      return (
    <div>
      <h3 className='mensajeCarrito'>El carrito no reserva los productos hasta que la compra no haya sido confirmada</h3>
      <button className='vaciarCarrito' onClick={limpiarCarrito}>LIMPIAR CARRITO</button>
      <div className='contenedorCarrito'>
            {carrito.map(producto => (
                <div className='flexCarrito' key={producto.id}>
                  <div>
                    <img className='imagenCarrito' src={producto.img} alt="" />
                  </div>
                  <div className='derechaCarrito'>
                    <h2 className='tituloCarrito'>{producto.title}</h2>
                    <h4 className='cantidadCarrito'>Precio unitario: {producto.precio}$</h4>
                    <h4 className='cantidadCarrito'>Cantidad: {producto.cantidad}</h4>
                    <h5 className='totalCarrito'>Total:  ${producto.cantidad * producto.precio}</h5>
                    <button className='botonEliminarCarrito' onClick={borrarProducto}>ELIMINAR DEL CARRITO</button>
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}



export default Cart