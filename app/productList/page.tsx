import Link from "next/link";
import React from "react";

const ProductList = () => {
  const productId = 100;
  return (
    <div className=" p-20 bg-gray-500 text-black gap-4  flex ">
      <Link href="/">Home</Link>
      <h1>products</h1>
      <Link href={"/productList/1"}>Product1</Link>
      <Link href={"/productList/2"}> product2</Link>
      <Link href={"/productList/3"} replace>
        Product3
      </Link>

      <h2>
        <Link href={`/productList/${productId}`}>product {productId}</Link>
      </h2>
    </div>
  );
};

export default ProductList;
