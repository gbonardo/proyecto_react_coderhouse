import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, descripcion, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, descripcion, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='container text-center '>
      <div class="row">
      <h4>{descripcion}</h4>
      <h5>Precio: ${precio}</h5>
      <h6>ID: {id}</h6>
      </div>
      <img className="imagenProducto" src={img} alt={descripcion} />
      <br />
      {
        agregarCantidad > 0 ? (<Link className="btn btn-secondary" to={"/cart"}>Ir al carrito</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail
