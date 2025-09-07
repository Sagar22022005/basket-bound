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
    image:
      "https://imgs.search.brave.com/o-UMsozMV5hLR2SNo-3q5sAoih7TbcveEk5ui0yupak/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L25B/d2tpWm9XanJlM1hN/MlVxcjdaNmguanBn",
    category: "Smartphones",
    description:
      "Next-generation smartphone with enhanced camera and performance.",
  },
  {
    id: "6",
    name: "StudioMax Pro",
    price: 399,
    image:
      "data:image/jpeg;base64,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",
    category: "Audio",
    description:
      "Professional studio headphones for music production and mixing.",
  },
  {
    id: "7",
    name: "MacBook Air M3",
    price: 1299,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMQdCfLngm9DapqsJkk1wzLt0MFsBGK4RMHYBY4TJSijmZb_sbW0FnuzWBoD3wKBvOFHBWxpnedKYONB1ZvV77m46S735uG4M5y-4pIOZhMvqIQI_NNt5M19MO3DYX8O3SwW0aifIzyGI&usqp=CAc",
    category: "Laptops",
    description:
      "Lightweight laptop with exceptional battery life and performance.",
  },
  {
    id: "8",
    name: "FitWatch Pro",
    price: 249,
    image:
      "https://imgs.search.brave.com/E9kEgQEOu-8U3F10u4TiziJqCXzb0BN_aIgDbu_tcKA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmFj/dHMuZGUvY2RuL3No/b3AvZmlsZXMvMl9h/ZWI0ODAwOS03MDE2/LTRiMDUtOTRmYS00/N2E4ZmUzNzdiOTQu/anBnP3Y9MTc0NDEw/MDYzMSZ3aWR0aD0x/MDgw",
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
