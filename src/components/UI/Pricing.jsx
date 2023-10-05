import React from 'react'
import '../../styles/pricing.css'
const Pricing = () => {
  return <section id='pricing-plan'>
    
    <div className="container">
        <div className="pricing_top">
            <h2 className="section_title">
                Gym <span className="highlights">Pricing</span> Plan
            </h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipising <br /> elit.
                Omnis asperiores, rem voluptatum sit in ratione.
            </p>
        </div>
        <div className="pricing-wrapper">
            <div className="pricing-item" data-aos='fade-up' data-aos-duration='1500'>
                <div className="pricing_card-top">
                    <h2 className="section-title">Regular Member</h2>
                    <h2 className="pricing section-title">50$ <span>/month</span></h2>
                </div>
                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                    </ul>
                    <button className="register_btn">Join Now</button>
                </div>
            </div>

            <div className="pricing-item pricing-item01" data-aos='fade-up' data-aos-duration='1500'>
                <div className="pricing_card-top">
                    <h2 className="section-title">Premium Member</h2>
                    <h2 className="pricing section-title">70$ <span>/month</span></h2>
                </div>
                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                    </ul>
                    <button className="register_btn">Join Now</button>
                </div>
            </div>


            <div className="pricing-item pricing-item02" data-aos='fade-up' data-aos-duration='1500'>
                <div className="pricing_card-top">
                    <h2 className="section-title">Standard Member</h2>
                    <h2 className="pricing section-title">100$ <span>/month</span></h2>
                </div>
                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                    </ul>
                    <button className="register_btn">Join Now</button>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Pricing