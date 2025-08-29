import "../../css/filter.css";
import { selectedIndex } from "./atom/atom";
import { useAtom } from "jotai";
// import CategoryWrap from "./CategoryWrap";
// import FilterOptions from "./FilterOptions";

const FilterLayer = () => {
  const [selected, setSelected] = useAtom(selectedIndex);

  return (
    <div className="box__filtter-layer">
      <div className="box__layer"></div>
      <div className="box__dimmed"></div>
    </div>
  );
};
export default FilterLayer;
