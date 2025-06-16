const Tabs = ({ data }) => {
  return (
    <div className="box__category-wrap">
      {data.map((item, idx) => {
        return (
          <button type="button" className="button__category" key={idx}>
            {item.sdBrandName}
          </button>
        );
      })}
    </div>
  );
};
export default Tabs;
