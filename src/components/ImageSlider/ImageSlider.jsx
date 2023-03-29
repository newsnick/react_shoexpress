/* import React, { useState } from 'react'
import styles from '../../styles/ImageSlider/ImageSlider.module.scss'
import pick1 from '../../assets/images/shoeweekly.svg'
import pick2 from '../../assets/images/shoeslide2.svg'
import pick3 from '../../assets/images/shoeslide3.svg'
import pick4 from '../../assets/images/shoeslide4.svg'

const ImageSlider = () => {
  const imgs = [
    { id: 0, value: pick1 },
    { id: 1, value: pick2 },
    { id: 2, value: pick3 },
    { id: 3, value: pick4 },
  ]

  const [sliderData, setSliderData] = useState(imgs[0])
  const handleClick = (index) => {
    console.log(index)
    const slider = imgs[index]
    setSliderData(slider)
  }

  return (
    <div>
      <img src={sliderData.value} />
      <div>
        {imgs.map((data, i) => (
          <img
            key={data.id}
            src={data.value}
            onClick={() => handleClick(i)}
            height="143"
            width="141"
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
 */

import React, { useState } from 'react'
import styles from '../../styles/ImageSlider/ImageSlider.module.scss'
import pick1 from '../../assets/images/shoeweekly.svg'
import pick2 from '../../assets/images/shoeslide2.svg'
import pick3 from '../../assets/images/shoeslide3.svg'
import pick4 from '../../assets/images/shoeslide4.svg'
import PickedImages from '../../components/PickedImages/PickedImages.jsx'
import HeartRating from '../HeartRating/HeartRating'
import NumberIconsRow from '../NumberIcon/NumberIcon'
import NumberIconSet from '../../components/NumberIconSet/NumberIconSet.jsx'
import ColorSelect from '../../components/ColorSelect/ColorSelect.jsx'

const ImageSlider = () => {
  const imgs = [
    { id: 0, value: pick1 },
    { id: 1, value: pick2 },
    { id: 2, value: pick3 },
    { id: 3, value: pick4 },
  ]

  const [sliderData, setSliderData] = useState(imgs[0])
  const handleClick = (index) => {
    console.log(index)
    const slider = imgs[index]
    setSliderData(slider)
  }

  return (
    <div className={styles.boxes}>
      <PickedImages imgSrc={sliderData.value} />

      <div className={styles.selections}>
        <div className={styles.ratings}>
          <ColorSelect />
          <NumberIconSet />
          <HeartRating />
        </div>
        {imgs.map((data, i) => (
          <div className={styles.thumbnails}>
            {' '}
            <img
              key={data.id}
              src={data.value}
              onClick={() => handleClick(i)}
              height="143"
              width="141"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
