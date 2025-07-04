import SearchLayer from "./Layer/SearchLayer";
import "../../css/range.css";
import { useState } from "react";

const AriaContext = () => {
  const dummyButtons = ["버튼1", "버튼2", "버튼3"];
  const [openLayer, setOpenLayer] = useState(false);
  const [isActive, setIsActive] = useState();
  const handleLayer = (e, idx) => {
    // console.log(e, idx);
    setOpenLayer(true);
    setIsActive(idx);
  };

  const closeLayer = () => {
    setOpenLayer(false);
  };

  return (
    <div className="box__stay-filter">
      {dummyButtons.map((item, idx) => {
        return (
          <button
            key={`button-${idx}`}
            type="button"
            className={`button ${isActive === idx ? "button__active" : ""}`}
            onClick={(e) => handleLayer(e, idx)}
          >
            {item}
          </button>
        );
      })}
      {openLayer && <SearchLayer onClose={closeLayer} />}
    </div>
  );
};
export default AriaContext;
