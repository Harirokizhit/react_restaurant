import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
        </div>
        <p> &copy; 2025 res-hari.com </p>
    </div>
  )
}

export default Footer