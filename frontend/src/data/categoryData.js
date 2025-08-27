import productImage1 from "../assets/product1.png";
import productImage1hover from "../assets/product1hover.jpg";

export const category = {
  name: "Category",
  imageUrl: "https://placehold.co/600x400?text=Category",
  categoryDescription: "This is a description of the category.",
};

export const categoryProducts = Array(15).fill({
  img: productImage1,
  hoverImg: productImage1hover,
  title: "Product Name",
  productUrl: "/shop/productName",
});
