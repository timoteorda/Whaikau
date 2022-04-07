import React from 'react';
import ItemList from './ItemList';
import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from "./firebase"

const ItemListContainer = () => {

  const [producto, setProductos] = useState([])
  const { idCategoria } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {

      if(!idCategoria){
          const productosCollection = collection(db, "Productos")
          const pedido = getDocs(productosCollection)

          pedido
              .then(res => setProductos(res.docs.map(doc => doc.data())))
              .catch(() => toast.error("Error al cargar los productos"))
              .finally(() => setLoading(false))

      }else{

          const productosCollection = collection(db, "Productos")
          const filtro = query(productosCollection,where("category","==",idCategoria))
          const pedido = getDocs(filtro)

          pedido
              .then(res => setProductos(res.docs.map(doc => doc.data())))
              .catch(() => {
                toast.error("Error al cargar los productos")
              })
      }
    }, [])

       
        return (
          <ItemList producto={producto} />
        )
    }
    


export default ItemListContainer