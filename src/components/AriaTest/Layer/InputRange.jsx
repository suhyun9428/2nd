import styled from "styled-components";
import { useEffect, useState } from "react";

const ProgressBar = styled.div`
  position: absolute;
  top: 50%;
  height: 7px;
  border-radius: 10px;
  background-color: #ff8a9e;
  transform: translateY(-50%);
`;

const InputRange = ({ isReset }) => {
  const fixedMinValue = 0;
  const fixedMaxValue = 100;
  const gapValue = 1;
  const [minRange, setMinRange] = useState(fixedMinValue);
  const [maxRange, setMaxRange] = useState(fixedMaxValue);
  const [minPercent, setMinPercent] = useState(0);
  const [maxPercent, setMaxPercent] = useState(0);

  const handleMinRange = (e) => {
    setMinRange(e.target.value);
  };
  const handleMaxRange = (e) => {
    setMaxRange(e.target.value);
  };
  useEffect(() => {
    if (maxRange - minRange < gapValue) {
      setMaxRange(minRange + gapValue);
      setMinRange(maxRange - gapValue);
    } else {
      setMinPercent(() => (minRange * 100) / 100);
      setMaxPercent(() => 100 - (maxRange * 100) / 100);
    }
  }, [minRange, maxRange]);

  useEffect(() => {
    if (isReset) {
      setMinRange(fixedMinValue);
      setMaxRange(fixedMaxValue);
      setMinPercent(0);
      setMaxPercent(0);
    }
  }, [isReset]);

  return (
    <>
      <div className="box__section-range">
        <div className="box__title">
          <span className="text__title">가격</span>
          <span className="text__perday">(1박 기준)</span>
        </div>
        <div className="box__set-range">
          <span className="text__value">{minRange}</span>
          <span className="text__unit">만원이상</span>
          <span className="text__wave">~</span>
          <span className="text__value">{maxRange}</span>
          <span className="text__unit">만원</span>
        </div>
      </div>
      <div className="box__slider-container">
        <div className="box__slider-track">
          <ProgressBar
            style={{ left: `${minPercent}%`, right: `${maxPercent}%` }}
          />
        </div>
        <label htmlFor="minPrice">
          <input
            className="form__minrange"
            type="range"
            name=""
            id="minPrice"
            aria-label="최솟값"
            min="0"
            max="99"
            step="1"
            value={minRange}
            onChange={(e) => {
              handleMinRange(e);
            }}
          />
        </label>
        <label htmlFor="maxPrice">
          <input
            className="form__maxrange"
            type="range"
            name=""
            id="maxPrice"
            aria-label="최댓값"
            min="1"
            max="100"
            step="1"
            value={maxRange}
            onChange={(e) => {
              handleMaxRange(e);
            }}
          />
        </label>
      </div>
    </>
  );
};
export default InputRange;
