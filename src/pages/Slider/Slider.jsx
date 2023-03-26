import React from 'react'
import styles from '../../styles/Slider/Slider.module.scss'
import Slideshow from '../../components/Slideshow/Slideshow'
import { SliderData } from '../../components/Sliderdata/Sliderdata'

const Slider = () => {
  return (
    <div className={styles.section3}>
      <p className={styles.headersection3}>Popular right now</p>
      <Slideshow slides={SliderData} />

      <div className={styles.shoeslider}></div>
    </div>
  )
}

export default Slider
