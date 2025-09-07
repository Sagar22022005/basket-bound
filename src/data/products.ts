import { Product } from "@/contexts/CartContext";
import phone1 from "@/assets/phone-1.jpg";
import headphones1 from "@/assets/headphones-1.jpg";
import laptop1 from "@/assets/laptop-1.jpg";
import watch1 from "@/assets/watch-1.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Galaxy Pro X1",
    price: 999,
    image: phone1,
    category: "Smartphones",
    description:
      "Latest flagship smartphone with advanced AI features and premium design.",
  },
  {
    id: "2",
    name: "AirMax Wireless",
    price: 299,
    image: headphones1,
    category: "Audio",
    description:
      "Premium wireless headphones with noise cancellation and studio-quality sound.",
  },
  {
    id: "3",
    name: "MacBook Pro Elite",
    price: 2499,
    image: laptop1,
    category: "Laptops",
    description:
      "Professional laptop with M3 chip, perfect for creative work and development.",
  },
  {
    id: "4",
    name: "SmartWatch Ultra",
    price: 449,
    image:
      "https://imgs.search.brave.com/P58bmiNlIXhMHUJjNvAC4atPrHVGvqXjwmhvtqWlEyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vRS1F/eWFmYS1Kcy1XYXRj/aDctVWx0cmEtMS00/My1Jbi1PcmFuZ2Ut/U3BvcnRzLUJhbmQt/TmV3LTEtUGFja19m/MGM4Zjc1NC1kOTI2/LTRhZWMtODQ3OC1l/ODkzN2NkYmRiZDQu/ZWI0NDNlOTMyN2Vj/MTljZTk2MjMyOGVj/NzJlOTI2NmEucG5n/P29kbkhlaWdodD01/ODAmb2RuV2lkdGg9/NTgwJm9kbkJnPUZG/RkZGRg",
    category: "Wearables",
    description:
      "Advanced smartwatch with health monitoring and fitness tracking features.",
  },
  {
    id: "5",
    name: "Galaxy Pro X2",
    price: 1199,
    image: phone1,
    category: "Smartphones",
    description:
      "Next-generation smartphone with enhanced camera and performance.",
  },
  {
    id: "6",
    name: "StudioMax Pro",
    price: 399,
    image: headphones1,
    category: "Audio",
    description:
      "Professional studio headphones for music production and mixing.",
  },
  {
    id: "7",
    name: "MacBook Air M3",
    price: 1299,
    image: laptop1,
    category: "Laptops",
    description:
      "Lightweight laptop with exceptional battery life and performance.",
  },
  {
    id: "8",
    name: "FitWatch Pro",
    price: 249,
    image: watch1,
    category: "Wearables",
    description: "Fitness-focused smartwatch with GPS and health tracking.",
  },
];

export const categories = [
  "All",
  "Smartphones",
  "Audio",
  "Laptops",
  "Wearables",
];

export const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹300", min: 0, max: 300 },
  { label: "₹300 - ₹500", min: 300, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "Over ₹1000", min: 1000, max: Infinity },
];
