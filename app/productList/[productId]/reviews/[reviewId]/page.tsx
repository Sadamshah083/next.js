import React from "react";
import { notFound } from "next/navigation";

const Review = async ({ params }) => {
  params: Promise<{ productId: string; reviewId: string }>;
  const { productId, reviewId } = await params;
  // const review = reviewId;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1 className=" p-20 bg-gray-500 text-black">
        Review {reviewId} for Products {productId}
      </h1>
    </div>
  );
};

export default Review;
