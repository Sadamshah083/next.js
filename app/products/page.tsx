"use client";
import useFetch from "@/hooks/page";
import React from "react";

const page = () => {
  const { data } = useFetch("https://dummyjson.com/products");

  return (
    <div>
      {data?.products.map((e: any) => {
        return <div key={e.id}>{e.title}</div>;
      })}
    </div>
  );
};

export default page;
