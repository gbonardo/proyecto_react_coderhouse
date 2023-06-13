import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

    return (
        <div>
            <h4> {item.descripcion}</h4>
            <p> Cantidad: {cantidad}</p>
            <p> Precio: $ {item.precio}</p>
            <button className="btn btn-secondary" onClick={()=> eliminarProducto(item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem
