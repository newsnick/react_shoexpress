import React from 'react'
import styles from '../../styles/NavFooter/NavFooter.module.scss'

const NavFooter = () => {
  const navFooterItems = [
    { label: 'Data Settings', link: '#' },
    { label: 'Cookie Settings', link: '#' },
    { label: 'Privacy Policy', link: '#' },
    { label: 'Terms And Conditions', link: '#' },
    { label: 'Imprint', link: '#' },
  ]

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

/* import React from 'react'
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
 */
