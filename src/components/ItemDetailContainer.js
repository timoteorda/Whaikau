import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import React from 'react';
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";;

const ItemDetailContainer = () => {
      
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProducto } = useParams()

        useEffect(() => {
            const productosCollection = collection(db, "Productos")
            const buscarProducto = query(productosCollection, where("id", "==", Number(idProducto)))
            const pedido = getDocs(buscarProducto)
               
            pedido
              .then(respuesta => setProducto(respuesta.docs[0].data()))
              .catch(() => toast.error("Error al cargar los productos"))
              .finally(() => setLoading(false))
          }, [idProducto])

        if (loading){
            return toast.info('Cargando producto...', {
              position: "top-left",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
        } else {
            return (
                <>
                    <ItemDetail producto={producto}/>               
                </>
            )
        } 
}

export default ItemDetailContainer