import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const imgCarrito = "../cart-alt.svg";

    return (
        <Link className="link-cardwidget" to='/cart'>
            <div className='divCarrito position-relativa top-75 end-100'>
                <img src={imgCarrito} alt="Carrito" />
                {
                    totalCantidad > 0 && <span>{totalCantidad}</span>
                }
            </div>
        </Link>
    )
}

export default CartWidget
