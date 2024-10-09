// src/components/UserPost.js
import React, { useState } from 'react';

const UserPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the new post
    console.log({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Post User</h2>
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
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default UserPost;
