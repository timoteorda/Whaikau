import React from 'react';
import ItemList from './ItemList';
import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { collection} from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { db } from "./firebase"

const ItemListContainer = () => {
      
    const [producto, setProducto] = useState({});
    const { idProducto } = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "Productos")
        const consulta = getDocs(productosCollection)

        consulta
          .then((resultado) => {
              const resultadoPedido = resultado.docs.map((doc) => {
                return doc.data()
              })
                setProducto(resultadoPedido)
          })
          .catch(() => toast.error("Error al cargar los productos"))
    
      }, [idProducto])
       
        return (
          <ItemList producto={producto} />
        )
    }
    


export default ItemListContainer