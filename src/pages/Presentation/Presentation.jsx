import React from 'react'
import styles from '../../styles/Presentation/Presentation.module.scss'
import shoepair from '../../assets/images/shoepair.svg'
import ButtonPres from '../../components/ButtonPres/ButtonPres.jsx'

const Presentation = () => {
  return (
    <div className={styles.section2}>
      <ButtonPres className={styles.buttonpres} label="Shop Now ->" />
      <img className={styles.shoepair} src={shoepair} alt="shoepair" />
      <div className={styles.textpresentation}>
        <p className={styles.presentation1}>Black</p>
        <p className={styles.presentation2}>Together in power</p>
        <p className={styles.presentation3}>Friday</p>
      </div>
    </div>
  )
}

export default Presentation
