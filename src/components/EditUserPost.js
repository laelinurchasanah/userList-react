// src/components/EditUserPost.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUserPost = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState(`Post Title ${postId}`);
  const [content, setContent] = useState(`Post Content for post ${postId}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ postId, title, content });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditUserPost;
