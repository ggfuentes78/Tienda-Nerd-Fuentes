//Estilos
import './App.css';

//Componentes
import NavBar from './components/NavBar/NavBar.js';

//Context Provider
import { CartProvider } from './components/CartContext/CartContext';


//Views
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import Contacto from './views/Contacto/Contacto';
import Carrito from './views/Cart/Cart';
import Error from './views/Error/Error';
import Shopping from './views/Shopping/Shopping';

//React Router Dom 6.0.2
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//Firebase
import { db } from './firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';



function App() {
  console.log(process.env.REACT_APP_API_KEY)
  const clickHandler= (e) =>{
    e.stopPropagation()
}
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header className="App-header"> 
            <NavBar />
          </header>
          <div className="Principal" onClick={clickHandler}>
            <Routes> 
              <Route path="/" element={<ItemListContainer greeting='Bienvenido a Tienda Nerd!'/>} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/cart" element={<Carrito itemsCarrito={0} />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="*" element={<Error/>} />
              <Route path="/*" element={<Error/>} />
            </Routes> 
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}





export default App;
