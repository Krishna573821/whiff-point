import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/menu/Dal Fry.jpg",
  "/images/menu/Dal Makhani.jpg",
  "/images/menu/dragon paneer.jpg",
  "/images/menu/Kadai Paneer.jpg",
  "/images/menu/Malai Kofta.jpg",
];

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        mousewheel={{ forceToAxis: true }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
