import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div className="container text-center">
      <h2>Error 404</h2>
      <br />
      <p>Página no encontrada.</p>
      <br />
      <Link className="btn btn-secondary" to='/'>Ir al Inicio</Link>
    </div>
  )
}

export default Error404
