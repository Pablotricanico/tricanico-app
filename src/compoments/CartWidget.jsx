import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {
    const {cartQuantity } = useContext(CartContext)

    return(
        <div>
            <CiShoppingCart />
            <span style={{color:'black'}}>{cartQuantity ()}</span>
        </div>
    )
}

export default CartWidget