import React, {useState} from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

//Component to show posts
function Post({ profilePic, username, timestamp, message, latitude, longitude }) {

  //Setting colors for icons
   const [likeColor, setLikeColor] = useState(false);
   const [commentColor, setCommentColor] = useState(false);
   const [shareColor, setShareColor] = useState(false);

   const toggleLikeColor = () => {
     setLikeColor(!likeColor);
   }

   const toggleCommentColor = () => {
    setCommentColor(!commentColor);
  }

  const toggleShareColor = () => {
    setShareColor(!shareColor);
  }

  //Map for user's location
   const mapImg = (latitude !== '' && longitude != '')?(
        <MapContainer center={[latitude, longitude]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
   ): null;
   
    return (
      <div className="post">

        {/* user's name and avatar */}
        <div className="post__top">
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>

        {/* post message */}
        <div className="post__msg">
          <p>{message}</p>
        </div>

        {/* div to show location map */}
        <div className={(latitude !== '' && longitude != '')?"map_div":""}> 
           {mapImg}
        </div>
        
        {/* other options */}
        <div className="post__options">
          <div className={likeColor?"post__option blue":"post__option"} onClick={toggleLikeColor} >
            <ThumbUpIcon fontSize="small"/>
            <p>Like</p>
          </div>
          <div className={commentColor?"blue post__option":"post__option"} onClick={toggleCommentColor}>
            <ChatBubbleOutlineIcon fontSize="small"/>
            <p>Comment</p>
          </div>
          <div className={shareColor?"blue post__option":"post__option"} onClick={toggleShareColor}>
            <NearMeIcon fontSize="small"/>
            <p>Share</p>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Post;
