import { createContext, useState } from "react";

//creamos el contexto
export const CartContext = createContext()

//creamos el proveedor
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    //funciones para modificar el carrito
    //agregar item, borrar carrito, borrar item, total, total items

    //agregar item
    const addItem = (item, qty)=>{
        if(isInCart(item.id)){
        const carritoActualizado = cart.map((prod)=>{
            if(prod.id === item.id){
                return {...prod, quantity: prod.quantity + qty}
            }else{
                return prod
            }
    })
    setCart(carritoActualizado)
        }else{
            setCart([...cart, {...item, quantity:qty}])
        }
        
    }

    //Borre todo el carrito
    const clear = ()=>{
        setCart([])
    }
    //eliminar un item
    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //devolver true o false si esta o no en el carrito
    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    //total items
    const cartQuantity = () =>{
        return cart.reduce((acc, prod) => acc += prod.quantity,0)
    }

    //total a pagar
    const cartTotal = ()=>{
        return cart.reduce((acc, prod)=> acc += prod.quantity*prod.price, 0)
    }

    return(
        <CartContext.Provider value={{cart,addItem, clear, removeItem, isInCart, cartQuantity,cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}