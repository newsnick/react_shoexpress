import React from 'react'
import styles from '../../styles/Button/Button.module.scss'

const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
