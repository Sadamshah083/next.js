import React from "react";

const ProductDetails = async ({ params }) => {
  params: Promise<{ productId: string }>;
  const Id = (await params).productId;
  return (
    <div className=" p-20 bg-gray-500 text-black">
      Detials about Products {Id}
    </div>
  );
};

export default ProductDetails;
