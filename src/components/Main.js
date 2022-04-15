import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import Contacto from './Contacto'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import MensajePagos from './MensajePagos'
import PaginaMain from './PaginaMain'
import PaginaProductos from './PaginaProductos'


const Main = () => {

    return (
            <main>               
            <Routes>
                <Route path="/" element={<PaginaMain/>} />
                <Route path="/productos" element={<PaginaProductos/>} />
                <Route path="/categoria/:idCategoria" element={<PaginaProductos/>}/>
                <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
            <MensajePagos/>
            </main>
    )
}

export default Main