import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { db } from '../service/firebase'
import { CartContext } from '../context/CartContext'

const CheckOut = () => {
  const { cart, cartTotal, clear } = useContext(CartContext)

  const [buyer, setBuyer] = useState({
    name: "",
    lastname: "",
    address: "",
    email: "",
    emailConfirm: "",
  })

  const [error, setError] = useState("")
  const [orderId, setOrderId] = useState(null)

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    })
  }

  const finalizarCompra = (e) => {
    e.preventDefault()

    // Validaciones
    if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.email || !buyer.emailConfirm) {
      setError("⚠️ Todos los campos son obligatorios")
      return
    }

    if (buyer.email !== buyer.emailConfirm) {
      setError("⚠️ Los correos electrónicos no coinciden")
      return
    }

    if (cart.length === 0) {
      setError("⚠️ El carrito está vacío")
      return
    }

    setError("")

    // Crear la orden
    const order = {
      comprador: buyer,
      items: cart,
      total: cartTotal(),
      date: serverTimestamp(),
    }

    const ventas = collection(db, "orders")
    addDoc(ventas, order)
      .then((res) => {
        cart.forEach((item) => {
          const docRef = doc(db,"productos", item.id)
          getDoc(docRef)
          .then((dbDoc)=>{
            updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
          })
        });
        setOrderId(res.id)
        clear()
      })
      .catch((error) => console.error("Error creando la orden: ", error))
  }

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4">Finalizar compra</h1>

      {error && <div className="alert alert-danger">{error}</div>}
      {orderId && (
        <div className="alert alert-success">
          ✅ ¡Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong>
        </div>
      )}

      {!orderId && (
        <form onSubmit={finalizarCompra}>
          <input
            className="form-control mb-2"
            name="name"
            placeholder="Ingrese su nombre"
            type="text"
            value={buyer.name}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            name="lastname"
            placeholder="Ingrese su apellido"
            type="text"
            value={buyer.lastname}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            name="address"
            placeholder="Dirección"
            type="text"
            value={buyer.address}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            name="email"
            placeholder="Ingrese su correo"
            type="email"
            value={buyer.email}
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            name="emailConfirm"
            placeholder="Repita su correo"
            type="email"
            value={buyer.emailConfirm}
            onChange={handleChange}
          />

          <button className="btn btn-success w-100" type="submit">
            Confirmar compra
          </button>
        </form>
      )}
    </div>
  )
}

export default CheckOut

