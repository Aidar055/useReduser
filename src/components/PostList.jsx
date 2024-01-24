import React, { useContext, useEffect } from "react";

import Posts from "./Posts";
import { useParams } from "react-router-dom";
import { todoContext } from "../context/TodoContexetProvider";

const PostList = () => {
  const { id } = useParams();
  const { getPost, postId, getId } = useContext(todoContext);
  console.log(getId);
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      {Array.isArray(postId) &&
        postId.map((elem) => <Posts {...elem} key={elem.id} />)}
    </div>
  );
};

export default PostList;
