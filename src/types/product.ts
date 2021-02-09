export interface Product {
  bestSellingRank: number;
  category: string;
  customerReviewCount: number;
  image: string;
  manufacturer: string;
  name: string;
  objectID: string;
  salePrice: number;
  salePrice_range: string;
  shipping: string;
  shortDescription: string;
  thumbnailImage: string;
  type: string;
  url: string;
}

export interface CartProduct extends Product {
  discountPrice: number;
}
