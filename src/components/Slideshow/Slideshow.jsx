import React, { useState } from 'react'
import SliderTop from '../../components/SliderTop/SliderTop.jsx'
import SliderBottom from '../../components/SliderBottom/SliderBottom.jsx'
import '../../styles/Slideshow/Slideshow.css'

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const goToSlide = (index) => {
    setCurrent(index)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <SliderTop goToSlide={goToSlide} />
      <SliderBottom
        current={current}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </section>
  )
}

export default Slideshow

/* import React, { useState } from 'react'
import { SliderData } from '../../utils.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
//import styles from '../../styles/Slideshow/Slideshow.module.scss'
import '../../styles/Slideshow/Slideshow.css'

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const goToSlide = (index) => {
    setCurrent(index)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <div className="slidertop">
        {' '}
        <button className="nav-button" onClick={() => goToSlide(0)}>
          Sneakers
        </button>
        <button className="nav-button" onClick={() => goToSlide(1)}>
          Sport Shoes
        </button>
        <button className="nav-button" onClick={() => goToSlide(2)}>
          Oxford
        </button>
        <button className="nav-button" onClick={() => goToSlide(3)}>
          Sale
        </button>
      </div>
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
    </section>
  )
}

export default Slideshow
 */
