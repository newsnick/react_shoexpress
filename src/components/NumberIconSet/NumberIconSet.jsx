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
        <h1 className={styles.title}>Size</h1>
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

/* import React, { useState } from 'react'
import NumberIcon from '../../components/NumberIcon/NumberIcon.jsx'
import styles from '../../styles/NumberIconSet/NumberIconSet.module.scss'

const NumberIconSet = () => {
  const [selected, setSelected] = useState(null)

  const handleIconClick = (number) => {
    setSelected(number)
  }

  return (
    <div>
      <div>
        <h1 className={styles.title}>Size</h1>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <NumberIcon
          number={41}
          selected={selected === 41}
          onClick={() => handleIconClick(41)}
          setSelection={setSelected}
        />
        <NumberIcon
          number={42}
          selected={selected === 42}
          onClick={() => handleIconClick(42)}
          setSelection={setSelected}
        />
        <NumberIcon
          number={43}
          selected={selected === 43}
          onClick={() => handleIconClick(43)}
          setSelection={setSelected}
        />
        <NumberIcon
          number={44}
          selected={selected === 44}
          onClick={() => handleIconClick(44)}
          setSelection={setSelected}
        />
      </div>
    </div>
  )
}

export default NumberIconSet
 */
