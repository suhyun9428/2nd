import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import dummyData from "./dummyData/dummyData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../css/itemswiper.css";
import { Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";

const ItemSwiperContents = () => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  const handlePlay = () => {
    // console.log(
    //   "play?",
    //   swiperRef,
    //   swiperRef.current,
    //   swiperRef.current.autoplay
    // );
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };
  const handlePause = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };
  const togglePlayPause = () => {
    if (isPlaying) {
      handlePause();
      setIsPlaying(false);
    } else {
      handlePlay();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    // console.log("leave");
    setShowNavigation(false);
  };
  const handleMouseEnter = () => {
    // console.log("enter");
    setShowNavigation(true);
  };

  return (
    <div
      className="box__swiper-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showNavigation && (
        <>
          <button type="button" className="button__swiper button__swiper-prev">
            <span className="for-a11y">이전</span>
          </button>
          <button type="button" className="button__swiper button__swiper-next">
            <span className="for-a11y">다음</span>
          </button>
        </>
      )}
      <Swiper
        slidesPerView={4}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: ".button__swiper.button__swiper-next",
          prevEl: ".button__swiper.button__swiper-prev",
        }}
        pagination={{
          type: "fraction",
        }}
        centeredSlides={true}
        onInit={(swiper) => setActiveIdx(swiper.realIndex)}
        onSlideChangeTransitionStart={(swiper) =>
          setActiveIdx(swiper.realIndex)
        }
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {dummyData.items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <a className="link__item">
                <img
                  src={item.img.imgUrl}
                  alt={item.img.imgAlt}
                  className="image"
                />
                {activeIdx === idx && (
                  <div className="box__text-wrap">
                    <strong className="text__title">{item.item.title}</strong>
                    <p className="text__subtitle">
                      {item.item.subtitle.split("\n").map((text, idx) => {
                        return (
                          <Fragment key={idx}>
                            {text}
                            <br />
                          </Fragment>
                        );
                      })}
                    </p>
                  </div>
                )}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        type="button"
        className={`button__control ${isPlaying ? "button__control--pause" : "button__control--play"}`}
        onClick={togglePlayPause}
      >
        <span className="for-a11y">{isPlaying ? "play" : "pause"}</span>
      </button>
    </div>
  );
};
export default ItemSwiperContents;
