import dummyData from "./dummyData/dummyData";
import TabContent from "./TabContent";
import "../../css/emart.css";

const Emart = () => {
  return (
    <div className="box__content-emart">
      <div className="box__title">
        <h2 className="text__title">{dummyData.title.text}</h2>
        <a href={dummyData.title.shortcutLandingUrl} className="link__all">
          {dummyData.title.shortcutText}
        </a>
      </div>
      <TabContent data={dummyData.sdBrandItemCatalogs} />
    </div>
  );
};
export default Emart;
