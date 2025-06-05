const Render = ({ data }) => {
  console.log(data, "?");
  //   {
  //     data.map((names, idx) => {
  //       console.log(names, "??");
  //       //   return <li key={idx}>{names.groupSubName}</li>;
  //     });
  //   }
};
const SecondTab = ({ data }) => {
  //   console.log(data, "??");
  return (
    <div className="box__subcategory">
      <ul>
        {data.map((item, idx) => {
          const name = item.subGroups;
          console.log(name, "?");
          //   <Render data={name} />;
        })}
      </ul>
    </div>
  );
};
export default SecondTab;
