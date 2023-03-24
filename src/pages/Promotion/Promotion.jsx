import React from 'react'
import styles from '../../styles/Promotion/Promotion.module.scss'

const Promotion = () => {
  return (
    <div className={styles.section5}>
      <div className={styles.textpromo}>
        <p className={styles.promo}>become a member and get 20% off</p>
        <button className={styles.promobutton}>sign up for free now --></button>
      </div>
    </div>
  )
}

export default Promotion
