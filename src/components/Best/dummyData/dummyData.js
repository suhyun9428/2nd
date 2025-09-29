const dummyData = {
  categoryData: [
    {
      groupName: "전체",
      imageUrl: "//pics.gmarket.co.kr/mobile/best/icon__category-total.jpg",
      subGroups: [{ groupSubName: "전체" }],
    },
    {
      groupName: "신선식품",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/13f6e7ac-1618-48b9-bf42-b15ad567b3f8.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "과일/야채",
        },
        {
          groupSubName: "쌀/잡곡/견과류",
        },
        {
          groupSubName: "축산",
        },
        {
          groupSubName: "수산",
        },
        {
          groupSubName: "김치/반찬",
        },
      ],
    },
    {
      groupName: "가공식품",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/71cc3a7a-b9d0-4ab0-a783-dba66c54fd7a.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "냉동/간편조리식품",
        },
        {
          groupSubName: "건강/다이어트식품",
        },
        {
          groupSubName: "과자/간식",
        },
        {
          groupSubName: "커피/음료/생수",
        },
        {
          groupSubName: "캔/오일/조미료",
        },
      ],
    },
    {
      groupName: "생필품/육아",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/800f4dad-669a-4163-88db-017bbd329759.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "화장지/물티슈",
        },
        {
          groupSubName: "세제/일회용품",
        },
        {
          groupSubName: "구강/위생용품",
        },
        {
          groupSubName: "기저귀/분유/이유식",
        },
        {
          groupSubName: "유아동의류/잡화",
        },
        {
          groupSubName: "출산/유아용품",
        },
        {
          groupSubName: "장난감/완구",
        },
      ],
    },
    {
      groupName: "생활/주방",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/aa5e6d42-21f7-470a-8d0e-22ead00177e7.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "주방용품",
        },
        {
          groupSubName: "쿡웨어/식기/용기",
        },
        {
          groupSubName: "생활잡화/보안/수납",
        },
        {
          groupSubName: "욕실/청소",
        },
        {
          groupSubName: "자동차용품",
        },
        {
          groupSubName: "공구",
        },
        {
          groupSubName: "안전/산업용품",
        },
      ],
    },
    {
      groupName: "패션/잡화",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/a2c22f3a-a554-4e70-8a5b-f896fa24ed74.jpg",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "여성의류",
        },
        {
          groupSubName: "남성의류",
        },
        {
          groupSubName: "언더웨어",
        },
        {
          groupSubName: "캐주얼의류",
        },
        {
          groupSubName: "브랜드잡화/명품",
        },
        {
          groupSubName: "신발",
        },
        {
          groupSubName: "가방/잡화",
        },
        {
          groupSubName: "액세서리",
        },
      ],
    },
    {
      groupName: "뷰티",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/9b54187c-a468-42be-97a1-9177c42e054b.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "스킨케어",
        },
        {
          groupSubName: "바디/헤어케어",
        },
        {
          groupSubName: "메이크업",
        },
        {
          groupSubName: "클렌징/팩/미용소품",
        },
        {
          groupSubName: "남성화장품",
        },
      ],
    },
    {
      groupName: "디지털/가전",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/deac8518-7aac-4a63-bd68-1b276deaf158.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "PC/노트북/모니터",
        },
        {
          groupSubName: "PC주변기기/프린터",
        },
        {
          groupSubName: "영상/주방가전",
        },
        {
          groupSubName: "계절가전",
        },
        {
          groupSubName: "생활/미용가전",
        },
        {
          groupSubName: "모바일/태블릿",
        },
        {
          groupSubName: "카메라/게임/음향기기",
        },
      ],
    },
    {
      groupName: "가구/홈",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/bf457151-db1e-4fd2-8dc1-82c1f75f5471.jpg",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "가구/DIY",
        },
        {
          groupSubName: "침구/홈",
        },
        {
          groupSubName: "인테리어/소품",
        },
      ],
    },
    {
      groupName: "스포츠/건강",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202407/3fdd769f-71e5-41fc-a20a-334dc7facdfe.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "마스크/의료",
        },
        {
          groupSubName: "안마/정수기/비데",
        },
        {
          groupSubName: "스포츠의류/운동화",
        },
        {
          groupSubName: "등산/아웃도어",
        },
        {
          groupSubName: "캠핑/낚시",
        },
        {
          groupSubName: "구기/라켓/수영",
        },
        {
          groupSubName: "골프/자전거",
        },
        {
          groupSubName: "렌탈 서비스",
        },
      ],
    },
    {
      groupName: "취미/문구/펫",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/1950378a-4b6b-47f7-bbb4-4cbe0c3088a5.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "악기/취미",
        },
        {
          groupSubName: "꽃/이벤트용품",
        },
        {
          groupSubName: "문구/사무용품",
        },
        {
          groupSubName: "반려동물",
        },
      ],
    },
    {
      groupName: "도서/음반",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/5f3983bf-4d8f-49ed-9265-544130aafe0b.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "유아/원서",
        },
        {
          groupSubName: "어린이",
        },
        {
          groupSubName: "참고서",
        },
        {
          groupSubName: "문학/인문",
        },
        {
          groupSubName: "경제/경영",
        },
        {
          groupSubName: "취미실용/잡지/만화",
        },
        {
          groupSubName: "교재/수험서",
        },
        {
          groupSubName: "중고도서",
        },
        {
          groupSubName: "콘텐츠",
        },
      ],
    },
    {
      groupName: "e쿠폰",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/a80e790e-94e9-4926-834f-4915b87f3b4a.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "모바일상품권",
        },
        {
          groupSubName: "커피/외식/영화",
        },
        {
          groupSubName: "지류상품권",
        },
      ],
    },
    {
      groupName: "여행",
      imageUrl:
        "//image.gmarket.co.kr/hanbando/202406/86023c16-6bcd-465d-80cb-68678f99d84a.png",
      subGroups: [
        {
          groupSubName: "전체",
        },
        {
          groupSubName: "국내여행",
        },
        {
          groupSubName: "해외여행",
        },
      ],
    },
  ],
  items: [
    {
      categoryNumber: 0,
      hasCoupon: true,
      buyCount: 1384,
      goodsName:
        "아기물티슈 70평량 20팩 슈퍼대디 미스터펭 피치 캡형 70매 저자극 고평량",
      sellPrice: 30100,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=3645786558",
      discountPrice: "21,120",
      price: "30,100",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/4370853676/still/280?ver=1748325479",
      discountRate: 29,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "하이베러슈퍼대디",
        url: "//m.gmarket.co.kr/n/minishop/superdaddy",
        id: "superdaddy",
      },
      reviewCount: "14,090",
      avgStarPoint: "4.8",
      rank: 1,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 0,
      hasCoupon: true,
      goodsName: "인기 사발면 더블팩 (육개장+김치 / 24개)",
      sellPrice: 29900,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=3456382238",
      discountPrice: "9,900",
      price: "29,900",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/4407901283/still/300?ver=1746692474",
      discountRate: 66,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "디엔셀",
        url: "//m.gmarket.co.kr/n/minishop/dnsell",
        id: "dnsell",
      },
      reviewCount: "62",
      avgStarPoint: "4.5",
      rank: 2,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 0,
      hasCoupon: false,
      goodsName:
        "라인바싸 탄산수 500ml PET 3종 택 2박스 (총40입) 먹는샘물로 만들어 미네랄이 살아있는 강탄산수",
      sellPrice: 12700,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=4427793726",
      discountPrice: "12,065",
      price: "12,700",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/2394351485/still/280?ver=1727848698",
      discountRate: 5,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "동아오츠카본사직영몰",
        url: "//m.gmarket.co.kr/n/minishop/donga250",
        id: "donga250",
      },
      reviewCount: "13",
      avgStarPoint: "4.8",
      rank: 3,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 0,
      hasCoupon: false,
      goodsName:
        "30%+12%)무료반품 플라스틱아일랜드 여름신상 인기 하루 한정 특가 100종",
      sellPrice: 74000,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=1925195363",
      discountPrice: "72,520",
      price: "74,000",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/1925195363/still/280?ver=1749803313",
      discountRate: 2,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "플라스틱아일랜드.",
        url: "//m.gmarket.co.kr/n/minishop/plasticisland",
        id: "plasticisland",
      },
      reviewCount: "8,182",
      avgStarPoint: "4.2",
      rank: 4,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 0,
      hasCoupon: false,
      goodsName:
        "(무료반품+20+10%) 6930원~ 다온샵 깜짝특가/텐셀진/빅사이즈~3XL/청바지/스판/밴딩/슬랙스/반바지/쿨링",
      sellPrice: 46300,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=2664229438",
      discountPrice: 46300,
      price: "46,300",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/2664229438/still/280?ver=1750051541",
      discountRate: 0,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "다온샵.",
        url: "//m.gmarket.co.kr/n/minishop/daonshop7",
        id: "daonshop7",
      },
      reviewCount: "41,452",
      avgStarPoint: "4.5",
      rank: 5,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 1,
      hasCoupon: false,
      goodsName:
        "1111(혜택가5170원~15%+10%쿠폰)게스키즈 여름 나시/반팔티/반바지/원피스/스커트 외 ~87%OFF",
      sellPrice: 42000,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=4317957849",
      discountPrice: "12,800",
      price: "42,000",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/4317957849/still/280?ver=1748830275",
      discountRate: 69,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "에이플로우키즈",
        url: "//m.gmarket.co.kr/n/minishop/AFLOWKIDS",
        id: "AFLOWKIDS",
      },
      reviewCount: "822",
      avgStarPoint: "4.6",
      rank: 6,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 1,
      hasCoupon: false,
      goodsName:
        "1111 30%+12%)무료반품 플라스틱아일랜드 여름신상 인기 하루 한정 특가 100종",
      sellPrice: 74000,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=1925195363",
      discountPrice: "72,520",
      price: "74,000",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/1925195363/still/280?ver=1749803313",
      discountRate: 2,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "플라스틱아일랜드.",
        url: "//m.gmarket.co.kr/n/minishop/plasticisland",
        id: "plasticisland",
      },
      reviewCount: "8,182",
      avgStarPoint: "4.2",
      rank: 7,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 1,
      hasCoupon: false,
      goodsName:
        "1111 (무료반품+20+10%) 6930원~ 다온샵 깜짝특가/텐셀진/빅사이즈~3XL/청바지/스판/밴딩/슬랙스/반바지/쿨링",
      sellPrice: 46300,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=2664229438",
      discountPrice: 46300,
      price: "46,300",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/2664229438/still/280?ver=1750051541",
      discountRate: 0,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "다온샵.",
        url: "//m.gmarket.co.kr/n/minishop/daonshop7",
        id: "daonshop7",
      },
      reviewCount: "41,452",
      avgStarPoint: "4.5",
      rank: 8,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 1,
      hasCoupon: false,
      goodsName:
        "1111 (혜택가5170원~15%+10%쿠폰)게스키즈 여름 나시/반팔티/반바지/원피스/스커트 외 ~87%OFF",
      sellPrice: 42000,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=4317957849",
      discountPrice: "12,800",
      price: "42,000",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/4317957849/still/280?ver=1748830275",
      discountRate: 69,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "에이플로우키즈",
        url: "//m.gmarket.co.kr/n/minishop/AFLOWKIDS",
        id: "AFLOWKIDS",
      },
      reviewCount: "822",
      avgStarPoint: "4.6",
      rank: 9,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      categoryNumber: 2,
      hasCoupon: false,
      goodsName:
        "2222 (혜택가5170원~15%+10%쿠폰)게스키즈 여름 나시/반팔티/반바지/원피스/스커트 외 ~87%OFF",
      sellPrice: 42000,
      linkUrl: "//mitem.gmarket.co.kr/Item?goodscode=4317957849",
      discountPrice: "12,800",
      price: "42,000",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/4317957849/still/280?ver=1748830275",
      discountRate: 69,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      isExpressShipping: false,
      isBigSmileItem: false,
      miniShopInfo: {
        nickName: "에이플로우키즈",
        url: "//m.gmarket.co.kr/n/minishop/AFLOWKIDS",
        id: "AFLOWKIDS",
      },
      reviewCount: "822",
      avgStarPoint: "4.6",
      rank: 10,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
  ],
};
export default dummyData;
