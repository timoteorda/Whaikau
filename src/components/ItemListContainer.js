import React from 'react';
import ItemList from './ItemList';
import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from "./firebase"
import { Link } from 'react-router-dom'

const ItemListContainer = () => {

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
        <div className='divIdeals'>
            <h1 className="tituloIdeals">FOLLOW YOUR IDEALS</h1>
            <img className='iconoOla' src="../img/ola.png" alt="Ola" />
        </div> 
          <ItemList producto={producto} />
        </>
        )}
    }
    


export default ItemListContainer