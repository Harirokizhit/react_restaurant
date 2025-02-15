import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizzahome.jpeg';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
            <h1> Hari's Pizzeria </h1>
            <p> PIZZA IS GOOD TO EAT </p>
            <Link to="/menu">
            <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home