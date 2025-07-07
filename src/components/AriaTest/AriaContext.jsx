import SearchLayer from "./Layer/SearchLayer";
import "../../css/range.css";
import { useState, useRef } from "react";

const AriaContext = () => {
  const dummyButtons = ["버튼1", "버튼2", "버튼3"];
  const openLayerRef = useRef([]);
  const buttonRef = useRef(null);
  const [openLayer, setOpenLayer] = useState(false);
  const [isActive, setIsActive] = useState();

  const handleLayer = (e, idx) => {
    setOpenLayer(true);
    setIsActive(idx);
    openLayerRef.current[idx]?.focus();
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
            ref={(el) => (openLayerRef.current[idx] = el)}
          >
            {item}
          </button>
        );
      })}
      {openLayer && (
        <SearchLayer
          onClose={closeLayer}
          openLayerRef={openLayerRef}
          buttonRef={buttonRef}
          idx={isActive}
        />
      )}
    </div>
  );
};
export default AriaContext;
