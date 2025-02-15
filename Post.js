import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.author.username}</h2>
      <p>{post.content}</p>
      {post.media && post.media.map((url, index) => (
        <img key={index} src={url} alt="Post media" />
      ))}
    </div>
  );
};

export default Post;
