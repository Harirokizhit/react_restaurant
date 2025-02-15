import React from 'react';
import Logo from '../assets/pizza.jpg'
import { Link } from 'react-router-dom';
import { IoReorderFour } from "react-icons/io5";
import '../styles/Navbar.css'
import { useState } from 'react';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} alt="Description of the image"/>
            <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
                <IoReorderFour />
            </button>
        </div>
    </div>
  )
}

export default Navbar