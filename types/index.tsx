export interface productType {
  //   id: string;
  name: string;
  price: number;
  slug: string;
  stock: number;
  thumb: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  images: string[];
  description?: string;
  category?: string;
  brand?: string;
  details?: any[];
}
