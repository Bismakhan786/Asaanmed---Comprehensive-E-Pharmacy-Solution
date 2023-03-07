const myProfile = {
  name: "ASAANMED",
  profile_image: require("../assets/images/profile.jpeg"),
  address: "No. 88, Jln Padungan, Kuching",
  gmail: "bismaashfaq009@gmail.com",
};

const company = {
  name: "asaanmed",
  image: require("../assets/images/am-final.png"),
};

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Onboarding Slides

const slides = [
  {
    id: "1",
    title: "Upload your prescription",
    description: "Find your favourite products that you need to buy daily",
    image: require("../assets/images/Onboarding/UploadPrecription.png"),
  },
  {
    id: "2",
    title: "Browse variety of medical products",
    description: "Pay for the products that you buy safely and securely",
    image: require("../assets/images/Onboarding/BrowseCategories.png"),
  },
  {
    id: "3",
    title: "Get your medical products instantly",
    description: "Your products are delivered home safely and securely",
    image: require("../assets/images/Onboarding/getInstantly.png"),
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/hot_tacos.png"),
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description: "Indian Vegetable Biryani",
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/veg_biryani.png"),
};

const wrapSandwich = {
  id: 4,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/wrap_sandwich.png"),
};

const menu = [
  {
    id: 1,
    name: "Featured",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: "Nearby you",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: "Popular",
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: "Newest",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: "Trending",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: "Recommended",
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

const tablets = [
  {
    id: 1,
    title: "ABOCAL TAB",
    price: 144.2,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/abocal-tab.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 2,
    title: "ACENAC-100 TAB",
    price: 234.95,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/acenac-100-tab.png"),
    description:
      "Our Timeless Hair Repair Serum goes back to the basics to help your hair become stronger, fuller, and more beautiful then ever before. Promotes shiny, soft, healthy, and strong hair. Our wide variety of organic oils provide all day moisture as well as strength and growth. Safe for color treated hair.",
  },
  {
    id: 3,
    title: "ACICON-40 TAB",
    price: 154.44,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/acicon-40-tab.png"),
    description:
      "Our Timeless Hair Repair Serum goes back to the basics to help your hair become stronger, fuller, and more beautiful then ever before. Promotes shiny, soft, healthy, and strong hair. Our wide variety of organic oils provide all day moisture as well as strength and growth. Safe for color treated hair.",
  },
  {
    id: 4,
    title: "ACTIM-20 TAB",
    price: 92.63,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/actim-20-tab.png"),
    description:
      "Our Timeless Hair Repair Serum goes back to the basics to help your hair become stronger, fuller, and more beautiful then ever before. Promotes shiny, soft, healthy, and strong hair. Our wide variety of organic oils provide all day moisture as well as strength and growth. Safe for color treated hair.",
  },
  {
    id: 5,
    title: "AEROKAST-10 TAB",
    price: 234.18,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/aerokast-10-tab.png"),
    description:
      "Our Timeless Hair Repair Serum goes back to the basics to help your hair become stronger, fuller, and more beautiful then ever before. Promotes shiny, soft, healthy, and strong hair. Our wide variety of organic oils provide all day moisture as well as strength and growth. Safe for color treated hair.",
  },
  {
    id: 6,
    title: "ALOC-120 TAB",
    price: 102.82,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/aloc-120-tab.png"),
    description:
      "Our Timeless Hair Repair Serum goes back to the basics to help your hair become stronger, fuller, and more beautiful then ever before. Promotes shiny, soft, healthy, and strong hair. Our wide variety of organic oils provide all day moisture as well as strength and growth. Safe for color treated hair.",
  },
  {
    id: 7,
    title: "ALOC-180 TAB",
    price: 127.5,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/aloc-180-tab.png"),
    description:
      "Our Timeless Hair Repair Serum goes back to the basics to help your hair become stronger, fuller, and more beautiful then ever before. Promotes shiny, soft, healthy, and strong hair. Our wide variety of organic oils provide all day moisture as well as strength and growth. Safe for color treated hair.",
  },
  {
    id: 8,
    title: "CAL-D TAB",
    price: 117.0,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/cal-d-tab.png"),
    description:
      "Our Timeless Hair Repair Serum goes back to the basics to help your hair become stronger, fuller, and more beautiful then ever before. Promotes shiny, soft, healthy, and strong hair. Our wide variety of organic oils provide all day moisture as well as strength and growth. Safe for color treated hair.",
  },
  {
    id: 9,
    title: "CALAN-40 TAB",
    price: 95.82,
    category: "Tablets",
    image: require("../assets/images/Products/tablets/calan-40-tab.png"),
    description:
      "Our Timeless Hair Repair Serum goes back to the basics to help your hair become stronger, fuller, and more beautiful then ever before. Promotes shiny, soft, healthy, and strong hair. Our wide variety of organic oils provide all day moisture as well as strength and growth. Safe for color treated hair.",
  },
];

const syrups = [
  {
    id: 1,
    title: "CEBOSCH-DS",
    price: 157.89,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/cebosch-ds-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 2,
    title: "CECLOR-250",
    price: 437.6,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/ceclor-250-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 3,
    title: "CEFIM",
    price: 134.64,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/cefim-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 4,
    title: "DROMAX-125",
    price: 75.96,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/dromax-125-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 5,
    title: "FIBO",
    price: 237.76,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/fibo-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 6,
    title: "METODINE-DF",
    price: 61.06,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/metodine-df-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 7,
    title: "MOTILIUM",
    price: 102.23,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/motilium-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 8,
    title: "OLCUF",
    price: 145.86,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/olcuf-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 9,
    title: "PANADOL SYRUP",
    price: 76.84,
    category: "Syrup",
    image: require("../assets/images/Products/syrup/panadol-syp.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
];

const capsules = [
  {
    id: 1,
    title: "AMPICLOX-250",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/ampiclox-250-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 2,
    title: "AMPICLOX-500",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/ampiclox-500-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 3,
    title: "CALAMOX-1G",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/calamox-1g-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 4,
    title: "CECLOR-250",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/ceclor-250-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 5,
    title: "CELBEX-100",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/celbex-100-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 6,
    title: "DALACIN-300",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/dalacin-c-300-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 7,
    title: "ESVIN-40",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/esvin-40-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 8,
    title: "FENOGET-67",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/fenoget-67-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 9,
    title: "GABICA-300",
    price: 157.89,
    category: "Capsules",
    image: require("../assets/images/Products/capsules/gabica-300-cap.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
];

const drops = [
  {
    id: 1,
    title: "BARINEP",
    price: 157.89,
    category: "Drop",
    image: require("../assets/images/Products/drops/barinep-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 2,
    title: "BLEPHAMIDE",
    price: 157.89,
    category: "Drop",
    image: require("../assets/images/Products/drops/blephamide-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 3,
    title: "CURINE EYE DROPS",
    price: 157.89,
    category: "Drop",
    image: require("../assets/images/Products/drops/curine-eye-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 4,
    title: "DEXIMOX",
    price: 157.89,
    category: "Drop",
    image: require("../assets/images/Products/drops/deximox-drops.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 5,
    title: "FEMICON",
    price: 157.89,
    category: "Drop",
    image: require("../assets/images/Products/drops/femicon-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 6,
    title: "LIDOSPORIN",
    price: 157.89,
    category: "Drop",
    image: require("../assets/images/Products/drops/lidosporin-drops.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
];
const injections = [
  {
    id: 1,
    title: "2-SUM 2G",
    price: 157.89,
    category: "Injection",
    image: require("../assets/images/Products/injection/2-sum-2gm-inj.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 2,
    title: "ARTEM-40",
    price: 157.89,
    category: "Injection",
    image: require("../assets/images/Products/injection/artem-40-inj.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 3,
    title: "CALAMOX 1.2G",
    price: 157.89,
    category: "Injection",
    image: require("../assets/images/Products/injection/calamox-1.2-inj.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 4,
    title: "FORTUM-1G",
    price: 157.89,
    category: "Injection",
    image: require("../assets/images/Products/injection/fortum-1g-inj.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 5,
    title: "K-KORT",
    price: 157.89,
    category: "Injection",
    image: require("../assets/images/Products/injection/k-kort-inj.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 6,
    title: "LINCOCIN-600",
    price: 157.89,
    category: "Injection",
    image: require("../assets/images/Products/injection/lincocin-600-inj.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 7,
    title: "QBALL",
    price: 157.89,
    category: "Injection",
    image: require("../assets/images/Products/injection/qball-inj.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
];
const sachet = [
  {
    id: 1,
    title: "ABOCRAN CRANBERRY",
    price: 157.89,
    category: "Sachet",
    image: require("../assets/images/Products/sachets/abocran-cranberry-sachet.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 2,
    title: "BIFLOR",
    price: 157.89,
    category: "Sachet",
    image: require("../assets/images/Products/sachets/biflor-sachet.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 3,
    title: "CALCEE-PLUS",
    price: 157.89,
    category: "Sachet",
    image: require("../assets/images/Products/sachets/calcee-plus-poweder-sachet.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 4,
    title: "CITROSODA LEMON",
    price: 157.89,
    category: "Sachet",
    image: require("../assets/images/Products/sachets/citrosoda-lemon-sachet.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 5,
    title: "CRAN-MAX",
    price: 157.89,
    category: "Sachet",
    image: require("../assets/images/Products/sachets/cran-max.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 6,
    title: "ENFLOR",
    price: 157.89,
    category: "Sachet",
    image: require("../assets/images/Products/sachets/enflor-sachet.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 7,
    title: "RH-12 ORANGE ORS",
    price: 157.89,
    category: "Sachet",
    image: require("../assets/images/Products/sachets/rh12-orange-ors.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
];
const extras = [
  {
    id: 1,
    title: "BAYCUTEN-N CREAM",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/baycuten-n-cream.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 2,
    title: "BEPANTHEN OINTNMENT",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/bepanthen-oint.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 3,
    title: "BETNOVATE-N CREAM",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/betnovate-n-cream.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 4,
    title: "CANNULA-20",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/cannula-20.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 5,
    title: "CANNULA-22",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/cannula-22.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 6,
    title: "CUTIVATE CREAM",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/cutivate-cream.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 7,
    title: "DERMOVATE OINTMENT",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/dermovate-oint.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 8,
    title: "EXOCIN OINTMENT",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/exocin-oint.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 9,
    title: "FLYTRO 15MG CREAM",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/flytro-15mg-cream.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 10,
    title: "GRIPE WATER",
    price: 157.89,
    category: "Extras",
    image: require("../assets/images/Products/extras/gripewater.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
];

const cartItemsList = [
  {
    id: 1,
    title: "BARINEP",
    price: 157.89,
    qty: 1,
    category: "Drop",
    image: require("../assets/images/Products/drops/barinep-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 2,
    title: "BLEPHAMIDE",
    price: 157.89,
    qty: 2,
    category: "Drop",
    image: require("../assets/images/Products/drops/blephamide-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 3,
    title: "CURINE EYE DROPS",
    price: 157.89,
    qty: 1,
    category: "Drop",
    image: require("../assets/images/Products/drops/curine-eye-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 4,
    title: "DEXIMOX",
    price: 157.89,
    qty: 6,
    category: "Drop",
    image: require("../assets/images/Products/drops/deximox-drops.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 5,
    title: "FEMICON",
    price: 157.89,
    qty: 2,
    category: "Drop",
    image: require("../assets/images/Products/drops/femicon-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 6,
    title: "LIDOSPORIN",
    price: 157.89,
    qty: 1,
    category: "Drop",
    image: require("../assets/images/Products/drops/lidosporin-drops.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 7,
    title: "FEMICON",
    price: 157.89,
    qty: 2,
    category: "Drop",
    image: require("../assets/images/Products/drops/femicon-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 8,
    title: "LIDOSPORIN",
    price: 157.89,
    qty: 1,
    category: "Drop",
    image: require("../assets/images/Products/drops/lidosporin-drops.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 9,
    title: "FEMICON",
    price: 157.89,
    qty: 2,
    category: "Drop",
    image: require("../assets/images/Products/drops/femicon-drop.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
  {
    id: 10,
    title: "LIDOSPORIN",
    price: 157.89,
    qty: 1,
    category: "Drop",
    image: require("../assets/images/Products/drops/lidosporin-drops.png"),
    description:
      "Eliminate up to 99.99% of germs with our unique sanitizer formulation. Crafted with organic grape alcohol, witch hazel, and tea tree oil - gentle yet potent enough to tackle daily bacteria, microbes, and fungus.",
  },
];

const homeData = [
  {
    id: "1",
    title: "Upload your prescription",
    description: "Find your favourite products that you need to buy daily",
    image: require("../assets/images/home/Prescription.png"),
  },
  {
    id: "2",
    title: "All Categories",
    description: "Browse variety",
    image: require("../assets/images/home/Cat.png"),
  },
  {
    id: "3",
    title: "Vouchers",
    description: "Get Excited",
    image: require("../assets/images/home/Offers.png"),
  },
];

const notificationList = [
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Offer",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Order",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="truck-fast-outline"
        size={24}
        color="black"
      />
    ),
    title: "Shipped",
    description:
      "Your order is shipped from our site, contact to delivery partners for further details and information",
  },
];

const orderhistory = [
  {
    id: 1, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Delivered",
  },
  {
    id: 2, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Cancelled", // delivered or cancelled
  },
  {
    id: 3, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Delivered",
  },
  {
    id: 4, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Cancelled", // delivered or cancelled
  },
  {
    id: 5, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Delivered",
  },
  {
    id: 6, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Cancelled", // delivered or cancelled
  },
  {
    id: 7, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Delivered",
  },
  {
    id: 8, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Cancelled", // delivered or cancelled
  },
  {
    id: 9, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Delivered",
  },
  {
    id: 10, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Cancelled", // delivered or cancelled
  },
  {
    id: 11, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Delivered",
  },
  {
    id: 12, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "Cancelled", // delivered or cancelled
  },
];

const upcomingOrders = [
  {
    id: 1, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "On the way",
  },
  {
    id: 2, //order number or order id
    totalAmount: 16500,
    date: "19 Sep, 14: 30",
    items: 3, //number or items or medicines in a single order
    status: "On the way", // delivered or cancelled
  },
];

const vouchersAvailable = [
  {
    id: 1, //voucher number or voucher id
    medicineOrCategoryName: "Barinep Drops",
    image: require('../assets/images/Products/drops/barinep-drop.png'),
    percentage: "10",
    validityDate: "16 Aug 2022"
  },
  {
    id: 2, //voucher number or voucher id
    medicineOrCategoryName: "Dextop 30mg Cap",
    image: require('../assets/images/Products/capsules/dextop-30-cap.png'),
    percentage: "5",
    validityDate: "14 Aug 2022"
  },
  {
    id: 3, //voucher number or voucher id
    medicineOrCategoryName: "Tablets",
    image: require('../assets/images/Products/tablets/actim-20-tab.png'),
    percentage: "15",
    validityDate: "10 Sep 2022"
  },
  {
    id: 4, //voucher number or voucher id
    medicineOrCategoryName: "Cannula 20",
    image: require('../assets/images/Products/extras/cannula-20.png'),
    percentage: "2",
    validityDate: "15 Aug 2022"
  },
];

const vouchersUsed = [
  {
    id: 1, //voucher number or voucher id
    medicineOrCategoryName: "Barinep Drops",
    image: require('../assets/images/Products/drops/barinep-drop.png'),
    percentage: "10",
    usedOn: "16 Aug 2022"
  },
  {
    id: 2, //voucher number or voucher id
    medicineOrCategoryName: "Dextop 30mg Cap",
    image: require('../assets/images/Products/capsules/dextop-30-cap.png'),
    percentage: "5",
    usedOn: "14 Aug 2022"
  },
];

const addressBook = [
  {
    streetAddr: "Noor Apartment FL-4 D-7 Block 'k' North Nazimabad Karachi",
    city: "Karachi",
    postalCode: 74600,
    noteToRider: "Contact before delivery"
  },
  {
    streetAddr: "A-133 Block 'S' North Nazimabad Karachi",
    city: "Karachi",
    postalCode: 74600,
    noteToRider: "Do not Contact before delivery"
  },
  {
    streetAddr: "Al-Amin Apartment FL-3 B-4 Block 'k' North Nazimabad Karachi",
    city: "Karachi",
    postalCode: 74600,
    noteToRider: "Contact before delivery"
  },
  
]

const favourites = [];

export default {
  myProfile,
  menu,
  slides,
  cartItemsList,
  homeData,
  notificationList,
  company,
  tablets,
  syrups,
  capsules,
  drops,
  injections,
  sachet,
  extras,
  favourites,
  orderhistory,
  upcomingOrders,
  vouchersAvailable,
  vouchersUsed,
  addressBook
};
