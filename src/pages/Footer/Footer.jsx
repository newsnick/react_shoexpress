import React from 'react'

import styles from '../../styles/Footer/Footer.module.scss'
import FooterList from '../../components/FooterList/FooterList'
import NavFooter from '../../components/NavFooter/NavFooter'

const Footer = () => {
  return (
    <div className={styles.section6}>
      <div className={styles.footerlist}>
        <FooterList />
        <NavFooter />
      </div>
      <NavFooter />
      <div className={styles.naviend}></div>
      <NavFooter />
    </div>
  )
}

export default Footer
