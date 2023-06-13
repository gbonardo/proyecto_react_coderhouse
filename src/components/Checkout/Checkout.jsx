import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden")
      return;
    }

    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        descripcion: producto.item.descripcion,
        cantidad: producto.cantidad,

      })),
      total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se pordujo un error al crear la orden, intente nuevamente más tarde.");
      })
  }

  return (
    <div className="container">
      <h2 className="text-center">Checkout</h2>
      <br />
      <form onSubmit={manejadorSubmit}>
        {carrito.map(producto => (
          <div key={producto.item.id}>
            <p> {producto.item.descripcion} x {producto.cantidad} </p>
            <p>Precio: $ {producto.item.precio} </p>
            <hr />
          </div>
        ))}
        <hr />
        <div className="mb-3">
          <label className="form-label" htmlFor="">Nombre</label>
          <input className="form-control" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">Apellido</label>
          <input className="form-control" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">Telefono</label>
          <input className="form-control" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">Email</label>
          <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">Email Confirmación</label>
          <input className="form-control" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

        {
          error && <p style={{ color: "red" }}> {error} </p>
        }

        <button className="btn btn-secondary" type="submit"> Finalizar Orden </button>

      </form>
      <hr />
      <br />
      {
        ordenId && (
          <strong>¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
        )
      }
    </div>
  )
}

export default Checkout
