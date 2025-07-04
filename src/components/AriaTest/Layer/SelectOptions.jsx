import { useState, useEffect } from "react";

const SelectOptions = ({ isReset }) => {
  const optionList = [
    "픽업",
    "무료조식",
    "수영장",
    "스파",
    "세미나실",
    "인터넷(Wifi)",
    "노래방",
    "농구장",
    "축구장",
    "캠프파이어",
  ];
  const [checked, setChecked] = useState(
    new Array(optionList.length).fill(false)
  );
  const handleCheck = (e, idx) => {
    const newSetChecked = [...checked];
    newSetChecked[idx] = e.target.checked;

    setChecked(newSetChecked);
  };

  const isAllChecked = checked.every((e) => e === true);
  const handleAllCheck = (e) => {
    var isChecked = e.target.checked;
    setChecked(new Array(optionList.length).fill(isChecked));
  };

  useEffect(() => {
    setChecked(new Array(optionList.length).fill(false));
  }, [isReset]);

  return (
    <>
      <div className="box__title">
        <p className="text__title">부대/편의시설</p>
        <label htmlFor="allCheck">
          <input
            type="checkbox"
            name=""
            id="allCheck"
            checked={isAllChecked}
            aria-checked={isAllChecked}
            onChange={handleAllCheck}
          />
          <span className="form__allcheck">전체선택</span>
        </label>
      </div>
      <ul className="list__options">
        {optionList.map((item, idx) => {
          return (
            <li className="list-item" key={idx}>
              <label htmlFor={`checkbox__${idx}`}>
                <input
                  type="checkbox"
                  className="button"
                  checked={checked[idx]}
                  aria-checked={checked[idx]}
                  onChange={(e) => handleCheck(e, idx)}
                  id={`checkbox__${idx}`}
                />
                <span className="text__checkbox">{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SelectOptions;
