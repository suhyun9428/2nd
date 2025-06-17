import ItemCardWrap from "./ItemCardWrap";

const Content = ({ data }) => {
  return (
    <div className="box__contents-wrap">
      <ItemCardWrap data={data.items} />
      <a href={data.sdBrandPageUrl} className="link__all">
        {data.sdBrandName} 전체보기
      </a>
    </div>
  );
};
export default Content;
