import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlidePractice = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      onInit={(swiper) => setActiveIndex(swiper.realIndex)}
      onTransitionEnd={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {[0, 1, 2].map((_, idx) => (
        <SwiperSlide key={idx}>
          <div
            style={{
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#eee",
              border: "1px solid #ccc",
            }}
          >
            <h2>슬라이드 {idx + 1}</h2>
            {activeIndex === idx && "현재 슬라이드 입니다!"}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SlidePractice;
