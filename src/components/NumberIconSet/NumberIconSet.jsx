import React, { useState } from 'react'
import NumberIcon from '../../components/NumberIcon/NumberIcon.jsx'
import styles from '../../styles/NumberIconSet/NumberIconSet.module.scss'

const NumberIconSet = () => {
  const [selected, setSelected] = useState(null)

  const handleIconClick = (number) => {
    setSelected(number)
  }

  const icons = [41, 42, 43, 44]

  return (
    <div>
      <div>
        <p>Size</p>
      </div>
      <div className={styles.numbers}>
        {icons.map((number) => (
          <NumberIcon
            key={number}
            number={number}
            selected={selected === number}
            onClick={() => handleIconClick(number)}
            setSelection={setSelected}
          />
        ))}
      </div>
    </div>
  )
}

export default NumberIconSet
