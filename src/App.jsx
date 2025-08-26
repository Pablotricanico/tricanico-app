import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemCount from './compoments/ItemCount'
import ItemListContainer from './compoments/ItemListContainer'
import NavBar from './compoments/NavBar'
import FetchCountries from './compoments/examples/FetchCountries';
import FetchApi from './compoments/examples/FetchApi';
import ItemDetailCointainer from './compoments/ItemDetailCointainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NotFound from './compoments/NotFound';
import { CartContext, CartProvider } from './context/CartContext';
import Cart from './compoments/Cart';
import CartView from './compoments/CartView';
import CheckOut from './compoments/CheckOut';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categories/:category' element={<ItemListContainer/>}/>
      <Route path='/Item/:id' element={<ItemDetailCointainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>  

     <ToastContainer position="bottom-right" autoClose={2000} />
    </CartProvider>
    

    </BrowserRouter>
    
  )
}

export default App
