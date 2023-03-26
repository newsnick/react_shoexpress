import React from 'react'
import styles from '../../styles/Selection/Selection.module.scss'
import pick1 from '../../assets/images/shoeweekly.svg'
import HeartRating from '../../components/HeartRating/HeartRating'
import SizeSelect from '../../components/SizeSelect/SizeSelect'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

const Selection = () => {
  return (
    <div className={styles.section4}>
      <p className={styles.headersection4}>Our weekly pick</p>

      <div className={styles.shoeselector}>
        {/* <img src={pick1} alt="pick1" /> */}
        <div className={styles.selectbox}>
          <ImageSlider />
        </div>
      </div>
    </div>
  )
}

export default Selection
