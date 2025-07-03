import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

const ListTypes = () => {
  const tabList = ["호텔", "리조트", "펜션", "모텔"];
  const [isSelected, setisSelected] = useState(null);
  const tablistRef = useRef([]);
  const handleClick = (idx) => {
    setisSelected(idx);
  };
  const focusTab = (idx) => {
    // idx 값에 포커스 설정
    if (tablistRef.current[idx]) {
      tablistRef.current[idx].focus();
    }
  };
  const handleKeyDown = (e, idx) => {
    const tabsCount = tabList.length;

    if (e.key === "ArrowLeft") {
      // e.keyCode === '37'
      e.preventDefault();
      const previousIdx = idx === 0 ? tabsCount - 1 : idx - 1;
      focusTab(previousIdx);
      // 왼쪽 누르면 -1 인덱스로 포커스
    } else if (e.key === "ArrowRight") {
      // e.keyCode === '39'
      e.preventDefault();
      const nextIdx = idx === tabsCount - 1 ? 0 : idx + 1;
      focusTab(nextIdx);
      // 오른쪽 누르면 +1 인덱스로 포커스
    }
  };

  useEffect(() => {
    if (isSelected === null && tabList.length > 0) {
      // 선택된 버튼이 없고, 버튼들이 있으면 첫 번째 버튼 선택(첫 진입 시)
      setisSelected(0);
    }
  }, [tabList]);

  return (
    <ul className="list__types" role="tablist" ref={tablistRef}>
      {tabList.map((item, idx) => {
        return (
          <li
            className={classNames(
              "list-item",
              isSelected === idx ? "list-item--active" : ""
            )}
            role="none"
            key={idx}
          >
            <button
              type="button"
              className="button__types"
              role="tab"
              key={idx}
              aria-selected={isSelected === idx}
              onClick={() => handleClick(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => tablistRef.current[idx] == el}
              tabIndex="0"
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const SelectOptions = () => {
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

const SearchLayer = () => {
  return (
    <div className="box__layer box__layer-search box__layer--active">
      <div className="box__layer-content">
        <div className="box__layer-header">
          <p className="text__header">상세검색</p>
          <button type="button" className="button__close">
            x
          </button>
        </div>
        <div className="box__layer-body">
          <div className="box__search-container">
            <ListTypes />
            <div>
              <div className="box__section-range">
                <div className="box__title">
                  <span className="text__title">가격</span>
                  <span className="text__perday">(1박 기준)</span>
                </div>
                <div className="box__set-range">
                  <span className="text__value">1</span>
                  <span className="text__unit">만원</span>
                  <span className="text__wave">~</span>
                  <span className="text__value">100</span>
                  <span className="text__unit">만원이상</span>
                </div>
              </div>
              <label htmlFor="price">
                <input
                  type="range"
                  name=""
                  id="price"
                  min="0"
                  max="100"
                  value="40"
                />
              </label>
              <p className="text__title">호텔명</p>
              <label htmlFor="form__searchname"></label>
              <input
                className="form__searchname"
                type="text"
                id="form__searchname"
                placeholder="(예:신라호텔)을 입력하세요"
              />
              <SelectOptions />
            </div>
          </div>
          <div className="box__buttons-wrap">
            <button type="button" className="button__reset">
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
