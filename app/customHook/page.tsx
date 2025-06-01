"use client";
import React from "react";
import useFetch from "@/hooks/page";

const Page = () => {
  const { data, loader, error } = useFetch(
    "https://jsonplaceholder.typicodes.com/posts"
  );

  if (loader)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-blue-500 text-lg font-semibold">Loading posts...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Blog Posts
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((e: any) => (
          <div
            key={e.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {e.title}
            </h2>
            <p className="text-gray-700">{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
