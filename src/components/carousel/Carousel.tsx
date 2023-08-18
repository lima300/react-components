import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";

import image1 from "./assets/image-1.jpg";
import image2 from "./assets/image-2.jpg";
import image3 from "./assets/image-3.jpg";
import image4 from "./assets/image-4.jpg";
import image6 from "./assets/image-6.jpg";
import image7 from "./assets/image-7.jpg";

const slides = [image1, image2, image3, image4, image6, image7];

export const Carousel = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={3} loop>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
