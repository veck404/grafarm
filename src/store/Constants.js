import fiveLitres from "../Svgs/5litres.png";
import tenLitres from "../Svgs/10litres.png";
import twentyFiveLitres from "../Svgs/25litres.png";

export const Products = [
  // Home categories
  { src: fiveLitres, type: "newarrival", name: "5 Litres Palm Oil", stars: 4.6, cost: 5500, discount: 0 },
  { src: tenLitres, type: "topselling", name: "10 Litres Palm Oil", stars: 4.8, cost: 12000, discount: 5 },
  { src: twentyFiveLitres, type: "onsale", name: "25 Litres Palm Oil", stars: 4.7, cost: 28500, discount: 12 },

  // Shop items
  { src: fiveLitres, id: "5", place: "shop", type: "newarrival", type2: "All", name: "5 Litres Palm Oil", stars: 4.6, cost: 5500, discount: 0 },
  { src: tenLitres, id: "10", place: "shop", type: "topselling", type2: "All", name: "10 Litres Palm Oil", stars: 4.8, cost: 12000, discount: 5 },
  { src: twentyFiveLitres, id: "25", place: "shop", type: "onsale", type2: "All", name: "25 Litres Palm Oil", stars: 4.7, cost: 28500, discount: 12 },
];

export const SiteReviews = [
  {name:'Sarah M.', review:"I have been using Graferd Farms palm oil for several months now, and I am extremely satisfied with its quality. The oil has a pleasant aroma and a rich taste that enhances the flavor of my dishes. I highly recommend it to anyone looking for a reliable cooking oil."},
  {name:'Alex Kalu.', review:"This palm oil is of exceptional quality. It has a rich flavor and aroma that enhances my cooking. I've noticed a significant difference in the taste of my dishes since I started using Graferd Farms palm oil."},
  {name:'Murna Musa', review:"As a health-conscious individual, I appreciate that Graferd Farms palm oil is free from harmful additives. It gives me peace of mind knowing that I'm using a natural and pure product in my cooking."},
  {name:'Samantha Daniel.', review:"Graferd Farms palm oil has become a staple in my kitchen. Its versatility allows me to use it for frying, baking, and even making salad dressings. I highly recommend it to anyone looking for a high-quality cooking oil."},
]
