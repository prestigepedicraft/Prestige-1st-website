import React, { useEffect, useState } from 'react'
import c1 from '../assets/carousel1.jpg'
import c2 from '../assets/carousel2.jpg'
import c3 from '../assets/carousel3.jpg'

const images = [c1, c2, c3]

function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="carousel">
      <img src={images[index]} alt={`carousel-${index+1}`} className="carousel-img"/>
      <div className="carousel-indicators">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
