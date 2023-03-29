import React from 'react'

const SliderTop = ({ goToSlide }) => {
  const categories = ['Sneakers', 'Sport Shoes', 'Oxford', 'Sale']

  return (
    <div className="slidertop">
      {categories.map((category, index) => (
        <button
          key={index}
          className="nav-button"
          onClick={() => goToSlide(index)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default SliderTop
