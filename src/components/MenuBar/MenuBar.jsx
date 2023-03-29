import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/MenuBar/MenuBar.module.css'
import { menuItems } from '../../utils'

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
