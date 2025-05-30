"use client";
import React from "react";
import useFetch from "@/hooks/page";

const page = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="">
      {data?.map((e: any) => {
        return <div key={e.id}>{e.title}</div>;
      })}
    </div>
  );
};

export default page;
