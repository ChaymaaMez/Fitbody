import React from 'react';
import '../../styles/testimonials.css'
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <>
     <section>
      <div className="container sliders">
        <h2 className="section_title">Testimonials</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="slide_item">
          <div className="slide_img-01">
            <img src={avatar01} alt="" /></div>
            <h4>Jesica JImes</h4>
            <p>Wow, this gym is truly top-notch! The state-of-the-art equipment, dedicated trainers, and vibrant atmosphere make it the perfect place to achieve your fitness goals.</p>
          
          </div> </SwiperSlide>
        <SwiperSlide> <div className="slide_item">
          <div className="slide_img-02">
            <img src={avatar02} alt="" /></div>
            <h4>Rebika Tolis</h4>
            <p>the friendly and supportive staff create a welcoming environment that motivates you to push your limits. Joining this gym was one of the best decisions I've made for my health and well-being!" 💪🏋️‍♀️🏊‍♂️🧘‍♀️</p>
          </div>
          </SwiperSlide>
        <SwiperSlide> <div className="slide_item">
          <div className="slide_img-03">
            <img src={avatar01} alt="" /></div>
            <h4>Anita Kamis</h4>
            <p>The cleanliness and hygiene standards here are impressive, ensuring a safe and enjoyable workout experience. With a wide range of classes and training options, you'll find the perfect fitness routine that suits your needs.</p>
          </div>
          </SwiperSlide>
      </Swiper>
      </div>
     </section>
    </>
  );
}
