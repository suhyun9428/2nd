import Tabs from "./Tabs";
import Contents from "./Contents";
import { useAtom } from "jotai";
import { activeTabIndex, handleLayer } from "./atom/atom";
import CartLayer from "./Layer/CartLayer";

const TabContent = ({ data }) => {
  const [active, setActive] = useAtom(activeTabIndex);
  const [openLayer, setOpenLayer] = useAtom(handleLayer);

  return (
    <>
      <Tabs data={data} />
      {data.map((item, idx) => {
        return idx === active && <Contents data={item} key={idx} />;
      })}
      {openLayer && <CartLayer isActive={openLayer} />}
    </>
  );
};
export default TabContent;
