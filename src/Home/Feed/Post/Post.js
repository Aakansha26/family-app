import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';


function Post({ image, profilePic, username, timestamp, message }) {

   console.log(image);
    return (
      <div className="post">
        <div className="post__top">
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__bottom">
          <p>{message}</p>
        </div>
  
        <div className="post__options">
          <div className="post__option">
            <ThumbUpIcon fontSize="small"/>
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutlineIcon fontSize="small"/>
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMeIcon fontSize="small"/>
            <p>Share</p>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Post;