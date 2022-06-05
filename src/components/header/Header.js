import './HeaderStyles.css'
import {BiSearch} from "react-icons/bi"
import {BsPerson} from "react-icons/bs"
import {HiOutlineMenuAlt4} from "react-icons/hi"
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'
import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className={nav ? 'header header-bg' : 'header'}>
    <div className='header-logo'>
      <h2>BEACHES</h2>   
    </div> 
    <ul className='header-menu'>
      <li>Home</li>
      <li>Destinations</li>
      <li>Travel</li>
      <li>Book</li>
      <li>View</li>
    </ul>
    <div className="header-icons">
      <BiSearch className="icon" style={{marginRight: '1rem'}}/>
      <BsPerson className="icon" />
    </div>
    <div className="hamburger" onClick={handleNav}>
      {!nav ? (<HiOutlineMenuAlt4 className="icon" />) : (<AiOutlineClose className="icon" />)}
    </div>
    <div className={nav ? 'mobile-menu active' : "mobile-menu"}>
      <ul className="mobile-nav">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>View</li>
      </ul>
      <div className="mobile-menu-botoom">
        <div className="menu-icons">
          <button>Search</button>
          <button>Account</button>
        </div>
        <div className="social-icons">
          <FaFacebook className="icon"/>
          <FaInstagram className="icon"/>
          <FaTwitter className="icon"/>
          <FaPinterest className="icon"/>
          <FaYoutube className="icon"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header