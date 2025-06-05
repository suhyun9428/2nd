import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Category = ({ data }) => {
  // console.log(data, "data");
  //   const [selected, setSelected] = useState(false);
  //   const hasSubData = data.filter((item) => item.subGroups.length > 1);
  //   for (var i = 0; i < data.length; i++) {
  //     const subCategories = data[i].subGroups?.length > 1;
  //     console.log(subCategories, "length");
  //   }
  return (
    <>
      <FirstTab data={data} />
      {/* data.subGroups?.length > 1 && */}
      {/* <SecondTab data={data} /> */}
    </>
  );
};
export default Category;
