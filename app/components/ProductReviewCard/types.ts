export interface ProductPro {
  text: string;
}

export interface ProductCon {
  text: string;
}
export interface highlightedText {
  text: string;
}
export interface ProductReview {
  id: number;
  title: string;
  imageUrl?: string;
  imageAlt: string;
  overall: {
    title: string;
    description: string;
    highlightedText?: highlightedText[];
  };
  pros: ProductPro[];
  cons: ProductCon[];
}
