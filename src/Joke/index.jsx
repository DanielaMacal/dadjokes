import React from 'react';
import { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const HandleUpLike = () => setUpLikes(upLikes + 1);
  const HandleDownLikes = () => setDownLikes(downLikes + 1);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={HandleUpLike}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likes + upLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={HandleDownLikes}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikes + downLikes}
        </span>
      </div>
    </div>
  );
};
