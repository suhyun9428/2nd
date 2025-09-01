import { openLayer, filterChecked } from "./atom/atom";
import { useAtom } from "jotai";
import classNames from "classnames";

const FilterOptions = ({ data }) => {
  // const dummyData = ["무료배송", "가격", "공식인증", "필터 더보기"];
  const dummyData = data.slice(2, 5)
  const [isLayerOpen, setIsLayerOpen] = useAtom(openLayer);
  const [checked, setChecked] = useAtom(filterChecked);

  const handleToggle = (idx) => {
    const isActive = checked[data.id]?.[idx] || false;

    setChecked((prev) => ({
      ...prev,
      [data.id]: {
        ...prev[data.id],
        [idx]: !isActive, // 해당 그룹 안에서만 토글
      },
    }));
  };

  return (
    <div className="box__filter-options">
      <ul className="list__filter-options">
        {/* {dummyData.map((item, idx) => {
          return (
            <li className="list-item" key={`option-${idx}`}>
              <button
                type="button"
                className="button__option"
                onClick={() => handleToggle(idx)}
              >
                {item}
              </button>
            </li>
          );
        })} */}
        {dummyData.map((item) =>
          item.itemList.map((option, idx) => (
            <button
              key={idx}
              className={classNames(
                "button__option",
                checked[item.id]?.[idx] && "button__option--active"
              )}
              onClick={() => handleToggle(item.id, idx)}
            >
              {option}
            </button>
          ))
        )}
      </ul>
      <button
        type="button"
        className="button__open-filter"
        onClick={() => setIsLayerOpen(true)}
      >
        <span className="for-a11y">필터 레이어 열기</span>
      </button>
    </div>
  );
};

export default FilterOptions;
