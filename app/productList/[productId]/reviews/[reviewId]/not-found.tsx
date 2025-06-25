"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Notfound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1 className=" p-20 bg-gray-500 text-black">
        Review {reviewId} Not Found for product {productId}
      </h1>
    </div>
  );
};

export default Notfound;
