import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ItemCard from "../fragment/ItemCard";

const ItemCardWrap = ({ data }) => {
  return (
    <Swiper className="box__itemcard-wrapper" slidesPerView={5}>
      {data.map((item, idx) => {
        return (
          <SwiperSlide className="list-item" key={idx}>
            <ItemCard data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default ItemCardWrap;
