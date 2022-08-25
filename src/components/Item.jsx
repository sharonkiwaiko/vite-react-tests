import React from "react";

const Item = (props) => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  );
};

export default Item;
