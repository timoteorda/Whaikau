import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(false)

    const addItem = (producto, cantidad) => {
        const copiaCarrito = [...carrito];
        const itemAlCarrito = {... producto,cantidad}

        copiaCarrito.push(itemAlCarrito);
        setCarrito(copiaCarrito)
    }

    const yaExisteEnCarrito = (id) => {

    }

    const borrarProducto = (id) => {

    };

    const limpiarCarrito = () => {
        setCarrito([])
    }
 
    const valorProvider = {
        carrito,
        cantidad,
        total,
        addItem,
    }

    return (
        <Provider value={valorProvider}>
            {children}
        </Provider>
    )
}

export default MiProvider