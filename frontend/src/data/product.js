import productImage1 from "../assets/product1.png";
import productImage1hover from "../assets/product1hover.jpg";

export const product = {
  img: [
    "https://placehold.co/300x350?text=Image1",
    "https://placehold.co/300x350?text=Image2",
  ],
  productName: "Product Name",
  productDescription: "This is a brief description of the product.",
  cost: "99.99",
  info: [
    [
      "Detail",
      "Here are some detailed information Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eligendi et perspiciatis repellendus esse at nulla dolorem veniam maxime?",
    ],
    [
      "How To Use",
      "Instructions on how to use Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eligendi et perspiciatis repellendus esse at nulla dolorem veniam maxime?",
    ],
    [
      "Ingredients",
      "List of ingredients Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eligendi et perspiciatis repellendus esse at nulla dolorem veniam maxime?",
    ],
    [
      "Delivery And Return",
      "Information about delivery Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eligendi et perspiciatis repellendus esse at nulla dolorem veniam maxime?",
    ],
  ],
  faqs: [
    [
      "How long does the battery last?",
      "The headphones offer up to 30 hours of playback on a full charge. A quick 10-minute charge provides 3 hours of use.",
    ],
    [
      "Is it compatible with all devices?",
      "Yes, it works with any device that supports Bluetooth, including smartphones, tablets, and laptops.",
    ],
    [
      "Does it have noise cancellation?",
      "Yes, it comes with active noise cancellation (ANC) and a transparency mode so you can hear your surroundings when needed.",
    ],
    [
      "What’s included in the box?",
      "You’ll receive the wireless headphones, a USB-C charging cable, a 3.5mm audio cable, a carrying case, and the user manual.",
    ],
  ],
};

export const products = Array(3).fill({
  img: productImage1,
  hoverImg: productImage1hover,
  title: "Product Name",
});
