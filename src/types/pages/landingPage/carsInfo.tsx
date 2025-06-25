import type { CarData } from "@myTypes/components/carData";
import { Fuel, Settings, Users } from "lucide-react";

export const cars: CarData[] = [
  {
    id: 1,
    name: "Honda Civic",
    image:
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 45,
    rating: 4.8,
    type: "Sedán",
    location: "Centro Ciudad",
    features: [
      { icon: <Users size={16} />, label: "5 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Gasolina" },
      { icon: <Settings size={16} />, label: "Automático" },
    ],
  },
  {
    id: 2,
    name: "Toyota RAV4",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Toyota_Land_Cruiser_250_VX.jpg/960px-Toyota_Land_Cruiser_250_VX.jpg",
    price: 65,
    rating: 4.9,
    type: "SUV",
    location: "Aeropuerto",
    features: [
      { icon: <Users size={16} />, label: "7 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Híbrido" },
      { icon: <Settings size={16} />, label: "AWD" },
    ],
  },
  {
    id: 3,
    name: "BMW Serie 3",
    image:
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 85,
    rating: 4.7,
    type: "Ejecutivo",
    location: "Centro Ciudad",
    features: [
      { icon: <Users size={16} />, label: "5 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Gasolina" },
      { icon: <Settings size={16} />, label: "Manual" },
    ],
  },
  {
    id: 4,
    name: "Volkswagen Golf",
    image:
      "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 35,
    rating: 4.6,
    type: "Compacto",
    location: "Norte",
    features: [
      { icon: <Users size={16} />, label: "4 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Gasolina" },
      { icon: <Settings size={16} />, label: "Manual" },
    ],
  },
  {
    id: 5,
    name: "Ford Explorer",
    image:
      "https://live.dealer-asset.co/images/br1166/news/ford-motor-colombia-presenta-la-nueva-explorer-st-v2.jpg?s=1024",
    price: 75,
    rating: 4.8,
    type: "SUV Grande",
    location: "Sur",
    features: [
      { icon: <Users size={16} />, label: "8 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Gasolina" },
      { icon: <Settings size={16} />, label: "4WD" },
    ],
  },
  {
    id: 6,
    name: "Tesla Model 3",
    image:
      "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 95,
    rating: 4.9,
    type: "Eléctrico",
    location: "Premium",
    features: [
      { icon: <Users size={16} />, label: "5 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Eléctrico" },
      { icon: <Settings size={16} />, label: "Automático" },
    ],
  },
];
