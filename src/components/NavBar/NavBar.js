import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import logo from '../../img/logo94_w.png';


const NavBar = () =>{

    return(
        <nav>
            <div className="nav-wrapper top green darken-3">
              <div className='logoContainer'>
                <a href="index.html" className="brand-logo"><img src={logo} alt="Tienda Nerd"></img></a>
              </div>
              <div className='NavBarItems'>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="index.html">Gaming</a></li>
                  <li><a href="index.html">Coleccionables</a></li>
                  <li><a href="index.html">Indumentaria</a></li>
                  <li><a href="index.html">Comics</a></li>
                </ul>
              </div>
              <CartWidget />
            </div>
        </nav>
    )
};

export default NavBar;