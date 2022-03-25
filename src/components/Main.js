import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import Contacto from './Contacto'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import MensajePagos from './MensajePagos'
import PaginaMain from './PaginaMain'
import PaginaProductos from './PaginaProductos'
import Hombres from './Hombres'
import Mujeres from './Mujeres'
import Madera from './Madera'
import PaginaAccesorios from './PaginaAccesorios'



const Main = () => {

    return (
            <main>               
            <Routes>
                <Route path="/" element={<PaginaMain/>} />
                <Route path="/productos" element={<PaginaProductos/>} />
                <Route path="/categoria/hombre" element={<Hombres/>} />
                <Route path="/categoria/mujer" element={<Mujeres/>} />
                <Route path="/categoria/madera" element={<Madera/>} />
                <Route path="/categoria/accesorios" element={<PaginaAccesorios/>} />
                <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
            <MensajePagos/>
            </main>
    )
}

export default Main