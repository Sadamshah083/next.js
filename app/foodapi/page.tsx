"use client";
import useFetch from "@/hooks/page";
import React from "react";
const customapi = {
  data: [
    {
      id: 1,
      name: "Alice Thornton",
      email: "alice.thornton@example.com",
      role: "admin",
    },
    {
      id: 2,
      name: "Brian Keller",
      email: "brian.keller@example.com",
      role: "editor",
    },
    {
      id: 3,
      name: "Carla Mendez",
      email: "carla.mendez@example.com",
      role: "viewer",
    },
    {
      id: 4,
      name: "Daniel Okafor",
      email: "daniel.okafor@example.com",
      role: "admin",
    },
    {
      id: 5,
      name: "Eva Li",
      email: "eva.li@example.com",
      role: "editor",
    },
    {
      id: 6,
      name: "Frank Rossi",
      email: "frank.rossi@example.com",
      role: "viewer",
    },
    {
      id: 7,
      name: "Grace Kim",
      email: "grace.kim@example.com",
      role: "editor",
    },
    {
      id: 8,
      name: "Hassan Ali",
      email: "hassan.ali@example.com",
      role: "viewer",
    },
    {
      id: 9,
      name: "Ivy Nguyen",
      email: "ivy.nguyen@example.com",
      role: "admin",
    },
    {
      id: 10,
      name: "Jake Martin",
      email: "jake.martin@example.com",
      role: "viewer",
    },
  ],
};

const page = () => {
  const { data } = useFetch(customapi);
  return (
    <div>
      {data.map((e: any, index: number) => {
        return <div key={index}>{e.name}</div>;
      })}

      {/* {data?.name} */}
    </div>
  );
};

export default page;
