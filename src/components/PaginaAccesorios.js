import React from 'react';
import ItemList from './ItemList';
import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { collection} from 'firebase/firestore';
import { getDocs, query, where } from 'firebase/firestore';
import { db } from "./firebase"

const PaginaAccesorios = () => {

    const[productos ,setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      if(!productos){

          const productosCollection = collection(db, "Productos")
          const pedido = getDocs(productosCollection)
  
          pedido
              .then(res => setProductos(res.docs.map(doc => doc.data())))
              .catch(() => toast.error("Error al cargar los productos"))
              .finally(() => setLoading(false))

      }else{

          const productosCollection = collection(db, "Productos")
          const filtro = query(productosCollection,where("categoria","==","accesorios"))
          const pedido = getDocs(filtro)

          pedido
              .then(res => setProductos(res.docs.map(doc => doc.data())))
              .catch((error) => {
                console.error(error)
                toast.error("Error al cargar los productos")
              })
      }
    
      }, [])

    if (loading){
        return toast.info('Cargando los productos...', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    } else{
        return (
        <>
        <img className='bannerProductos' src="../img/bannerProductos.jpg" alt="" />
        <div className='divIdeals'>
            <h1 className="tituloIdeals">FOLLOW YOUR IDEALS</h1>
            <img className='iconoOla' src="../img/ola.png" alt="Ola" />
        </div>     
        <ItemList productos={productos}/> 
        </>
    )}
}

export default PaginaAccesorios