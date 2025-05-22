"use client";

import React from "react";

const Inputcard = ({ type, value, placeholder, onChange, id }: any) => {
  return (
    <div >
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

export default Inputcard;
