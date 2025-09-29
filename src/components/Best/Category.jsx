import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useAtom } from "jotai";
import { activeTabIndex } from "./atom/atom";

const FirstTab = ({ data, idx }) => {
  const [activeIndex, setActiveIndex] = useAtom(activeTabIndex);
  const categoryName = data?.groupName;
  const categoryImage = data?.imageUrl;

  return (
    <a
      href="#"
      className="link__category"
      aria-selected={activeIndex === idx}
      onClick={(e) => {
        e.preventDefault();
        setActiveIndex(idx);
      }}
    >
      <div className="box__image">
        <img src={categoryImage} className="image" alt={categoryName} />
      </div>
      <p className="text__title">{categoryName}</p>
    </a>
  );
};

const SubCategory = ({ data }) => {
  // console.log(data, "???")
  if (!data || data.length === 0) return null;
  return (
    <ul className="list__subcategory">
      {data.map((item, idx) => {
        return (
          <li className="list-item" key={`sub-${idx}`}>
            <a href="#" className="link">
              {item.groupSubName}
            </a>
          </li>
        )
      }
      )}
    </ul>
  )
}

const Category = ({ data }) => {
  const [activeIndex] = useAtom(activeTabIndex);

  const activeItem = data[activeIndex];
  const hasSubGroups = activeItem?.subGroups && activeItem.subGroups.length > 1;


  return (
    <div className="box__category-wrapper">
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
            nextEl: ".swiper-button-next.button__swiper-next",
            prevEl: ".swiper-button-prev.button__swiper-prev",
          }}
        >
          {data.map((item, idx) => {
            return (
              <SwiperSlide key={`item-${idx}`} className={`list-item ${activeIndex === idx ? "list-item--active" : ""}`}>
                <FirstTab data={item} idx={idx} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {hasSubGroups && < SubCategory data={activeItem.subGroups} />}
    </div>);
};

export default Category;
