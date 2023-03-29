import React, { useState } from 'react'
import styles from '../../styles/NumberIcon/NumberIcon.module.scss'

const NumberIcon = ({ number, selected, onClick, setSelection }) => {
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    setSelection(number)
    onClick()
  }

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <div
      className={`${styles.numberIcon} ${selected ? styles.selected : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: selected ? '#007D8B' : hovered ? '#E0E0E0' : '',
      }}
    >
      <span className={styles.number}>{number}</span>
    </div>
  )
}

export default NumberIcon
