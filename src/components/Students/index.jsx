import React from 'react'
import "./style.css"


const Students = () => {
  return (
    <div className="students absolute-center max-width">
        <h1 id="students-title">Distinguished Alumnus of DPS Ruby Park</h1>
        <p id="students-title-des">
          The alumni of DPS Ruby Park, Kolkata, are testaments to the
          institution's pursuit of excellence. Over the years, they have
          excelled in board exams and competitive arenas alike, underpinned by
          their deep-rooted values and virtues. Their accomplishments are a
          reflection of the dedicated mentorship of our distinguished faculty.
          Many have embarked on successful careers as CEOs, scientists,
          professors, and entrepreneurs, showcasing the comprehensive foundation
          provided by the school. Beyond academic brilliance, DPS Ruby Park's
          legacy lies in nurturing well-rounded individuals ready to face the
          complexities of the modern world.
        </p>
        <div className="student-images"></div>
      </div>
  )
}

export default Students