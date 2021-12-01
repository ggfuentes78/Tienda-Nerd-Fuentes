//Estilos
import './App.css';

//Componentes
import NavBar from './components/NavBar/NavBar.js'

//Views
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import Contacto from './views/Contacto/Contacto';
import Carrito from './views/Carrito/Carrito';
import Error from './views/Error/Error';

//React Router Dom 6.0.2
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"



function App() {
  
  const clickHandler= (e) =>{
    e.stopPropagation()
}
  return (
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
            <Route path="*" element={<Error/>} />
          </Routes> 
        </div>
      </div>
    </Router>
  );
}





export default App;
