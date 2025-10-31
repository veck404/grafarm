import fiveLitres from "../Svgs/5litres.png";
import tenLitres from "../Svgs/10litres.png";
import twentyFiveLitres from "../Svgs/25litres.png";

export const Products = [
  // Home categories
  // { src: fiveLitres, type: "newarrival", name: "5 Litres Palm Oil – Chef’s Reserve", stars: 4.9, cost: 6000, discount: 4 },
  { src: tenLitres, type: "topselling", name: "10 Litres Palm Oil – Golden Batch", stars: 4.7, cost: 11800, discount: 6 },
  { src: twentyFiveLitres, type: "onsale", name: "25 Litres Palm Oil – Export Grade", stars: 4.8, cost: 27900, discount: 15 },

  // Shop items
  { src: fiveLitres, id: "5B", place: "shop", type: "newarrival", type2: "All", name: "5 Litres Palm Oil – Family Pack", stars: 4.7, cost: 5650, discount: 2 },
  { src: fiveLitres, id: "5C", place: "shop", type: "newarrival", type2: "All", name: "5 Litres Palm Oil – Organic Blend", stars: 4.8, cost: 6100, discount: 5 },

  { src: tenLitres, id: "10B", place: "shop", type: "topselling", type2: "All", name: "10 Litres Palm Oil – Signature Batch", stars: 4.9, cost: 12250, discount: 6 },
  { src: tenLitres, id: "10C", place: "shop", type: "topselling", type2: "All", name: "10 Litres Palm Oil – Premium Cold Pressed", stars: 5, cost: 13000, discount: 8 },

  { src: twentyFiveLitres, id: "25B", place: "shop", type: "onsale", type2: "All", name: "25 Litres Palm Oil – HoReCa Pack", stars: 4.9, cost: 29000, discount: 14 },
  { src: twentyFiveLitres, id: "25C", place: "shop", type: "onsale", type2: "All", name: "25 Litres Palm Oil – Export Series", stars: 4.9, cost: 29500, discount: 16 },
];

export const SiteReviews = [
  {name:'Sarah M.', review:"I have been using Graferd Farms palm oil for several months now, and I am extremely satisfied with its quality. The oil has a pleasant aroma and a rich taste that enhances the flavor of my dishes. I highly recommend it to anyone looking for a reliable cooking oil."},
  {name:'Alex Kalu.', review:"This palm oil is of exceptional quality. It has a rich flavor and aroma that enhances my cooking. I've noticed a significant difference in the taste of my dishes since I started using Graferd Farms palm oil."},
  {name:'Murna Musa', review:"As a health-conscious individual, I appreciate that Graferd Farms palm oil is free from harmful additives. It gives me peace of mind knowing that I'm using a natural and pure product in my cooking."},
  {name:'Samantha Daniel.', review:"Graferd Farms palm oil has become a staple in my kitchen. Its versatility allows me to use it for frying, baking, and even making salad dressings. I highly recommend it to anyone looking for a high-quality cooking oil."},
]
