import React from 'react'
import styles from '../../styles/ButtonPres/ButtonPres.module.scss'

const ButtonPres = ({ label, onClick }) => {
  return (
    <button className={styles.buttonpres} onClick={onClick}>
      {label}
    </button>
  )
}

export default ButtonPres
