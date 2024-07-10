import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import './Nav.css';

function Nav() {
  const [ menuOpen, setMenuOpen ] = useState(false)
    return (
      <div>
      <nav className="nav-container">
        <Link className="title" to='/'><img src="littlelemonlogo.jpg" alt="Little Lemon Logo with lemon image" className="logo" /></Link>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
       <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/booking">Reserve Table</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>

       </ul>
      </nav>
      </div>
    );
  }
  export default Nav;