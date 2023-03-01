import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jfif";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVT1,
    name: "Son Anh Nguyen",
    review:
      "[VieSmart - Logo & Website & Uniform] Professional design, clean and good-looking. Hope for the next co-opporation.",
  },
  {
    avatar: AVT2,
    name: "Huyen Trang Nguyen",
    review:
      "[BioRinse & Baby's Tooth - Package] Awesome works, really cute and modern design! A little bit in a nick of time but the result still worthy.",
  },
  {
    avatar: AVT3,
    name: "Sunhouse QM",
    review:
      "[Sunhouse QM - Uniform] Great job! Very nice design, simple but effective.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Response From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container clients_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="client_item">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="clients_name">{name}</h5>
              <small>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
