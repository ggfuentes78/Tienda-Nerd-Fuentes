import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';


const NavBar = () =>{

    return(
        <nav>
            <div className="nav-wrapper green darken-3">
              <div className='logoContainer'>
                <a href="#" className="brand-logo"><img src="./logo94_w.png" alt="Tienda Nerd"></img></a>
              </div>
              <div className='NavBarItems'>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#">Gaming</a></li>
                  <li><a href="#">Coleccionables</a></li>
                  <li><a href="#">Indumentaria</a></li>
                  <li><a href="#">Comics</a></li>
                </ul>
              </div>
              <CartWidget />
            </div>
        </nav>
    )
};

export default NavBar;