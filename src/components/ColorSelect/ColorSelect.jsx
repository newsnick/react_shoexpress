import React from 'react'
import ColorItem from '../../color-item.js'
import styles from '../../styles/ColorSelect/ColorSelect.module.scss'

const ColorSelect = () => {
  const colors = ['#121212', '#F6835F']

  return (
    <div className={styles.colorselect}>
      <div className={styles.colorswitcher}>
        <p>Colour</p>
        <div className={styles.colorlist}>
          {colors.map((color, idx) => (
            <ColorItem color={color} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorSelect
