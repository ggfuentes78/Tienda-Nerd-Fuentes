import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
        </NavBar>
      </header>
      <div className="Principal">
        <h4>
          Bienvenido a Tienda Nerd!
        </h4>
      </div>
    </div>
  );
}





export default App;
