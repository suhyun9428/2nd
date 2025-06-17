import Tabs from "./Tabs";
import Contents from "./Contents";
import { useAtom } from "jotai";
import { activeTabIndex } from "./atom/atom";

const TabContent = ({ data }) => {
  const [active, setActive] = useAtom(activeTabIndex);
  return (
    <>
      <Tabs data={data} />
      {data.map((item, idx) => {
        return idx === active && <Contents data={item} key={idx} />;
      })}
    </>
  );
};
export default TabContent;
