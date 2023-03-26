/* import React, { useState } from 'react'
import styles from '../../styles/NumberIcon/NumberIcon.module.scss'

const NumberIcon = ({ id, value }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const backgroundColor = clicked ? '#007D8B' : 'transparent'
  const textColor = clicked ? '#fff' : '#007D8B'

  return (
    <div
      className={`${styles.numberIcon} ${clicked ? styles.clicked : ''}`}
      style={{ backgroundColor, color: textColor }}
      onClick={handleClick}
    >
      {value}
    </div>
  )
}

const numberIcons = [
  { id: 1, value: 41 },
  { id: 2, value: 42 },
  { id: 3, value: 43 },
  { id: 4, value: 44 },
]

const NumberIconsRow = () => {
  return (
    <div className={styles.numberIconsRow}>
      {numberIcons.map(({ id, value }) => (
        <NumberIcon key={id} id={id} value={value} />
      ))}
    </div>
  )
}

export default NumberIconsRow
 */

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
