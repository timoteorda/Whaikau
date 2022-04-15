
import React from 'react';
import ItemList from './ItemList';
import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from "./firebase"

function ItemListContainer() {

    const [producto, setProductos] = useState([])
    const { idCategoria } = useParams()
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
  
      if(!idCategoria){
  
          const productosCollection = collection(db, "Productos")
          const pedido = getDocs(productosCollection)
  
          pedido
              .then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())))
              .catch(() => toast.error("Error al cargar los productos"))
              .finally(() => setLoading(false))
  
      }else{
  
          const productosCollection = collection(db, "Productos")
          const filtro = query(productosCollection,where("categoria","==",idCategoria))
          const pedido = getDocs(filtro)
  
          pedido
              .then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())))
              .catch(() => toast.error("Error al cargar los productos"))
              .finally(() => setLoading(false))
      }

}, [idCategoria])

      if (loading) {
        return <h1 className='tituloCargando'>Cargando los productos, ¡por favor espere!</h1>
      }
      else {	
        return (
            <>
            <div className='mainImagenesUrl'>
                <div className='contenedor'>
                    <Link to='/categoria/hombre'>
                    <img className='imagenSeccionMain' src="../img/menMain.jpg" alt="Imagen a productos de hombre" />
                    <h4 className='tituloEncimaImagen'>men</h4>
                    </Link>
                </div>
                <div className='contenedor'>
                    <Link to='/categoria/mujer' >
                        <img className='imagenSeccionMain' src="../img/womenMain.png" alt="Imagen a productos de mujeres" />
                        <h4 className='tituloEncimaImagen' >women</h4>
                    </Link>
                </div>
                <div className='contenedor'>
                    <Link to='/categoria/accesorios' >
                        <img className='imagenSeccionMain' src="../img/accesoriosMain.png" alt="Imagen a accesorios" />
                        <h4 className='tituloEncimaImagen'>accesories</h4>
                    </Link>
                </div>
                
    
            </div>
            <div className='divIdeals'>
                <h1 className="tituloIdeals">FOLLOW YOUR IDEALS</h1>
                <img className='iconoOla' src="../img/ola.png" alt="Ola" />
            </div>     
            <ItemList productos={producto}/> 
            </>
        )}
    }
    


export default ItemListContainer