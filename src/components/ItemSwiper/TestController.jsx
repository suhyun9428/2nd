import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummyData from "./dummyData/dummyData";

const TestController = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const { newItems } = dummyData;

  return (
    <div className="box__swiper-controller">
      <button type="button" className="swiper-button-prev button__swiper-prev">
        <span className="for-a11y">이전</span>
      </button>
      <button type="button" className="swiper-button-next button__swiper-next">
        <span className="for-a11y">다음</span>
      </button>
      <Swiper
        className="box__control"
        modules={[Controller, Navigation, Pagination]}
        controller={{ control: controlledSwiper }}
        navigation={{
          nextEl: ".swiper-button-next.button__swiper-next",
          prevEl: ".swiper-button-prev.button__swiper-prev",
        }}
        pagination={{
          type: "bullet",
        }}
        spaceBetween={30}
      >
        {newItems.map((image, idx) => (
          <SwiperSlide key={`slide__${idx}`}>
            <a href={image.href} className="link__newitems">
              <img
                className="image"
                src={image.imgUrl}
                data-src={image.imgUrl}
                alt={image.imgAlt}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="box__controlled"
        modules={[Controller]}
        onSwiper={setControlledSwiper}
        slideToClickedSlide={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={10}
      >
        {newItems.map((image, idx) => (
          <SwiperSlide key={`slide__${idx}`}>
            <img
              src={image.imgUrl}
              data-src={image.imgUrl}
              className="image__small"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TestController;
