import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [cantidad, setCantidad] = useState(0) 
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0) 
    
    const yaExisteEnCarrito = (id) => {
        return carrito.some(function(producto) {
            return producto.id === id
    })}

    const addItem = (producto, nuevaCantidad) => {
        
        const copia = carrito.slice(0)
        copia.push({ ...producto, nuevaCantidad })
        setCantidad(cantidad + nuevaCantidad)
        setTotal(total + producto.precio * nuevaCantidad)

        if(yaExisteEnCarrito(producto.id)){
            let index = copia.findIndex(item => item.id === producto.id)
            copia[index].cantidad += 1
            setCantidad(nuevaCantidad + 1)
        }
        else{
            setCarrito(copia) 
            setCantidad(cantidad + 1)
        }
    };

    const borrarProducto = (id) => {
        setCarrito(carrito.filter((producto) => producto.id !== id));
        setCantidad(cantidad - 1)
        setTotal(total - carrito.find(producto => producto.id === id).precio)
    };
    
    const finalizarCompra = () => {
        setCantidad(0)
        setCarrito([])
        setTotal(0)

        console.log("Muchas gracias por su compra")
    }

    const limpiarCarrito = () => {
        setCarrito([])
        setCantidad(0)
        setTotal(0)
    }


    const valorProvider = {
        carrito,
        cantidad,
        total,
        addItem,
        borrarProducto,
        limpiarCarrito,
        yaExisteEnCarrito,
        finalizarCompra
    }

    return (
        <Provider value={valorProvider}>
            {children}
        </Provider>
    )
}

export default MiProvider