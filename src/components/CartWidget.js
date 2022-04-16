import React from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './Contexto'
import { useContext } from 'react'

const CartWidget = () => {

    const {cantidad} = useContext(contexto)

    return (
        <Link to='/Cart'><img className='carrito' src= "../img/carrito.png" />
        {cantidad}
        </Link>
      )
}

export default CartWidget