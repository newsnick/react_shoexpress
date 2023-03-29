import React, { useState } from 'react'
import logo from '../../assets/images/shoexpresslogo.svg'
import glass from '../../assets/icons/glass.svg'
import styles from '../../styles/Navbar/Navbar.module.scss'
import MenuBar from '../../components/MenuBar/MenuBar.jsx'
import menubar from '../../assets/icons/menubar1.svg'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { links } from '../../utils'

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false)
  const [openSearchProfile, setSearchProfile] = useState(false)

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.menubar}>
          <img
            className={styles.menubaricon}
            src={menubar}
            alt="menubar"
            onClick={() => setOpenProfile((prev) => !prev)}
          />
        </div>
        <div>
          <img className={styles.logo} src={logo} alt="shoexpress" />
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <img
          className={styles.glass}
          src={glass}
          alt="glass"
          onClick={() => setSearchProfile((prev) => !prev)}
        />
      </nav>
      {openProfile && (
        <Router>
          <MenuBar />
        </Router>
      )}
      {openSearchProfile && <SearchBar />}
    </div>
  )
}

export default Navbar

/* import React, { useState } from 'react'
import logo from '../../assets/images/shoexpresslogo.svg'
import glass from '../../assets/icons/glass.svg'
import styles from '../../styles/Navbar/Navbar.module.scss'
import MenuBar from '../../components/MenuBar/MenuBar.jsx'
import menubar from '../../assets/icons/menubar1.svg'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false)
  const [openSearchProfile, setSearchProfile] = useState(false)

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.menubar}>
          <img
            className={styles.menubaricon}
            src={menubar}
            alt="menubar"
            onClick={() => setOpenProfile((prev) => !prev)}
          />
        </div>
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
        <img
          className={styles.glass}
          src={glass}
          alt="glass"
          onClick={() => setSearchProfile((prev) => !prev)}
        />
      </nav>
      {openProfile && (
        <Router>
          <MenuBar />
        </Router>
      )}
      {openSearchProfile && <SearchBar />}
    </div>
  )
}

export default Navbar
 */
