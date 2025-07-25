import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemCount from './compoments/ItemCount'
import ItemListContainer from './compoments/ItemListContainer'
import NavBar from './compoments/NavBar'
import FetchCountries from './compoments/examples/FetchCountries';
import FetchApi from './compoments/examples/FetchApi';
import ItemDetailCointainer from './compoments/ItemDetailCointainer';


function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailCointainer/>
    </>
  )
}

export default App
