// products.interface.ts
export interface Image {
  imageUrl: string;
}

export interface Review {
  rating: number;
  review: string;
}

export type TProduct = {
  productName: string;
  email: string;
  image: Image;
  quantity: number;
  content: string;
  seller: string;
  price: number;
  category: string;
  subCategory: string;
  flashSale: boolean;
  sold?: number;
  discountPercentage?: number;
  reviews: Review[];
};
