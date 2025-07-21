import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const FirstTab = ({ data }) => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="box__category-swiper">
      <button type="button" className="swiper-button-prev button__swiper-prev">
        <span className="for-a11y">이전</span>
      </button>
      <button type="button" className="swiper-button-next button__swiper-next">
        <span className="for-a11y">다음</span>
      </button>
      <Swiper
        className="list__category"
        slidesPerView="auto"
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next.button__swiper-next',
          prevEl: '.swiper-button-prev.button__swiper-prev',
        }}
      >
        {data.map((item, idx) => {
          const categoryName = item?.groupName;
          const categoryImage = item?.imageUrl;
          return (
            <SwiperSlide
              key={idx}
              className={`list-item ${isActive === idx ? 'list-item--active':''}`}
            >
              <a
                href="#"
                className="link__category"
                aria-selected={isActive === idx}
                onClick={(e)=>
                  {
                    e.preventDefault();
                    setIsActive(idx);
                  }
                }
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

const Category = ({ data }) => {
  return (
    <FirstTab data={data} />
  );
};
export default Category;
