import React from 'react'
import ItemListContainer from './ItemListContainer'
import BannerSeguinosMain from './BannerSeguinosMain'
import Banner from './Banner'
import { Link } from 'react-router-dom'


const PaginaMain = () => {
  return (
    <>
        <Banner/>
        <ItemListContainer/>
        <Link  to="/productos"><button className='verTodosProductos'>VER TODOS LOS PRODUCTOS</button></Link>    
        <BannerSeguinosMain/>
    </>
  )
}

export default PaginaMain