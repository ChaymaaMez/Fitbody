import React from 'react'
import '../../styles/exercises.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extend from '../../assets/img/extended.png'
const Exercises = () => {
  return ( <section id='schedule'>
    <div className="container exercice_container">
        <div className="exercise-top">
            <h2 className="section_title">
                Benefits of <span className="highlights">Exercises</span>
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Error quidem, nam nihil expedita atque modi.
            </p>
        </div>
        <div className="exercises_wrapper">
            <div className="exercises-item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercises-icon">
                    <img src={lunges} alt="" />
                </span>
                <div className="exercises-content">
                    <h4>Healthy Life</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam iure, animi consectetur iste alias beatae? 
                    </p>
                </div>
            </div>

            <div className="exercises-item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercises-icon">
                    <img src={yoga} alt="" />
                </span>
                <div className="exercises-content">
                    <h4>Increased Flexibility</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam iure, animi consectetur iste alias beatae? 
                    </p>
                </div>
            </div>


            <div className="exercises-item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercises-icon">
                    <img src={extend} alt="" />
                </span>
                <div className="exercises-content">
                    <h4>Reducing Blood Pressure</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam iure, animi consectetur iste alias beatae? 
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section> )
}

export default Exercises