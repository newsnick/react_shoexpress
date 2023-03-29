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
