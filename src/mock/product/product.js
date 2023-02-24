const mockData = [
  {
    productId: "6",
    name: "Đầm trễ vai, Dáng ôm 22ADKE194T",
    sku: "22ADKE194T",
    description: "Đầm dài phom dáng ôm, chi tiết trễ vai nữ tính ",
    price: "1,099,500đ",
    ogPrice: "2,199,000đ",
    category: "dress",
    thumbImages: [
      "//product.hstatic.net/200000000133/product/22sdke194t.1_4a4e1018e01143afa8bb8d55dfc91054_compact.jpg",
      "//product.hstatic.net/200000000133/product/22sdke194t.3_a0b4417f9b524e67b3eec0f213b1ad14_compact.jpg",
    ],
    detailImages: [
      "//product.hstatic.net/200000000133/product/22sdke194t.1_4a4e1018e01143afa8bb8d55dfc91054_master.jpg",
      "//product.hstatic.net/200000000133/product/22sdke194t.3_a0b4417f9b524e67b3eec0f213b1ad14_master.jpg",
    ],
    cartImage:
      "//product.hstatic.net/200000000133/product/22sdke194t.1_4a4e1018e01143afa8bb8d55dfc91054_medium.jpg",
  },
  {
    productId: "1",
    name: "Áo kiểu,  22AOTE011K",
    sku: "22AOTE011K",
    description: "Áo kiểu hoạ tiết kẻ, chất liệu jersey mềm mát, dễ phối đồ.",
    price: "749,500đ",
    ogPrice: "1,499,000đ",
    category: "shirt",
    thumbImages: [
      "//product.hstatic.net/200000000133/product/22aote011k__-_22acve026x_a_1453594346864e2b9259300a173ff76e_compact.jpg",
      "//product.hstatic.net/200000000133/product/22aote011k__-_22acve026x_b_3312dfc565fa4060a627525e733ef839_compact.jpg",
      "//product.hstatic.net/200000000133/product/22aote011k__-_22acve026x_c_b04566852fab4315bf51e57b967b652e_compact.jpg",
    ],
    detailImages: [
      "//product.hstatic.net/200000000133/product/22aote011k__-_22acve026x_b_3312dfc565fa4060a627525e733ef839_master.jpg",
      "//product.hstatic.net/200000000133/product/22aote011k__-_22acve026x_a_1453594346864e2b9259300a173ff76e_master.jpg",
      "//product.hstatic.net/200000000133/product/22aote011k__-_22acve026x_c_b04566852fab4315bf51e57b967b652e_master.jpg",
    ],
    cartImage:
      "  //product.hstatic.net/200000000133/product/22aote011k__-_22acve026x_b_3312dfc565fa4060a627525e733ef839_medium.jpg",
  },
  {
    productId: "2",
    name: "Quần trong bộ Vest-Quần, 21AQQE029R",
    sku: "21AQQE029R",
    description: "Quần suông kẻ, phom dáng basic, có khóa kéo và cúc cài.",
    price: "599,500đ",
    ogPrice: "1,199,000đ",
    category: "pant",
    thumbImages: [
      "//product.hstatic.net/200000000133/product/dsc07955_4c2653bd6ab14eaea01afb4f3f2bd42b_compact.jpg",
      "//product.hstatic.net/200000000133/product/dsc08001_13d825b8a3ac4d87a3eb2bc9d29012ec_compact.jpg",
      "//product.hstatic.net/200000000133/product/dsc07875_506ae9e0f99647ff9146f37980c7d523_compact.jpg",
    ],
    detailImages: [
      "//product.hstatic.net/200000000133/product/dsc07955_4c2653bd6ab14eaea01afb4f3f2bd42b_master.jpg",
      "//product.hstatic.net/200000000133/product/dsc08001_13d825b8a3ac4d87a3eb2bc9d29012ec_master.jpg",
      "//product.hstatic.net/200000000133/product/dsc07878_4bd87cdd31f24a6b88a79eec7b5ae810_master.jpg",
    ],
    cartImage:
      "//product.hstatic.net/200000000133/product/dsc07955_4c2653bd6ab14eaea01afb4f3f2bd42b_medium.jpg",
  },
  {
    productId: "3",
    name: "Áo hai dây, 22SAWE001T",
    sku: "22SAWE001T",
    description: "Áo hai dây lụa cao cấp, cổ đổ, kết hợp cùng áo blazer.",
    price: "499,000đ",
    ogPrice: "",
    category: "shirt",
    thumbImages: [
      "//product.hstatic.net/200000000133/product/jim01949_38bbf89ed565435ca6d1d8bfa086f7c2_compact.jpg",
      "//product.hstatic.net/200000000133/product/jim01950_065685d26acf45cb91e2af2d1be8a55c_compact.jpg",
    ],
    detailImages: [
      "//product.hstatic.net/200000000133/product/jim01949_38bbf89ed565435ca6d1d8bfa086f7c2_master.jpg",
      "//product.hstatic.net/200000000133/product/jim01950_065685d26acf45cb91e2af2d1be8a55c_master.jpg",
    ],
    cartImage:
      "  //product.hstatic.net/200000000133/product/jim01949_38bbf89ed565435ca6d1d8bfa086f7c2_medium.jpg",
  },
  {
    productId: "4",
    name: "Quần dài, Ống đứng 21AQDE072X",
    sku: "21AQDE072X",
    description:
      "Quần suông ống đứng, có chi tiết khuy cài và dập li dọc thân quần.",
    price: "1,199,000đ",
    ogPrice: "1,499,000đ",
    category: "pant",
    thumbImages: [
      "//product.hstatic.net/200000000133/product/jim02637_7c67de2a597048368a895ec7af1e23e1_compact.jpg",
      "//product.hstatic.net/200000000133/product/jim02640_ce8e2bf63c5a48199220d8693855a8e8_compact.jpg",
    ],
    detailImages: [
      "//product.hstatic.net/200000000133/product/jim02637_7c67de2a597048368a895ec7af1e23e1_master.jpg",
      "//product.hstatic.net/200000000133/product/jim02640_ce8e2bf63c5a48199220d8693855a8e8_master.jpg",
    ],
    cartImage:
      "  //product.hstatic.net/200000000133/product/jim02637_7c67de2a597048368a895ec7af1e23e1_medium.jpg",
  },
  {
    productId: "5",
    name: "Đầm tay ngắn, Dáng thắt eo 23SDKE085F",
    sku: "23SDKE085F",
    description:
      "Đầm tay tay ngắn, dáng thắt eo, phần chân váy xòe bồng, họa tiết hoa bắt mắt.",
    price: "2,199,000đ",
    ogPrice: "",
    category: "dress",
    thumbImages: [
      "//product.hstatic.net/200000000133/product/23sdke085f_c_6f13ce824b2441f9a321a08151c46a51_compact.jpg",
      "//product.hstatic.net/200000000133/product/23sdke085f_b_d409093711cc4a29a524e9b5f651c9d8_compact.jpg",
    ],
    detailImages: [
      "//product.hstatic.net/200000000133/product/23sdke085f_c_6f13ce824b2441f9a321a08151c46a51_master.jpg",
      "//product.hstatic.net/200000000133/product/23sdke085f_b_d409093711cc4a29a524e9b5f651c9d8_master.jpg",
    ],
    cartImage:
      "  //product.hstatic.net/200000000133/product/23sdke085f_c_6f13ce824b2441f9a321a08151c46a51_medium.jpg",
  },
];
export default mockData;
