interface CarFeature {
  icon: React.ReactNode;
  label: string;
}

export interface CarData {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  features: CarFeature[];
  type: string;
  location: string;
}
