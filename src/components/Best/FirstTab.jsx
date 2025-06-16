import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

const FirstTab = ({ data }) => {
  return (
    <div className="box__category-swiper">
      <Swiper
        className="list__category"
        slidesPerView="auto"
        modules={[Navigation]}
        navigation
      >
        {data.map((item, idx) => {
          const categoryName = item?.groupName;
          const categoryImage = item?.imageUrl;
          return (
            <SwiperSlide
              key={idx}
              // ${selected && "list-item--active"}`
              className="list-item"
            >
              <a
                href="#"
                className="link__category"
                // aria-selected={true}
              >
                <div className="box__image">
                  <img src={categoryImage} className="image" />
                </div>
                <p className="text__title">{categoryName}</p>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default FirstTab;
