import React from 'react'
import heroImg from '../../assets/img/gym-02.png'
import dumbleIcon from "../../assets/img/dumble.png"
import "../../styles/hero.css"
const Her = () => {
  return <section id='home'>
    <div className="container">
        <div className="hero_wrapper">
            <div className="hero_content">
                <h2 className="section_title" data-aos='fade-up' data-aos-duration='1800'>Exercice is the key to a <span className="highlights">Healthy</span> Lifestyle  </h2>
                <p data-aos='fade-up' data-aos-delay='200' data-aos-duration='1500'>Loren ipsum dolor sit amet consecteur, adipisicing elit. <br />
                    Laboriosam repellendus odit fugit eos! Id,labore.
                </p>
                <div className="hero_btns" data-aos='fade-up' data-aos-delay='100' data-aos-duration='2000'>
                    <button className="register_btn">Get Started</button>
                    <button className="watch_btn"><span><i class="ri-play-fill"></i></span>
                    WAtch video</button>
                </div>
            </div>
            <div className="hero_img">
                <div className="hero_img-wrapper">
                    <div className="box-01">
                    <div className="box-02">
                    <div className="box-03">
                    <div className="box-img">
                        <img src={heroImg} alt="" />
                        </div>
                        </div>
                        </div>
                    </div>
                        <div className="heart_rate" data-aos='fade-right' data-aos-duration='1500'>
                            <h5>Heart Rate</h5>
                            <span><i class="ri-heart-pulse-fill"></i></span>
                            <h5>2567 BPM</h5>
                        </div>

                    <div className="gym_location" data-aos='fade-left' data-aos-duration='1500'>
                        
                        <span><i class="ri-map-pin-2-fill"></i></span>
                        <h5>Find a new <br /> gym near you</h5>
                    </div>
                    <div className="dumble_icon" data-aos='fade-down' data-aos-duration='1500'>
                        <img src={dumbleIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Her