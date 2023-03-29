/* import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/MenuBar/MenuBar.module.css'

const MenuBar = () => {
  return (
    <div className={styles.MenuBar}>
      <ul className={styles.MenuBar}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/presentation">Present</Link>
        </li>
        <li>
          <Link to="/slider">Slider</Link>
        </li>
        <li>
          <Link to="/selection">Selection</Link>
        </li>
        <li>
          <Link to="/promotion">Promotion</Link>
        </li>
        <li>
          <Link to="/footer">Footer</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar */

import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/MenuBar/MenuBar.module.css'

const menuItems = [
  { id: 1, name: 'Home', link: '/home' },
  { id: 2, name: 'Present', link: '/presentation' },
  { id: 3, name: 'Slider', link: '/slider' },
  { id: 4, name: 'Selection', link: '/selection' },
  { id: 5, name: 'Promotion', link: '/promotion' },
  { id: 6, name: 'Footer', link: '/footer' },
]

const MenuBar = () => {
  return (
    <div className={styles.MenuBar}>
      <ul className={styles.MenuBar}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBar

/* import React, { useState } from 'react'
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom'
import Presentation from '../../pages/Presentation/Presentation'
import Home from '../../pages/Home/Home'
import Footer from '../../pages/Footer/Footer'
import Selection from '../../pages/Selection/Selection'
import Slider from '../../pages/Slider/Slider'
import Promotion from '../../pages/Promotion/Promotion'
import styles from '../../styles/MenuBar/MenuBar.module.css'

const MenuBar = () => {
  const [openProfile, setOpenProfile] = useState(false)

  return (
    <div className={styles.MenuBar}>
      <ul className={styles.MenuBar}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/presentation">Present</Link>
        </li>
        <li>
          <Link to="/slider">Slider</Link>
        </li>
        <li>
          <Link to="/selection">Selection</Link>
        </li>
        <li>
          <Link to="/promotion">Promotion</Link>
        </li>
        <li>
          <Link to="/footer">Footer</Link>
        </li>
      </ul>
    </div>
  )
}

const MenuBarWithRouter = withRouter(MenuBar)

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/home" element={<Home />} />
      <Route path="/presentation" element={<Presentation />} />
      <Route path="/slider" element={<Slider />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/" element={<MenuBarWithRouter />} />
    </Switch>
  </Router>
)

export default Routes
 */
