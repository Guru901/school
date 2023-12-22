import React from 'react'
import "./style.css"

const About = () => {
  return (
    <div className="about absolute-center">
    <h1 className="about-title">RPS Jhalawar</h1>
    <div className="about-des absolute-center">
      <div className="about-paras">
        <p className="about-p-1">
          RPS is the Vibrant Organization which produces the Skillfull
          Descent and Knowledgible powerhouses of Enthusiasm, continuosly
          Devoloping in the field of Technological Advancements in Education
          as well as having the best sports facilities which ensures the
          fitness of our Future Genration.
        </p>
        <p className="about-p-2">
          DPS Ruby Park, a CBSE affiliated school, has empowered students to
          step into the wider communities as confident and future-ready
          individuals, able to take the world in their stride
        </p>
      </div>
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="sample-img"
        />
      </div>
    </div>
    <button id="about-us-read-more" className="cur-po">Read More</button>
    <div className="slider-small">
      <img
        src="https://images.unsplash.com/photo-1682695798522-6e208131916d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="slider-img"
      />
      <img
        src="https://images.unsplash.com/photo-1682695798522-6e208131916d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="slider-img"
      />
      <img
        src="https://images.unsplash.com/photo-1682695798522-6e208131916d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="slider-img"
      />
    </div>
  </div>
  )
}

export default About