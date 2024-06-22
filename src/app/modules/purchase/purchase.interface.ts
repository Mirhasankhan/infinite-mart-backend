// products.interface.ts
export interface Image {
  imageUrl: string;
}

export type TPurchase = {
  productName: string;
  cartId: string;
  productId: string;
  email: string;
  userEmail: string;
  image: Image;
  cartQuantity: number;
  seller: string;
  price: number;
  totalCost: number;
  category: string;
  subCategory: string;
};
