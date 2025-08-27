import productImage1 from "../assets/product1.png";
import productImage1hover from "../assets/product1hover.jpg";

export const products = Array(15).fill({
  img: productImage1,
  hoverImg: productImage1hover,
  title: "Product Name",
  productUrl: "/shop/productName",
});

export const category = [
  {
    name: "Category 1",
    imageUrl: "https://placehold.co/600x400?text=Category1",
    page: "/category1",
  },
  {
    name: "Category 2",
    imageUrl: "https://placehold.co/600x400?text=Category2",
    page: "/category2",
  },
  {
    name: "Category 3",
    imageUrl: "https://placehold.co/600x400?text=Category3",
    page: "/category3",
  },
];