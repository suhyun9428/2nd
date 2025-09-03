const dummyData = {
  filterList: [
    {
      title: "브랜드",
      id: "brand",
      itemList: [
        "코카콜라",
        "코카콜라 제로",
        "코카콜라 라이트",
        "코카콜라2",
        "코카콜라 제로2",
        "코카콜라 라이트2",
      ],
    },
    {
      title: "포장형태",
      id: "type",
      itemList: ["페트병", "유리병", "캔"],
    },
  ],
  filterButtonList: [
    {
      title: "배송유형",
      id: "delivery",
      itemList: [
        {
          text: "스타배송",
          isShow: true,
        },
        {
          text: "무료배송",
          isShow: true,
        },
        {
          text: "오늘출발",
          isShow: false,
        },
        {
          text: "당일배송",
          isShow: false,
        },
      ],
    },
    // {
    //   title: "가격",
    //   id: "price",
    //   itemList: ["전체", "3천원 이하", "3천원 ~ 1만원대"],
    // },
    {
      title: "판매처",
      id: "seller",
      itemList: [
        {
          text: "공식 인증 셀러",
          isShow: true,
        },
      ],
    },
  ],
};
export default dummyData;
