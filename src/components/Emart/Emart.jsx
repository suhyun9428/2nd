import dummyData from "./dummyData/dummyData";
import TabContent from "./TabContent";
import "../../css/emart.css";
import "../../css/info.css";

const Emart = () => {
  return (
    <div className="box__content-emart">
      <div className="box__title">
        <h2 className="text__title">{dummyData.title.text}</h2>
        <a href={dummyData.title.shortcutLandingUrl} className="link__all">
          <span className="text">{dummyData.title.shortcutText}</span>
          <img src="../image__all.png" className="image" />
        </a>
      </div>
      <TabContent data={dummyData.sdBrandItemCatalogs} />
    </div>
  );
};
export default Emart;
