import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, descripcion, precio, img}) => {
  return (
    
    <div className="card" >
    <img src={img} class="card-img-top" alt={descripcion}/>
    <div className="card-body">
      <h5 className="card-title">{descripcion}</h5>
      <Link to={`/item/${id}`} className="btn btn-secondary">Ver detalles</Link>
    </div>
    </div>
  )
}

export default Item
