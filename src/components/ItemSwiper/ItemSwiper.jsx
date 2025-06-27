import styled from "styled-components";
import ItemSwiperContents from "./ItemSwiperContents";
import TestController from "./TestController";
import TestGallery from "./TestGallery";

const Title = styled.h2`
  padding-top: 20px;
  text-align: left;
`;
const ItemSwiper = () => {
  return (
    <div className="box__swiper-contents">
      <ItemSwiperContents />
      <Title>Controller</Title>
      <TestController />
      <Title>Thumbs</Title>
      <TestGallery />
    </div>
  );
};
export default ItemSwiper;
