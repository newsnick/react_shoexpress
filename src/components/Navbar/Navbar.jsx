import React from 'react'
import logo from '../../assets/images/shoexpresslogo.svg'
import glass from '../../assets/icons/glass.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <img className={styles.logo} src={logo} alt="shoexpress" />
        </div>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <img src={glass} alt="glass" />
      </nav>
    </div>
  )
}

export default Navbar
