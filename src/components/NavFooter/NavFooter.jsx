import React from 'react'
import styles from '../../styles/NavFooter/NavFooter.module.scss'
import { navFooterItems } from '../../utils'

const NavFooter = () => {
  return (
    <div>
      <nav className={styles.navfooter}>
        <ul className={styles.ulfooter}>
          {navFooterItems.map((item) => (
            <li key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavFooter
