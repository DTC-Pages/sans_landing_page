'use client';

import ProductReviewCard, { useProductReviewCard } from '../ProductReviewCard';

export default function ProductReviewList() {
  const { products } = useProductReviewCard();

  return (
    <div className="flex flex-col gap-8 max-w-4xl w-full my-6 mb-9">
      {products.map((product) => (
        <ProductReviewCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  );
}
