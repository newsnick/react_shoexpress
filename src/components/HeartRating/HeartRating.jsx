import React, { useState } from 'react'
import styles from '../../styles/HeartRating/HeartRating.module.scss'
import { FaHeart } from 'react-icons/fa'

const HeartRating = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div>
      <h1 className={styles.reviews}>Reviews</h1>
      {[...Array(5)].map((heart, i) => {
        const ratingValue = i + 1

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaHeart
              className={styles.heart}
              color={ratingValue <= (hover || rating) ? 'red' : '#e4e5e9'}
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
    </div>
  )
}

export default HeartRating
