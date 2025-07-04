import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

const ListTypes = ({ isReset }) => {
  const tabList = ["호텔", "리조트", "펜션", "모텔"];
  const [isSelected, setIsSelected] = useState(null);
  const tablistRef = useRef([]);

  useEffect(() => {
    tablistRef.current = tablistRef.current.slice(0, tabList.length);
  }, [tabList]);

  const handleClick = (idx) => {
    setIsSelected(idx);
  };

  const focusTab = (idx) => {
    if (tablistRef.current[idx]) {
      tablistRef.current[idx].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    const tabsCount = tabList.length;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const previousIdx = idx === 0 ? tabsCount - 1 : idx - 1;
      focusTab(previousIdx);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = idx === tabsCount - 1 ? 0 : idx + 1;
      focusTab(nextIdx);
    }
  };

  useEffect(() => {
    if (isSelected === null && tabList.length > 0) {
      setIsSelected(0);
    }
  }, []);

  useEffect(() => {
    if (isReset) {
      setIsSelected(0);
    }
  }, [isReset]);

  return (
    <ul className="list__types" role="tablist">
      {tabList.map((item, idx) => (
        <li
          key={idx}
          className={classNames(
            "list-item",
            isSelected === idx && "list-item--active"
          )}
          role="none"
        >
          <button
            type="button"
            className="button__types"
            role="tab"
            aria-selected={isSelected === idx}
            onClick={() => handleClick(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => (tablistRef.current[idx] = el)}
            tabIndex={isSelected === idx ? 0 : -1}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListTypes;
