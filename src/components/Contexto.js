import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [cantidad, setCantidad] = useState(0) //Para el total de productos en el carrito en navbar
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(false) // Precio total del carrito
    const yaExisteEnCarrito = (id) => {
        return carrito.some(function(producto) {
            return producto.id === id
    })}

    const addItem = (producto, cantidad) => {
        setCantidad(cantidad + 1)
        const copiaCarrito = [...carrito]
        const itemCarrito = {...producto, cantidad}
        
        if(yaExisteEnCarrito(producto.id)){
            let index = copiaCarrito.findIndex(item => item.id === producto.id)
            copiaCarrito[index].cantidad += 1
        }
        else{
            copiaCarrito.push(itemCarrito)
            setCarrito(copiaCarrito) 
        }
    }   

    const borrarProducto = (id) => {
        setCarrito(carrito.filter((producto) => producto.id !== id));
        setCantidad(cantidad - 1)
    };

    const limpiarCarrito = () => {
        setCarrito([])
    }
 
    const valorProvider = {
        carrito,
        cantidad,
        total,
        addItem,
        borrarProducto,
        limpiarCarrito,
        yaExisteEnCarrito
    }

    return (
        <Provider value={valorProvider}>
            {children}
        </Provider>
    )
}

export default MiProvider