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

/* import React from 'react'

const SliderTop = ({ goToSlide }) => {
  return (
    <div className="slidertop">
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
  )
}

export default SliderTop
 */
