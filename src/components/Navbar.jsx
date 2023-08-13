import React from "react";
import { useEffect } from "react"; 

import "./navbar.css";

const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('header');
          if (header) {
            header.classList.toggle('sticky', window.scrollY > 0); 
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 

  return (
    
    <div className="navbar">
    <header>

      <a href='/' className='logo'>Logo</a>
      <ul className="list">
        <li><a href="/">Home</a></li>
        <li><a href="/">Jobs</a></li>
        <li><a href="/">Career Programs</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Help</a></li>
      </ul>
    </header>
      <section className="banner">
      <div className="overlay">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, maiores.</p>
        <input type="text" className='search' placeholder="Search..." />
      </div>
      </section>    

    
      
    </div>
    
  );
};

export default Navbar;




