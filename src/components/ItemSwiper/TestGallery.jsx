import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummyData from "./dummyData/dummyData";
import "../../css/test_swiper.css";

const TestGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { newItems } = dummyData;

  return (
    <div className="box__swiper-thumbs">
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="box__thumbs"
        loop={true}
      >
        {newItems.map((image, i) => (
          <SwiperSlide key={`main-${i}`}>
            <img src={image.imgUrl} alt={image.imgAlt} className="image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs, FreeMode]}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress={true}
        className="box__subthumbs"
        freeMode={true}
        loop={false}
        onSwiper={setThumbsSwiper}
      >
        {newItems.map((image, i) => (
          <SwiperSlide key={`thumb-${i}`}>
            <img src={image.imgUrl} alt={image.imgAlt} className="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TestGallery;
