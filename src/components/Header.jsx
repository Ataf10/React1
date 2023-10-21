import React from 'react';
import "../styles/Header.scss"
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";
function Header () {
  return (
    <nav>
      <h1>Ataf Ali</h1>
      <main>
          <HashLink to ={"/#home"} className='link'>Home</HashLink>
          <Link to ={"/contact"} className='link'>Contact</Link>
          <HashLink to = {"/#about"} className='link'>About</ HashLink >
          <HashLink to ={"/#brands"} className='link'>Brands</HashLink>
          <Link to ={"/services"} className='link'>Services</Link>
      </main>
    </nav>
  );
}

export default Header;
