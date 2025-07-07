import { useState, useEffect } from "react";

const SelectOptions = ({ isReset }) => {
  const optionList = [
    {
      text: "픽업",
      icon: "🚗",
    },
    {
      text: "무료조식",
      icon: "🍳",
    },
    {
      text: "수영장",
      icon: "🏊",
    },
    {
      text: "스파",
      icon: "💆",
    },
    {
      text: "세미나실",
      icon: "🏢",
    },
    {
      text: "인터넷(Wifi)",
      icon: "📶",
    },
    {
      text: "노래방",
      icon: "🎤",
    },
    {
      text: "농구장",
      icon: "🏀",
    },
    {
      text: "축구장",
      icon: "⚽",
    },
    {
      text: "캠프파이어",
      icon: "🔥",
    },
  ];
  // const [checked, setChecked] = useState(
  //   new Array(optionList.length).fill(false)
  // );
  // const handleCheck = (e, idx) => {
  //   const newSetChecked = [...checked];
  //   newSetChecked[idx] = e.target.checked;

  //   setChecked(newSetChecked);
  // };

  // const isAllChecked = checked.every((e) => e === true);
  // const handleAllCheck = (e) => {
  //   var isChecked = e.target.checked;
  //   setChecked(new Array(optionList.length).fill(isChecked));
  // };

  // useEffect(() => {
  //   setChecked(new Array(optionList.length).fill(false));
  // }, [isReset]);
  const [checked, setChecked] = useState(optionList.map(() => false));

  const handleCheck = (idx) => {
    setChecked((prev) => prev.map((item, i) => (i === idx ? !item : item)));
  };

  const handleAllCheck = (e) => {
    const isChecked = e.target.checked;
    setChecked(optionList.map(() => isChecked));
  };

  const isAllChecked = checked.every(Boolean);

  useEffect(() => {
    setChecked(optionList.map(() => false));
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
                  className="form__options"
                  checked={checked[idx]}
                  onChange={() => handleCheck(idx)}
                  id={`checkbox__${idx}`}
                />
                <p className="text__icon">{item.icon}</p>
                <span className="text__checkbox">{item.text}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SelectOptions;
