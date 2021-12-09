//Componentes
import CartWidget from "../CartWidget/CartWidget";
//Estilos
import './NavBar.css';
//Imagenes
import logo from '../../img/logo94_w.png';
//React-Router-Dom
import{ Link, NavLink} from "react-router-dom"
//Context
import { CartContext } from '../CartContext/CartContext';
//React
import { useContext} from 'react';

//NavBar de la aplicacion con los links a las distintas categorias
const NavBar = () =>{

  const [cartContent, setCartContent, setTotalItems, totalItems, addItem, removeItem, clear, isInCart, cartIndex] = useContext(CartContext);

  return(
      <nav>
          <div className="nav-wrapper top green darken-3">
            <div className='logoContainer'>
              <Link className="brand-logo" to="/"><img src={logo} alt="Tienda Nerd"></img></Link>
            </div>
            <div className='NavBarItems'>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <NavLink activeclassname="active" to="/category/deals" className="Link">Ofertas</NavLink>
                <NavLink activeclassname="active" to="/category/new" className="Link">Novedades</NavLink>
                <NavLink activeclassname="active" to="/category/coming" className="Link">Próximamente</NavLink>
                <NavLink activeclassname="active" to="/category/best" className="Link">TOP</NavLink>
                <NavLink activeclassname="active" to="/contacto" className="Link">Contacto</NavLink>
              </ul>
            </div>
            <Link to="/cart" className="link">
              {totalItems>0 ? <CartWidget /> : <></>}
            </Link>
          </div>
      </nav>
  )
};

export default NavBar;