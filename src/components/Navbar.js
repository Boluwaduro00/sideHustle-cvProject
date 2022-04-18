import React from 'react'
import image from '../images/Passport.jpg'
import {FiMail} from 'react-icons/fi'
import {AiOutlinePhone} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
import {IoLogoLinkedin} from 'react-icons/io'

export default function Navbar() {
  return (
    <nav className='nav'>
        <img className='logo' src={image} alt="" />
        <div className='name-div'>    
            <h2>Moboluwaduro Adebajo</h2>
            <p>Software Developer</p>
        </div>
        <ul className='profile-info'>
            <li> <FiMail/> adebajobolu@gmail.com</li>
            <li> <AiOutlinePhone/> 07062410320</li>
            <li> <IoLocationOutline/>Nigeria</li>
            <li> <IoLogoLinkedin/>linkedin.com/in/moboluwaduro-adebajo</li>
        </ul>
    </nav>
  )
}
