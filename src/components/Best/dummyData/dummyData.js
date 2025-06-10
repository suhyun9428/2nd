const dummyData = {
  categoryData: [
    {
      groupName: "전체",
      imageUrl:
        "https://pics.gmarket.co.kr/mobile/best/icon__category-total.jpg",
      subGroups: [{ groupSubName: "전체" }],
    },
    {
      groupName: "신선식품",
      imageUrl:
        "https://image.gmarket.co.kr/hanbando/202406/13f6e7ac-1618-48b9-bf42-b15ad567b3f8.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/71cc3a7a-b9d0-4ab0-a783-dba66c54fd7a.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/800f4dad-669a-4163-88db-017bbd329759.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/aa5e6d42-21f7-470a-8d0e-22ead00177e7.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/a2c22f3a-a554-4e70-8a5b-f896fa24ed74.jpg",
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
        "https://image.gmarket.co.kr/hanbando/202406/9b54187c-a468-42be-97a1-9177c42e054b.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/deac8518-7aac-4a63-bd68-1b276deaf158.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/bf457151-db1e-4fd2-8dc1-82c1f75f5471.jpg",
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
        "https://image.gmarket.co.kr/hanbando/202407/3fdd769f-71e5-41fc-a20a-334dc7facdfe.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/1950378a-4b6b-47f7-bbb4-4cbe0c3088a5.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/5f3983bf-4d8f-49ed-9265-544130aafe0b.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/a80e790e-94e9-4926-834f-4915b87f3b4a.png",
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
        "https://image.gmarket.co.kr/hanbando/202406/86023c16-6bcd-465d-80cb-68678f99d84a.png",
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
      goodsCode: "3645786558",
      goodsName:
        "아기물티슈 70평량 20팩 슈퍼대디 미스터펭 피치 캡형 70매 저자극 고평량",
      sellPrice: 30100,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=3645786558",
      discountPrice: "21,120",
      price: "30,100",
      itemPriceType: "Normal",
      imageUrl: "http://gdimg.gmarket.co.kr/4370853676/still/280?ver=1748325479",
      discountRate: 29,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      lCode: "100000074",
      mCode: "200002936",
      sCode: "300028942",
      sdBrandSeq: 30492,
      sellCustNo: "105821666",
      transPolicyNo: 30739,
      deliveryGroupNo: 800486497,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1749017350,
      miniShopInfo: {
        nickName: "하이베러슈퍼대디",
        url: "https://m.gmarket.co.kr/n/minishop/superdaddy",
        id: "superdaddy",
      },
      reviewCount: "14,090",
      avgStarPoint: "4.8",
      rank: 1,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      goodsCode: "3456382238",
      goodsName: "인기 사발면 더블팩 (육개장+김치 / 24개)",
      sellPrice: 29900,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=3456382238",
      discountPrice: "9,900",
      price: "29,900",
      itemPriceType: "Normal",
      imageUrl: "https://gdimg.gmarket.co.kr/4407901283/still/300?ver=1746692474",
      discountRate: 66,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      lCode: "100000076",
      mCode: "200002922",
      sCode: "300028646",
      sdBrandSeq: 32688,
      sellCustNo: "105187868",
      transPolicyNo: 426086,
      deliveryGroupNo: 225450310,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1748998060,
      miniShopInfo: {
        nickName: "디엔셀",
        url: "https://m.gmarket.co.kr/n/minishop/dnsell",
        id: "dnsell",
      },
      reviewCount: "62",
      avgStarPoint: "4.5",
      rank: 2,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      goodsCode: "4427793726",
      goodsName:
        "라인바싸 탄산수 500ml PET 3종 택 2박스 (총40입) 먹는샘물로 만들어 미네랄이 살아있는 강탄산수",
      sellPrice: 12700,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=4427793726",
      discountPrice: "11,050",
      price: "12,700",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/4427793726/still",
      discountRate: 12,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      lCode: "100000094",
      mCode: "200001204",
      sCode: "300029196",
      sdBrandSeq: 29103,
      sellCustNo: "141460491",
      transPolicyNo: 1314362,
      deliveryGroupNo: 734191929,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1748998421,
      miniShopInfo: {
        nickName: "동아오츠카본사직영몰",
        url: "https://m.gmarket.co.kr/n/minishop/donga250",
        id: "donga250",
      },
      reviewCount: "13",
      avgStarPoint: "4.8",
      rank: 3,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      goodsCode: "1925195363",
      goodsName:
        "30%+12%)무료반품 플라스틱아일랜드 여름신상 인기 하루 한정 특가 100종",
      sellPrice: 74000,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=1925195363",
      discountPrice: "22,200",
      price: "74,000",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/1925195363/still",
      discountRate: 70,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      lCode: "100000103",
      mCode: "200002663",
      sCode: "300026637",
      sdBrandSeq: 23104,
      sellCustNo: "126353539",
      transPolicyNo: 1683596,
      deliveryGroupNo: 2959916574,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1749033646,
      miniShopInfo: {
        nickName: "플라스틱아일랜드.",
        url: "https://m.gmarket.co.kr/n/minishop/plasticisland",
        id: "plasticisland",
      },
      reviewCount: "8,182",
      avgStarPoint: "4.2",
      rank: 4,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      goodsCode: "2664229438",
      goodsName:
        "(무료반품+20+10%) 6930원~ 다온샵 깜짝특가/텐셀진/빅사이즈~3XL/청바지/스판/밴딩/슬랙스/반바지/쿨링",
      sellPrice: 46300,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=2664229438",
      discountPrice: "13,900",
      price: "46,300",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/2664229438/still",
      discountRate: 69,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      lCode: "100000003",
      mCode: "200000505",
      sCode: "300006305",
      sdBrandSeq: 26843,
      sellCustNo: "123222546",
      transPolicyNo: 1152258,
      deliveryGroupNo: 125675844,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1749022341,
      miniShopInfo: {
        nickName: "다온샵.",
        url: "https://m.gmarket.co.kr/n/minishop/daonshop7",
        id: "daonshop7",
      },
      reviewCount: "41,452",
      avgStarPoint: "4.5",
      rank: 5,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
    {
      goodsCode: "4317957849",
      goodsName:
        "(혜택가5170원~15%+10%쿠폰)게스키즈 여름 나시/반팔티/반바지/원피스/스커트 외 ~87%OFF",
      sellPrice: 42000,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=4317957849",
      discountPrice: "12,800",
      price: "42,000",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/4317957849/still",
      discountRate: 69,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: true,
      lCode: "100000035",
      mCode: "200000512",
      sCode: "300004855",
      sdBrandSeq: 30268,
      sellCustNo: "160706047",
      transPolicyNo: 1809025,
      deliveryGroupNo: 2927774305,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1748830275,
      miniShopInfo: {
        nickName: "에이플로우키즈",
        url: "https://m.gmarket.co.kr/n/minishop/AFLOWKIDS",
        id: "AFLOWKIDS",
      },
      reviewCount: "822",
      avgStarPoint: "4.6",
      rank: 6,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
    },
  ],
  adItemData: [
    {
      goodsCode: "305379774",
      goodsName: "주니어여아레깅스 봄 신상BEST 치마레깅스 여아쫄바지",
      sellPrice: 11900,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=305379774",
      discountPrice: "11,900",
      price: "11,900",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/305379774/still",
      discountRate: 0,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: false,
      lCode: "100000035",
      mCode: "200000512",
      sCode: "300007241",
      sdBrandSeq: 52200,
      sellCustNo: "122428893",
      transPolicyNo: 491388,
      deliveryGroupNo: 31440047,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1737687353,
      miniShopInfo: {
        nickName: "잭키드",
        url: "https://m.gmarket.co.kr/n/minishop/jackid",
        id: "jackid",
      },
      reviewCount: "29",
      avgStarPoint: "4.6",
      rank: 1,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
      adImpression: {
        impUrl:
          "https://ats.gmarket.co.kr/ra/imp?r=aW1wX2lkPTUwMGIzYjY3LTAxODktNGYzNS05ZmZkLTI3YzU5ZjVmMDA0NCZzZWxsZXJfaWQ9amFja2lkJml0ZW1fbm89MzA1Mzc5Nzc0JnZlbmRvcj0xMTgmcmVxX2lkPWYwZWZkMTM2LTVjZDktNGVhMS04N2M5LTFiMmQ0N2ZlN2IyMyZzaXRlX2lkPTImYWRfZ3JvdXBfaWQ9MjMxNCZtYXN0ZXJfaWQ9MzQxMzkmY2d1aWQ9MTEzODc1MTc0NjA5ODgwMDc2NTIwMDAwMDAmcGd1aWQ9MjE3MjU4NDU2OTg3NTIwMDk0MTIwMTAwMDAmc2d1aWQ9MzE3NDkwMjA1MDU0NzkwMDk3MzIyMDAwMDAmZXRjX2luZm89JTdCJTIyYWJUZXN0Q29kZSUyMiUzQW51bGwlMkMlMjJ0ZXN0QnVja2V0TnVtJTIyJTNBMCUyQyUyMmFkU2V0R...",
        clickUrl:
          "https://ats.gmarket.co.kr/ra/clk?r=dmVuZG9yPTExOCZiaWRfdmVuZG9yPTExOCZzZWxsZXJfaWQ9amFja2lkJml0ZW1fbm89MzA1Mzc5Nzc0JnJhX2dyb3VwX25vPTIzMTQmc2VsbGVyX2N1c3Rfbm89MTIyNDI4ODkzJm1hc3Rlcl9pZD0zNDEzOSZyZXFfaWQ9ZjBlZmQxMzYtNWNkOS00ZWExLTg3YzktMWIyZDQ3ZmU3YjIzJmltcF9pZD01MDBiM2I2Ny0wMTg5LTRmMzUtOWZmZC0yN2M1OWY1ZjAwNDQma2V5d29yZD0mY2d1aWQ9MTEzODc1MTc0NjA5ODgwMDc2NTIwMDAwMDAmcGd1aWQ9MjE3MjU4NDU2OTg3NTIwMDk0MTIwMTAwMDAmc2d1aWQ9MzE3NDkwMjA1MDU0NzkwMDk3MzIyMDAwMDAmZXRjX2luZm89JTdCJTIyYWJUZXN0Q29kZSUyMiUzQW51b...",
      },
    },
    {
      goodsCode: "339026943",
      goodsName: "봄 할인/주니어 초등학생 여아 긴팔 라운드 티셔츠 맨투맨",
      sellPrice: 7900,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=339026943",
      discountPrice: "7,900",
      price: "7,900",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/339026943/still",
      discountRate: 0,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: false,
      lCode: "100000035",
      mCode: "200000512",
      sCode: "300007663",
      sdBrandSeq: 52200,
      sellCustNo: "122428893",
      transPolicyNo: 1723913,
      deliveryGroupNo: 31440047,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1745906497,
      miniShopInfo: {
        nickName: "잭키드",
        url: "https://m.gmarket.co.kr/n/minishop/jackid",
        id: "jackid",
      },
      reviewCount: "87",
      avgStarPoint: "4.6",
      rank: 2,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
      adImpression: {
        impUrl:
          "https://ats.gmarket.co.kr/ra/imp?r=aW1wX2lkPTVmNjNlNzY2LTg2YzUtNDhlZC1iNzQxLTc4ZThiM2I0YWVlNiZzZWxsZXJfaWQ9amFja2lkJml0ZW1fbm89MzM5MDI2OTQzJnZlbmRvcj0xMTgmcmVxX2lkPWYwZWZkMTM2LTVjZDktNGVhMS04N2M5LTFiMmQ0N2ZlN2IyMyZzaXRlX2lkPTImYWRfZ3JvdXBfaWQ9MjMxNCZtYXN0ZXJfaWQ9MzQxMzkmY2d1aWQ9MTEzODc1MTc0NjA5ODgwMDc2NTIwMDAwMDAmcGd1aWQ9MjE3MjU4NDU2OTg3NTIwMDk0MTIwMTAwMDAmc2d1aWQ9MzE3NDkwMjA1MDU0NzkwMDk3MzIyMDAwMDAmZXRjX2luZm89JTdCJTIyYWJUZXN0Q29kZSUyMiUzQW51bGwlMkMlMjJ0ZXN0QnVja2V0TnVtJTIyJTNBMCUyQyUyMmFkU2V0R...",
        clickUrl:
          "https://ats.gmarket.co.kr/ra/clk?r=dmVuZG9yPTExOCZiaWRfdmVuZG9yPTExOCZzZWxsZXJfaWQ9amFja2lkJml0ZW1fbm89MzM5MDI2OTQzJnJhX2dyb3VwX25vPTIzMTQmc2VsbGVyX2N1c3Rfbm89MTIyNDI4ODkzJm1hc3Rlcl9pZD0zNDEzOSZyZXFfaWQ9ZjBlZmQxMzYtNWNkOS00ZWExLTg3YzktMWIyZDQ3ZmU3YjIzJmltcF9pZD01ZjYzZTc2Ni04NmM1LTQ4ZWQtYjc0MS03OGU4YjNiNGFlZTYma2V5d29yZD0mY2d1aWQ9MTEzODc1MTc0NjA5ODgwMDc2NTIwMDAwMDAmcGd1aWQ9MjE3MjU4NDU2OTg3NTIwMDk0MTIwMTAwMDAmc2d1aWQ9MzE3NDkwMjA1MDU0NzkwMDk3MzIyMDAwMDAmZXRjX2luZm89JTdCJTIyYWJUZXN0Q29kZSUyMiUzQW51b...",
      },
    },
    {
      goodsCode: "773102287",
      goodsName:
        "여름신상 시원한 반팔/반바지/상하복/상하세트/초등학생/예쁜 여아옷",
      sellPrice: 23900,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=773102287",
      discountPrice: "17,930",
      price: "23,900",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/773102287/still",
      discountRate: 24,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: false,
      lCode: "100000035",
      mCode: "200000512",
      sCode: "300006340",
      sdBrandSeq: 31423,
      sellCustNo: "123613572",
      transPolicyNo: 235117,
      deliveryGroupNo: 93574878,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1744678406,
      miniShopInfo: {
        nickName: "또래친구아동복",
        url: "https://m.gmarket.co.kr/n/minishop/ttolae",
        id: "ttolae",
      },
      reviewCount: "551",
      avgStarPoint: "4.6",
      rank: 3,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
      adImpression: {
        impUrl:
          "https://ats.gmarket.co.kr/ra/imp?r=aW1wX2lkPTJkNjc5OTE2LTUyZDMtNDBlZi04MTE3LWY0YzQ0YmZlOTY4ZiZzZWxsZXJfaWQ9dHRvYWxlJml0ZW1fbm89NzczMTAyMjg3JnZlbmRvcj0xMTgmcmVxX2lkPWYwZWZkMTM2LTVjZDktNGVhMS04N2M5LTFiMmQ0N2ZlN2IyMyZzaXRlX2lkPTImYWRfZ3JvdXBfaWQ9OTY0MCZtYXN0ZXJfaWQ9MTU4ODQyJmNndWlkPTExMzg3NTE3NDYwOTg4MDA3NjUyMDAwMDAwJnBndWlkPTIxNzI1ODQ1Njk4NzUyMDA5NDEyMDEwMDAwJnNndWlkPTMxNzQ5MDIwNTA1NDc5MDA5NzMyMjAwMDAwJmV0Y19pbmZvPSU3QiUyMmFiVGVzdENvZGUlMjIlM0FudWxsJTJDJTIydGVzdEJ1Y2tldE51bSUyMiUzQTAlMkMlMjJhZFNld...",
        clickUrl:
          "https://ats.gmarket.co.kr/ra/clk?r=dmVuZG9yPTExOCZiaWRfdmVuZG9yPTExOCZzZWxsZXJfaWQ9dHRvYWxlJml0ZW1fbm89NzczMTAyMjg3JnJhX2dyb3VwX25vPTk2NDAmc2VsbGVyX2N1c3Rfbm89MTIzNjEzNTcyJm1hc3Rlcl9pZD0xNTg4NDImcmVxX2lkPWYwZWZkMTM2LTVjZDktNGVhMS04N2M5LTFiMmQ0N2ZlN2IyMyZpbXBfaWQ9MmQ2Nzk5MTYtNTJkMy00MGVmLTgxMTctZjRjNDRiZmU5NjhmJmtleXdvcmQ9JmNndWlkPTExMzg3NTE3NDYwOTg4MDA3NjUyMDAwMDAwJnBndWlkPTIxNzI1ODQ1Njk4NzUyMDA5NDEyMDEwMDAwJnNndWlkPTMxNzQ5MDIwNTA1NDc5MDA5NzMyMjAwMDAwJmV0Y19pbmZvPSU3QiUyMmFiVGVzdENvZGUlMjIlM0Fud...",
      },
    },
    {
      goodsCode: "882092234",
      goodsName: "방그레 라이트 캡형 100매 20팩 물티슈 아기물티슈",
      sellPrice: 16900,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=882092234",
      discountPrice: "15,380",
      price: "16,900",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/882092234/still",
      discountRate: 8,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: false,
      lCode: "100000074",
      mCode: "200002936",
      sCode: "300028942",
      sdBrandSeq: 63348,
      sellCustNo: "110570514",
      transPolicyNo: 1761349,
      deliveryGroupNo: 352058317,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1748593235,
      miniShopInfo: {
        nickName: "방그레물티슈",
        url: "https://m.gmarket.co.kr/n/minishop/ildong9394",
        id: "ildong9394",
      },
      reviewCount: "2,928",
      avgStarPoint: "4.7",
      rank: 4,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
      adImpression: {
        impUrl:
          "https://ats.gmarket.co.kr/ra/imp?r=aW1wX2lkPTVjNDkxN2Y3LTRhYmItNDljNC05NmFkLTcxYjNiNTc3ZmNkMSZzZWxsZXJfaWQ9bmluZXRlY2g5OSZpdGVtX25vPTg4MjA5MjIzNCZ2ZW5kb3I9MTE4JnJlcV9pZD1mMGVmZDEzNi01Y2Q5LTRlYTEtODdjOS0xYjJkNDdmZTdiMjMmc2l0ZV9pZD0yJmFkX2dyb3VwX2lkPTExMjA5Jm1hc3Rlcl9pZD0zMDMzMjImY2d1aWQ9MTEzODc1MTc0NjA5ODgwMDc2NTIwMDAwMDAmcGd1aWQ9MjE3MjU4NDU2OTg3NTIwMDk0MTIwMTAwMDAmc2d1aWQ9MzE3NDkwMjA1MDU0NzkwMDk3MzIyMDAwMDAmZXRjX2luZm89JTdCJTIyYWJUZXN0Q29kZSUyMiUzQW51bGwlMkMlMjJ0ZXN0QnVja2V0TnVtJTIyJTNBMCUyQyUyM...",
        clickUrl:
          "https://ats.gmarket.co.kr/ra/clk?r=dmVuZG9yPTExOCZiaWRfdmVuZG9yPTExOCZzZWxsZXJfaWQ9bmluZXRlY2g5OSZpdGVtX25vPTg4MjA5MjIzNCZyYV9ncm91cF9ubz0xMTIwOSZzZWxsZXJfY3VzdF9ubz0xMTA1NzA1MTQmbWFzdGVyX2lkPTMwMzMyMiZyZXFfaWQ9ZjBlZmQxMzYtNWNkOS00ZWExLTg3YzktMWIyZDQ3ZmU3YjIzJmltcF9pZD01YzQ5MTdmNy00YWJiLTQ5YzQtOTZhZC03MWIzYjU3N2ZjZDEma2V5d29yZD0mY2d1aWQ9MTEzODc1MTc0NjA5ODgwMDc2NTIwMDAwMDAmcGd1aWQ9MjE3MjU4NDU2OTg3NTIwMDk0MTIwMTAwMDAmc2d1aWQ9MzE3NDkwMjA1MDU0NzkwMDk3MzIyMDAwMDAmZXRjX2luZm89JTdCJTIyYWJUZXN0Q29kZSUyM...",
      },
    },
    {
      goodsCode: "933724068",
      goodsName: "최저가 당일 벡셀 AA/AAA 정품건전지  망간 AA 48알",
      sellPrice: 15900,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=933724068",
      discountPrice: "15,900",
      price: "15,900",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/933724068/still",
      discountRate: 0,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: false,
      lCode: "100000076",
      mCode: "200002922",
      sCode: "300028646",
      sdBrandSeq: 33939,
      sellCustNo: "130246998",
      transPolicyNo: 7048,
      deliveryGroupNo: 399938003,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1613706350,
      miniShopInfo: {
        nickName: "더나은주식회사",
        url: "https://m.gmarket.co.kr/n/minishop/the0710",
        id: "the0710",
      },
      reviewCount: "3",
      avgStarPoint: "4.7",
      rank: 5,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
      adImpression: {
        impUrl:
          "https://ats.gmarket.co.kr/ra/imp?r=aW1wX2lkPTA1ZTA2NmMyLWZlZWItNDczYi1iMzEyLWM2M2U4OTBlNGRmMiZzZWxsZXJfaWQ9dGhlMDcxMCZpdGVtX25vPTkzMzcyNDA2OCZ2ZW5kb3I9MTE4JnJlcV9pZD1mMGVmZDEzNi01Y2Q5LTRlYTEtODdjOS0xYjJkNDdmZTdiMjMmc2l0ZV9pZD0yJmFkX2dyb3VwX2lkPTk5MCZtYXN0ZXJfaWQ9MzA4NzU5JmNndWlkPTExMzg3NTE3NDYwOTg4MDA3NjUyMDAwMDAwJnBndWlkPTIxNzI1ODQ1Njk4NzUyMDA5NDEyMDEwMDAwJnNndWlkPTMxNzQ5MDIwNTA1NDc5MDA5NzMyMjAwMDAwJmV0Y19pbmZvPSU3QiUyMmFiVGVzdENvZGUlMjIlM0FudWxsJTJDJTIydGVzdEJ1Y2tldE51bSUyMiUzQTAlMkMlMjJhZFNld...",
        clickUrl:
          "https://ats.gmarket.co.kr/ra/clk?r=dmVuZG9yPTExOCZiaWRfdmVuZG9yPTExOCZzZWxsZXJfaWQ9dGhlMDcxMCZpdGVtX25vPTkzMzcyNDA2OCZyYV9ncm91cF9ubz05OTAmc2VsbGVyX2N1c3Rfbm89MTMwMjQ2OTk4Jm1hc3Rlcl9pZD0zMDg3NTkmcmVxX2lkPWYwZWZkMTM2LTVjZDktNGVhMS04N2M5LTFiMmQ0N2ZlN2IyMyZpbXBfaWQ9MDVlMDY2YzItZmVlYi00NzNiLWIzMTItYzYzZTg5MGU0ZGYyJmtleXdvcmQ9JmNndWlkPTExMzg3NTE3NDYwOTg4MDA3NjUyMDAwMDAwJnBndWlkPTIxNzI1ODQ1Njk4NzUyMDA5NDEyMDEwMDAwJnNndWlkPTMxNzQ5MDIwNTA1NDc5MDA5NzMyMjAwMDAwJmV0Y19pbmZvPSU3QiUyMmFiVGVzdENvZGUlMjIlM0Fud...",
      },
    },
    {
      goodsCode: "1112649759",
      goodsName:
        "봄 할인/여아 주니어의류 세트복 초등학생옷 상하복 크레이닝복 아동복",
      sellPrice: 24900,
      linkUrl: "http://mitem.gmarket.co.kr/Item?goodscode=1112649759",
      discountPrice: "24,900",
      price: "24,900",
      itemPriceType: "Normal",
      imageUrl: "//gdimg.gmarket.co.kr/1112649759/still",
      discountRate: 0,
      expressShippingText: "",
      consultingPeriod: "",
      isPriceExpose: true,
      isStartPrice: false,
      isFreeShipping: true,
      isSuperDeal: false,
      lCode: "100000035",
      mCode: "200000512",
      sCode: "300004858",
      sdBrandSeq: 52200,
      sellCustNo: "122428893",
      transPolicyNo: 1723913,
      deliveryGroupNo: 31440047,
      isExpressShipping: false,
      isBigSmileItem: false,
      imageChgDt: 1744261750,
      miniShopInfo: {
        nickName: "잭키드",
        url: "https://m.gmarket.co.kr/n/minishop/jackid",
        id: "jackid",
      },
      reviewCount: "18",
      avgStarPoint: "3.9",
      rank: 6,
      isAdultItem: false,
      lmos: ["결제할인 3%"],
      adImpression: {
        impUrl:
          "https://ats.gmarket.co.kr/ra/imp?r=aW1wX2lkPWIwMmUxODllLTRiY2ItNGJjYS1iOGQyLTRiZTMwZDE1MzJhZSZzZWxsZXJfaWQ9amFja2lkJml0ZW1fbm89MTExMjY0OTc1OSZ2ZW5kb3I9MTE4JnJlcV9pZD1mMGVmZDEzNi01Y2Q5LTRlYTEtODdjOS0xYjJkNDdmZTdiMjMmc2l0ZV9pZD0yJmFkX2dyb3VwX2lkPTIzMTQmbWFzdGVyX2lkPTM0MTM5JmNndWlkPTExMzg3NTE3NDYwOTg4MDA3NjUyMDAwMDAwJnBndWlkPTIxNzI1ODQ1Njk4NzUyMDA5NDEyMDEwMDAwJnNndWlkPTMxNzQ5MDIwNTA1NDc5MDA5NzMyMjAwMDAwJmV0Y19pbmZvPSU3QiUyMmFiVGVzdENvZGUlMjIlM0FudWxsJTJDJTIydGVzdEJ1Y2tldE51bSUyMiUzQTAlMkMlMjJhZFNld...",
        clickUrl:
          "https://ats.gmarket.co.kr/ra/clk?r=dmVuZG9yPTExOCZiaWRfdmVuZG9yPTExOCZzZWxsZXJfaWQ9amFja2lkJml0ZW1fbm89MTExMjY0OTc1OSZyYV9ncm91cF9ubz0yMzE0JnNlbGxlcl9jdXN0X25vPTEyMjQyODg5MyZtYXN0ZXJfaWQ9MzQxMzkmcmVxX2lkPWYwZWZkMTM2LTVjZDktNGVhMS04N2M5LTFiMmQ0N2ZlN2IyMyZpbXBfaWQ9YjAyZTE4OWUtNGJjYi00YmNhLWI4ZDItNGJlMzBkMTUzMmFlJmtleXdvcmQ9JmNndWlkPTExMzg3NTE3NDYwOTg4MDA3NjUyMDAwMDAwJnBndWlkPTIxNzI1ODQ1Njk4NzUyMDA5NDEyMDEwMDAwJnNndWlkPTMxNzQ5MDIwNTA1NDc5MDA5NzMyMjAwMDAwJmV0Y19pbmZvPSU3QiUyMmFiVGVzdENvZGUlMjIlM0Fud...",
      },
    },
  ],
};
export default dummyData;
