export type TProduct = {
  key: React.Key;
  name: string;
  images: string;
  stock: number;
  price: number;
  description: string;
};

export type FieldType = {
  _id: string;
  name: string;
  price: number;
  description: string;
  images?: string;
  category: string;
  stock: number;
};

export type TCart = {
  _id: string;
  category: string;
  description: string;
  images: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
};

export type TTeam = {
  name: string;
  star: number;
  title: string;
  image: string;
  review: string;
  designation: string;
  company: string;
};
