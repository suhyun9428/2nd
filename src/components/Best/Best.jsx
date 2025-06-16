import dummyData from "./dummyData/dummyData";
import Category from "./Category";
import ItemCardList from "./ItemCardList";

const Best = () => {
  return (
    <div>
      <Category data={dummyData.categoryData} />
      <ItemCardList data={dummyData.items} />
    </div>
  );
};

export default Best;
