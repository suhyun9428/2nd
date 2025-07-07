import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ItemCard from "../fragment/ItemCard";

const ItemCardWrap = ({ data }) => {
  return (
    <>
      <Swiper
        className="box__itemcard-wrapper"
        slidesPerView={5}
        modules={[Navigation]}
        navigation={{
          nextEl: ".button__swiper.button__swiper-next",
          prevEl: ".button__swiper.button__swiper-prev",
        }}
        slidesPerGroup={5}
        loop
        onSwiper={(swiper) =>
          setTimeout(() => {
            swiper.params.navigation.prevEl =
              ".button__swiper.button__swiper-prev";
            swiper.params.navigation.nextEl =
              ".button__swiper.button__swiper-next";
            swiper.navigation.init();
            swiper.navigation.update();
          })
        }
      >
        {data.map((item, idx) => {
          return (
            <SwiperSlide className="list-item" key={idx}>
              <ItemCard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="button__swiper button__swiper-prev">
        <span className="for-a11y">이전</span>
      </button>
      <button className="button__swiper button__swiper-next">
        <span className="for-a11y">다음</span>
      </button>
    </>
  );
};
export default ItemCardWrap;
