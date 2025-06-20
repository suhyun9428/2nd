import Tabs from "./Tabs";
import Contents from "./Contents";
import { useAtom } from "jotai";
import { activeTabIndex } from "./atom/atom";
import Layer from "../fragment/Layer";

const TabContent = ({ data }) => {
  const [active, setActive] = useAtom(activeTabIndex);
  // const activeItem = data[active];
  // console.log(activeItem,"?")
  return (
    <>
      <Tabs data={data} />
      {data.map((item, idx) => {
        return idx === active && <Contents data={item} key={idx} />;
      })}
      <Layer />
    </>
  );
};
export default TabContent;
