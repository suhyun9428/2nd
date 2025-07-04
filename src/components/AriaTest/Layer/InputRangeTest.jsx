import styled from "styled-components";
import { useState } from "react";

const ProgressBar = styled.div`
  position: absolute;
  height: 8px;
  border-radius: 10px;
  background: #757575;
`;

const InputRangeTest = () => {
  const fixedMinValue = 0;
  const fixedMaxValue = 100;
  const gapValue = 1;
  const [minRange, setMinRange] = useState(fixedMinValue);
  const [maxRange, setMaxRange] = useState(fixedMaxValue);
  const [minPercent, setMinPercent] = useState(0);
  const [maxPercent, setMaxPercent] = useState(0);
  const handleMinValue = (e) => {
    setMinRange(e.target.value);
  };
  const handleMaxValue = (e) => {
    setMaxRange(e.target.value);
  };
  const handleTwoValue = () => {
    if (maxRange - minRange < gapValue) {
      // 최대값 - 최소값 < 갭
      setMaxRange(minRange + gapValue);
      setMinRange(maxRange - gapValue);
    } else {
      setMinPercent((minRange * 100) / 100);
      setMaxPercent(100 - (maxRange * 100) / 100);
    }
  };
  return (
    <>
      <div>
        {minRange}만원 ~ {maxRange}만원
      </div>
      <div className="box__slider-container">
        <div className="box__slider-track">
          <ProgressBar
            style={{ left: `${minPercent}%`, right: `${maxPercent}%` }}
          />
        </div>
        <label>
          <input
            type="range"
            name=""
            value={minRange}
            step={gapValue}
            onChange={(e) => {
              handleMinValue(e);
              handleTwoValue();
            }}
            className="form__minrange"
          />
        </label>
        <label>
          <input
            type="range"
            name=""
            value={maxRange}
            step={gapValue}
            onChange={(e) => {
              handleMaxValue(e);
              handleTwoValue();
            }}
            className="form__maxrange"
          />
        </label>
      </div>
    </>
  );
};
export default InputRangeTest;
