import React, { useContext } from 'react'
import {contexto} from './Contexto'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {borrarProducto, limpiarCarrito,carrito, total} = useContext(contexto)
        

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
                    <h4 className='cantidadCarrito'><b>Precio unitario:</b> ${producto.precio}</h4>
                    <h4 className='cantidadCarrito'><b>Cantidad:</b>  {producto.nuevaCantidad}</h4>
                    <h4 className='cantidadCarrito'><b>Subtotal:</b> ${producto.nuevaCantidad * producto.precio}</h4>
                    <button
                        className='botonEliminarCarrito' 
                        onClick={()=> borrarProducto(producto.id)}>
                        ELIMINAR DEL CARRITO
                    </button>
                  </div>
                </div>
            ))}
            <div className='flexFinalizarCompra'>
                <h2 className='totalCompra'>EL TOTAL DE LA COMPRA ES DE:  ${total}</h2>
                <Link to='/confirmarCompra'><button className='finalizarCompra'>FINALIZAR COMPRA</button></Link>
                <Link to="/productos"><button className='seguirComprando' >VER MAS PRODUCTOS</button></Link>
            </div>
      </div>
    </div>
  )
}



export default Cart