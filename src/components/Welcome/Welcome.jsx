import React from 'react'
import styles from '../../styles/Welcome/Welcome.module.scss'
import Button from '../Button/Button.jsx'

const Welcome = () => {
  return (
    <div className={styles.welcomesection}>
      <h1 className={styles.header}>Sports Shoes</h1>
      <h2 className={styles.header2}>
        <h2 className={styles.header2alt}>Men`s</h2> collection
      </h2>
      <p className={styles.welcometext}>
        Find your true style with shoexpress and explore the variety of playful,
        colourful designs!
      </p>
      <Button label="Shop Now ->" />
    </div>
  )
}

export default Welcome
