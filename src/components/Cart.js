import React, { useContext } from 'react'
import {contexto} from './Contexto'
import Productos from './Productos'

const Cart = (producto) => {

    const {carrito, total, setCarrito, borrarProducto} = useContext(contexto)

    const handleBorrar = () =>{
        console.log("Producto eliminado")
    }

  return (
    <div>
      <h3 className='mensajeCarrito'>El carrito de compras no reserva los productos hasta que la compra no haya sido confirmada</h3>
        <div key={producto.id}>
          <img src="" alt="" />
          <h1>{producto.title}</h1>
          <h3>{producto.precio}</h3>  
          <h4>Total: {producto.precio * producto.cantidad}</h4>
          <button className='botonEliminarCart' onClick={handleBorrar}>ELIMINAR PRODUCTO</button>
        </div>
    </div>
  )
}

export default Cart