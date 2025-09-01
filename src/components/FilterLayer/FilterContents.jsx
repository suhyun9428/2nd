import "../../css/filter.css";
import { selectedIndex, openLayer } from "./atom/atom";
import { useAtom } from "jotai";
import CategoryWrap from "./CategoryWrap";
import FilterOptions from "./FilterOptions";
import FilterLayer from "./FilterLayer";
import dummyData from "./dummyData/dummyData";

const FilterContents = () => {
  const [selected, setSelected] = useAtom(selectedIndex);
  const [isLayerOpen, setIsLayerOpen] = useAtom(openLayer);

  return (
    <>
      <div className="box__filter-wrap">
        <CategoryWrap data={dummyData.filterList} />
        <FilterOptions />
      </div>
      {isLayerOpen && <FilterLayer data={dummyData.filterList} />}
    </>
  );
};
export default FilterContents;
