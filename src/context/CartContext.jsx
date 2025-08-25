import { createContext, useState } from "react";
import { toast } from "react-toastify";

//creamos el contexto
export const CartContext = createContext()

//creamos el proveedor
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    //agregar item con validación de stock
    const addItem = (item, qty)=>{
        if(isInCart(item.id)){
            const carritoActualizado = cart.map((prod)=>{
                if(prod.id === item.id){
                    if(prod.quantity + qty > item.stock){
                        toast.error("❌ No hay stock suficiente");
                        return prod;
                    }
                    toast.success(`✅ Se agregaron ${qty} ${item.title}`);
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    return prod
                }
            })
            setCart(carritoActualizado)
        }else{
            if(qty > item.stock){
                toast.error("❌ No hay stock suficiente");
                return;
            }
            toast.success(`✅ Se agregó ${item.title} al carrito`);
            setCart([...cart, {...item, quantity:qty}])
        }
    }

    const clear = ()=> setCart([])
    const removeItem = (id) => setCart(cart.filter((prod)=> prod.id !== id))
    const isInCart = (id) => cart.some((prod)=> prod.id === id)
    const cartQuantity = () => cart.reduce((acc, prod) => acc += prod.quantity,0)
    const cartTotal = () => cart.reduce((acc, prod)=> acc += prod.quantity*prod.price, 0)
    
    return(
        <CartContext.Provider value={{cart,addItem, clear, removeItem, isInCart, cartQuantity,cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
