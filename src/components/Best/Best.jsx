import dummyData from "./dummyData/dummyData";
import Category from "./Category";
import ItemCardList from "./ItemCardList";
import "../../css/best.css";

const Best = () => {
  return (
    <div className="box__contents-best">
      <Category data={dummyData.categoryData} />
      <ItemCardList data={dummyData.items} />
    </div>
  );
};

export default Best;
