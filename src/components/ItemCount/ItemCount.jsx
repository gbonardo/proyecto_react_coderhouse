import { useState } from "react"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }
  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }
  return (
    <div className="container text-center">
      <div class="row align-items-center justify-content-center">
        <div class="col-1">
          <button className="btn btn-secondary" onClick={decrementar}> - </button>
        </div>
        <div class="col-1">
          <p><b>{contador}</b></p>
        </div>
        <div class="col-1">
          <button className="btn btn-secondary" onClick={incrementar}> + </button>
        </div>
      </div>
      <br />
      <button className="btn btn-secondary" onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
