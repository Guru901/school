import React from 'react'
import "./style.css"

const Slider = () => {
  return (
    <div className="slider">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item" data-bs-interval="10000">
            <img
              src="https://rpsjhalawar.com/images/slides/lr9b6r5l1hc4gw00g4.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://rpsjhalawar.com/images/slides/ezv4mo5ox3wwk4ok0.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rpsjhalawar.com/images/slides/px1t08gey4g4oogkg0.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}

export default Slider