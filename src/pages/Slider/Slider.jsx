import React from 'react'
import styles from '../../styles/Slider/Slider.module.scss'
import Slideshow from '../../components/Slideshow/Slideshow'
import { SliderData } from '../../utils.js'

const Slider = () => {
  return (
    <div className={styles.section3}>
      <p className={styles.headersection3}>Popular right now</p>
      {/*    {Array.isArray(arr) ? <Slideshow slides={SliderData} /> : null} */}
      <Slideshow slides={SliderData} />

      <div className={styles.shoeslider}></div>
    </div>
  )
}

export default Slider
