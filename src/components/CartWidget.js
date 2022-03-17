import React from 'react'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    return (
        <Link to='/Cart'><img className='carrito' src= "../img/carrito.png" /></Link>
      )
}

export default CartWidget