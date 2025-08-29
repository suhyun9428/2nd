import "../../css/filter.css";
import { selectedIndex } from "./atom/atom";
import { useAtom } from "jotai";
import CategoryWrap from "./CategoryWrap";
import FilterOptions from "./FilterOptions";
import FilterLayer from "./FilterLayer";

const FilterContents = () => {
  const [selected, setSelected] = useAtom(selectedIndex);

  return (
    <>
      <div className="box__filtter-wrap">
        <CategoryWrap />
        <FilterOptions />
      </div>
      <FilterLayer />
    </>
  );
};
export default FilterContents;
