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

function App() {

  return (
    <BrowserRouter>
    
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categories/:category' element={<ItemListContainer/>}/>
      <Route path='/Item/:id' element={<ItemDetailCointainer/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

    </BrowserRouter>
    
  )
}

export default App
