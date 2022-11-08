import React from 'react';
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <>
        
    
      <header className="nav">
       
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link  activeClass="active" smooth spy to="my">
                MY
              </Link>
            </li>
            <li >
              <Link activeClass="active" smooth spy to="name">
                NAME
              </Link>
            </li>
            <li >
              <Link  activeClass="active" smooth spy to="is">
                IS
              </Link>
            </li>
            <li >
              <Link  activeClass="active" smooth spy to="khan">
               KHAN
              </Link>
            </li>
          </ul>
        </nav>
      </header>
     
      
    
        </>
    );
};

export default Navbar;