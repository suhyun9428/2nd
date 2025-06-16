import Tabs from "./Tabs";
import ItemCardWrap from "./ItemCardWrap";
import { Fragment } from "react/jsx-runtime";

const TabContent = ({ data }) => {
  return (
    <>
      <Tabs data={data} />
      {data.map((cate, idx) => {
        return (
          <Fragment key={idx}>
            <ItemCardWrap data={cate.items} />
            <a href={cate.sdBrandPageUrl}>{cate.sdBrandName} 전체보기</a>
          </Fragment>
        );
      })}
    </>
  );
};
export default TabContent;
