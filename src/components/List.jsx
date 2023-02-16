import React from "react";
import postsData from "../data/postsData";
import Item from "./Item";

const List = () => {
  return (
    <div>
      <hr />
      <h1>
        <u>list</u>
      </h1>
      {postsData.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </div>
  );
};

export default List;
