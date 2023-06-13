import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if (totalCantidad === 0) {
        return (
            <div className="container">
                <h2 className="text-center">No hay productos en el carrito</h2>
                <br />
                <Link className="btn btn-secondary" to='/'> Seguir comprando</Link>
            </div>
        )
    }

    return (
        <div className="container">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <hr />
            <h3>Cantidad total: {totalCantidad}</h3>
            <h3>Total: ${total}</h3>
            <br />
            <div class="row">
                <div class="col-3">
                    <button className="btn btn-secondary" onClick={() => vaciarCarrito()}>Vacias carrito</button>
                </div>
                <div class="col-4">
                    <Link className="btn btn-secondary" to="/checkout">Finalizar compra</Link>
                </div>
                <div class="col-5">
                    <Link className="btn btn-secondary" to='/'> Seguir comprando</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart

