import React from 'react'
import logo from '../../assets/images/shoexpresslogo.svg'
import glass from '../../assets/icons/glass.svg'
import styles from '../../styles/NavFooter/NavFooter.module.scss'

const NavFooter = () => {
  return (
    <div>
      <nav className={styles.navfooter}>
        <ul className={styles.ulfooter}>
          <li>
            <a href="#">Data Settings</a>
          </li>
          <li>
            <a href="#">Cookie Settings</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms And Conditions</a>
          </li>
          <li>
            <a href="#">Imprint</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavFooter
