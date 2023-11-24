import React from 'react'
import logo from '../../assets/images/logo/logo.svg'
import phone from '../../assets/images/icons8-phone-26.png'

const Header = () => {
  return (
    <header>
        <div className="page_width">
          <nav>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav_link">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href><img src={phone} alt="" />+971586747123</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

  )
}

export default Header