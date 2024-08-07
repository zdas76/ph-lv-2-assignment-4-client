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
