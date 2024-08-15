
// A comment section component where each comment is a separate component. Should include an avatar, the username, and comment along with buttons to interact with each comment


import React, { useState } from 'react';
import Image from 'next/image';

// Comment component
const Comment = ({ avatar, username, comment, likes, dislikes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="nes-container with-title is-dark mb-4">
      <p className="title">{username}</p>
      <div className="flex items-start space-x-4">
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-grow">
          <p className="text-sm mb-2">{comment}</p>
          <div className="flex space-x-2">
            <button onClick={handleLike} className="nes-btn is-primary">
              <i className="nes-icon heart"></i> {likeCount}
            </button>
            <button onClick={handleDislike} className="nes-btn is-error">
              <i className="nes-icon heart is-empty"></i> {dislikeCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// CommentSection component
const CommentSection = () => {
  const comments = [
    {
      id: 1,
      avatar: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
      username: 'OrcWarrior123',
      comment: 'This is an amazing post! Love the pixel art style.',
      likes: 10,
      dislikes: 2,
    },
    {
      id: 2,
      avatar: 'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp',
      username: 'ElvenArcher456',
      comment: 'Great content as always. Keep it up!',
      likes: 8,
      dislikes: 1,
    },
    // Add more comments as needed
  ];

  return (
    <div className="nes-container with-title bg-white p-4 max-w-2xl mx-auto">
      <h2 className="title">Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default CommentSection;
