import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import ListTypes from "./ListTypes";
import InputRange from "./InputRange";
// import InputRangeTest from "./InputRangeTest";
import SelectOptions from "./SelectOptions";

const SearchLayer = ({ onClose, openLayerRef, buttonRef, idx }) => {
  const layerRef = useRef(null);
  const [reset, setReset] = useState(false);
  const handleReset = () => {
    setReset(!reset);
  };
  const handleKeyDown = (e) => {
    var focusElString =
      'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], input[type="radio"]';
    var focusEl = layerRef.current?.querySelectorAll(focusElString);
    if (!focusEl || focusEl.length === 0) return;

    var firstTab = focusEl[0];
    var lastTab = focusEl[focusEl.length - 1];

    if (e.key === "Tab") {
      var activeEl = document.activeElement;
      if (e.shiftKey && activeEl === firstTab) {
        e.preventDefault();
        lastTab.focus();
      } else if (!e.shiftKey && activeEl === lastTab) {
        e.preventDefault();
        firstTab.focus();
      }
    }

    if (e.key === "Escape") {
      onClose?.();
      if (idx !== undefined) {
        openLayerRef.current[idx]?.focus();
      }
    }
  };

  useEffect(() => {
    const focusElString =
      'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], input[type="radio"]';
    const focusEl = layerRef.current?.querySelectorAll(focusElString);
    if (focusEl && focusEl.length > 0) {
      focusEl[0].focus();
    }
  }, []);

  return (
    <div
      className="box__layer box__layer-search box__layer--active"
      ref={layerRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      <div className="box__layer-content">
        <div className="box__layer-header">
          <p className="text__header">상세검색</p>
          <button
            type="button"
            className="button__close"
            onClick={() => {
              onClose?.();
              if (idx !== undefined) openLayerRef.current[idx]?.focus();
            }}
            ref={buttonRef}
          >
            x
          </button>
        </div>
        <div className="box__layer-body">
          <div className="box__search-container">
            <ListTypes isReset={reset} />
            <div className="box__search-details">
              <div className="box__search-price">
                <InputRange isReset={reset} />
                {/* <InputRangeTest /> */}
              </div>
              <div className="box__search-name">
                <p className="text__title">호텔명</p>
                <label htmlFor="form__searchname"></label>
                <input
                  className="form__searchname"
                  type="text"
                  id="form__searchname"
                  placeholder="(예:신라호텔)을 입력하세요"
                />
              </div>
              <div className="box__search-options">
                <SelectOptions isReset={reset} />
              </div>
            </div>
          </div>
          <div className="box__buttons-wrap">
            <button
              type="button"
              className="button__reset"
              onClick={handleReset}
            >
              초기화
            </button>
            <button type="button" className="button__result">
              13개의 숙박 보기
            </button>
          </div>
        </div>
      </div>
      <div className="box__dimmed"></div>
    </div>
  );
};

export default SearchLayer;
