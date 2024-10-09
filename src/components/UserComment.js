// src/components/UserComment.js
import React, { useState } from 'react';

const UserComment = () => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log({ comment });
    setComment('');
  };

  return (
    <div>
      <h2>User Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default UserComment;
