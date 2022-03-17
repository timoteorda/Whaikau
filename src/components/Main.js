import React from 'react'
import ItemCount from './ItemCount'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Banner from './Banner'
import Contacto from './Contacto'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import MensajePagos from './MensajePagos'




const Main = () => {

    return (
            <main>               
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
                <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
            <MensajePagos/>
            </main>
    )
}

export default Main