import React from "react";
import postsData from "../assets/postsData";
import Item from "./Item";

const List = () => {
  return (
    <div>
      <h1>list</h1>
      {postsData.map((post) => (
        <Item key = {post.id} post={post} />
      ))}
      ;
    </div>
  );
};

export default List;
