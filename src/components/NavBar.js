import { Fragment } from "react/cjs/react.production.min";

const NavBar = () =>{

    return(
        <nav>
            <div className="nav-wrapper green darken-2">
            <a href="#" className="brand-logo">Tienda Nerd</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Gaming</a></li>
                <li><a href="#">Coleccionables</a></li>
                <li><a href="#">Indumentaria</a></li>
                <li><a href="#">Comics</a></li>
              </ul>
            </div>
        </nav>
    )
};

export default NavBar;