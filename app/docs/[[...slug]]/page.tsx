import React from "react";

const Docs = async ({ params }) => {
  params: Promise<{ slug: string[] }>;
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1 className=" p-20 bg-gray-500 text-black">
        Viewing Docs For feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return (
      <h1 className=" p-20 bg-gray-500 text-black">
        Viewing docs for Feature {slug[0]}
      </h1>
    );
  }
  return (
    <div className=" p-20 bg-gray-500 text-black"> Hello Docs This is Docs</div>
  );
};

export default Docs;
