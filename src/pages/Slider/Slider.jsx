import React from 'react'
import styles from './Slider.module.scss'
import slide1 from '../../assets/images/shoeslide1.svg'
import slide2 from '../../assets/images/shoeslide2.svg'
import slide3 from '../../assets/images/shoeslide3.svg'
import slide4 from '../../assets/images/shoeslide4.svg'
import slide5 from '../../assets/images/shoeslide5.svg'
import slide6 from '../../assets/images/shoeslide6.svg'

const Slider = () => {
  return (
    <div className={styles.section3}>
      <p className={styles.headersection3}>Popular right now</p>
      <div className={styles.buttonrow}>
        <button className={styles.btnslider}>Sneakers</button>
        <button className={styles.btnslider}>Sport Shoes</button>
        <button className={styles.btnslider}>Oxford</button>
        <button className={styles.btnslider}>Sale</button>
      </div>
      <div className={styles.shoeslider}>
        <img src={slide1} alt="shoe1" />
        <img src={slide2} alt="shoe2" />
        <img src={slide3} alt="shoe3" />
        <img src={slide4} alt="shoe4" />
        <img src={slide5} alt="shoe5" />
        <img src={slide6} alt="shoe6" />
      </div>
    </div>
  )
}

export default Slider
