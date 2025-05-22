import React from "react";

const Card = ({ id, title, rating }: any) => {
  return (
    <div>
      {id}
      {title}
      {rating}
    </div>
  );
};

export default Card;
