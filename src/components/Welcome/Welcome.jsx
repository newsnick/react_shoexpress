import React from 'react'
import styles from '../../styles/Welcome/Welcome.module.scss'
import Button from '../Button/Button.jsx'

const Welcome = () => {
  return (
    <div className={styles.welcomesection}>
      <p className={styles.header}>Sports Shoes</p>
      <p className={styles.header2}>
        <p className={styles.header2alt}>Men`s</p> collection
      </p>
      <p className={styles.welcometext}>
        Find your true style with shoexpress and explore the variety of playful,
        colourful designs!
      </p>
      <Button label="Shop Now ->" />
    </div>
  )
}

export default Welcome
