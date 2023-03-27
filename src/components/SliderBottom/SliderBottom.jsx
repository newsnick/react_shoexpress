import React from 'react'
import { SliderData } from '../../utils.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const SliderBottom = ({ current, nextSlide, prevSlide }) => {
  return (
    <div className="sliderbottom">
      <FaArrowAltCircleLeft className="leftarrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="shoe pair" className="image" />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default SliderBottom
