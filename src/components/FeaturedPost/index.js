import React from "react";
import Post from "./Post";

const Posts = ({ post }) => {
  return <Post key={post.id} {...post} />;
};

export default Posts;
