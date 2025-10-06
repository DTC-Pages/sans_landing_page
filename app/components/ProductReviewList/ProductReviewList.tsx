'use client';

import ProductReviewCard from '../ProductReviewCard';
import { ProductReview } from '../ProductReviewCard/types';

const PRODUCT_REVIEWS_DATA: ProductReview[] = [
  {
    id: 2,
    title: "Dyson Purifier Humidify+Cool PH2 De-NOx",
    imageAlt: "Dyson Air Purifier",
    imageUrl: "/Dyson-Purifier.png",
    overall: {
      title: "OVERALL",
      description: "Number two on our list is Dyson's Air Purifier. It purifies and humidifies the air and can be controlled via a smartphone app. However, it comes with a way higher price tag—more than double other options on the market—while covering significantly less space. Additionally, it's only backed by a 2-year warranty.",
      highlightedText:[
        { text:"way higher price tag—more than double other options on the market" }
      ] 
    },
    pros: [
      { text: "Air purifier and humidifier" },
      { text: "Smart app control" }
    ],
    cons: [
      { text: "Way higher price ($1,099.99)" },
      { text: "Much smaller coverage area" },
      { text: "Limited 2-year warranty" },
      { text: "2-stage filtration instead of 3" }
    ]
  },
  {
    id: 3,
    title: "Coway Airmega 400",
    imageAlt: "Coway Airmega 400 Air Purifier",
    imageUrl: "/Coway-Airmega.png",
    overall: {
      title: "OVERALL",
      description: "Number three on our list is Coway's Air Purifier. It offers 3-stage filtration with decent coverage. However, it comes with a higher price-to-coverage ratio, runs noisier than alternatives, and lacks portability and user-friendliness.",
      highlightedText: [
        {
          text:"Number three on our list is Coway's Air Purifier."
        },
        {
          text: "higher price-to-coverage ratio",
        }
      ]
    },
    pros: [
      { text: "3-stage filtration" },
      { text: "Decent coverage" }
    ],
    cons: [
      { text: "Less coverage for the same price" },
      { text: "Noisy operation" },
      { text: "Not portable" },
      { text: "Less user-friendly" }
    ]
  },
  {
    id: 4,
    title: "AirDoctor 3500",
    imageAlt: "AirDoctor 3500 Air Purifier",
    imageUrl: "/AirDoctor.png",
    overall: {
      title: "OVERALL",
      description: "Number four on our list is Air Doctor's Air Purifier. Its strengths include a powerful 3-stage filtration system and quiet operation. However, it falls short with less than half the coverage of other options, a noticeably higher price, and only a limited 1-year warranty.",
      highlightedText:[
        {
          text:"less than half the coverage of other options, a noticeably higher price"
        }
      ] 
    },
    pros: [
      { text: "3-Stage Filtration" },
      { text: "Quiet Operation" }
    ],
    cons: [
      { text: "Higher price ($659)" },
      { text: "Less than half coverage area" },
      { text: "Limited 1-year warranty" }
    ]
  },
  {
    id: 5,
    title: "Blueair Blue Pure 211+",
    imageAlt: "Blueair Blue Pure 211+ Air Purifier",
    imageUrl: "/Blueair.png",
    overall: {
      title: "OVERALL",
      description: "Number five on our list is BlueAir's Purifier. It's a budget-friendly option with smart app connectivity, but it comes with very limited coverage and only includes a basic filter—advanced filters cost extra. Additionally, it's noisier than other alternatives and backed by just a 1-year warranty.",
      highlightedText: [
        {
          text:"very limited coverage"
        }
      ]
    },
    pros: [
      { text: "Affordable price point" },
      { text: "Smart app control" }
    ],
    cons: [
      { text: "Less than one-third the coverage area" },
      { text: "Only a basic filter included, advanced filters sold separately" },
      { text: "Limited 1-year warranty" },
      { text: "Noisy operation" }
    ]
  }
] as const;

export default function ProductReviewList() {

  return (
    <div className="flex flex-col gap-8 max-w-4xl w-full my-6 mb-9">
      {PRODUCT_REVIEWS_DATA.map((product) => (
        <ProductReviewCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  );
}
