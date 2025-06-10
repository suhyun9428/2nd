import dummyData from "./dummyData/dummyData";
import Category from "./Category";
import ItemCard from "./ItemCard";

const Best = () => {
  return (
    <div>
      <Category data={dummyData.categoryData} />
      <ItemCard data={dummyData.items}/>
    </div>
  );
};

export default Best;
