import React from 'react'
import styles from '../../styles/Selection/Selection.module.scss'
import pick1 from '../../assets/images/shoeweekly.svg'

const Selection = () => {
  return (
    <div className={styles.section4}>
      <p className={styles.headersection4}>Our weekly pick</p>

      <div className={styles.shoeselector}>
        <img src={pick1} alt="pick1" />
        <img src={pick1} alt="pick1" />
      </div>
    </div>
  )
}

export default Selection
