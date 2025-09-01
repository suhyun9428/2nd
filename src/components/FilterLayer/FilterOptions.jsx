import { selectedIndex, openLayer } from "./atom/atom";
import { useAtom } from "jotai";

const FilterOptions = () => {
  const dummyData = ["무료배송", "가격", "공식인증", "필터 더보기"];
  const [isSelected, setIsSelected] = useAtom(selectedIndex);
  const [isLayerOpen, setIsLayerOpen] = useAtom(openLayer);

  return (
    <div className="box__filter-options">
      <ul className="list__filter-options">
        {dummyData.map((item, idx) => {
          return (
            <li className="list-item" key={`option-${idx}`}>
              <button
                type="button"
                className="button__option"
                onClick={() => setIsSelected(idx)}
              >
                {item}
              </button>
            </li>
          );
        })}
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
