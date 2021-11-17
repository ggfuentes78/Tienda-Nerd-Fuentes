import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
        </NavBar>
      </header>
      <div className="Principal">
        <ItemListContainer greeting='Bienvenido a Tienda Nerd!' />
      </div>
    </div>
  );
}





export default App;
