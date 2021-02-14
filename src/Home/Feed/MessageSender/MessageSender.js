import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import { useStateValue } from '../../../StateProvider'
import db from '../../../firebase'
import firebase from 'firebase'

//Component to create post
function MessageSender() {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          latitude: latitude,
          longitude: longitude
        })
        setInput('');
        setLatitude('');
        setLongitude('');
       
    };

    //Function to find user's location to share
    const getLocation = (event) => {
      if('geolocation' in navigator)
      {
        navigator.geolocation.getCurrentPosition(position => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          console.log(latitude,longitude);
          setLatitude(latitude);
          setLongitude(longitude);
        })
      }
      else console.log("Location not supported");
    } 

    return (
        <div className="messageSender">
        <div className="messageSender__top">
          <Avatar src={user.photoURL} />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="messageSender__input"
              placeholder={`Share feelings with your family...`}
            />
         
            <Button variant="contained" size="small" color="primary" onClick={handleSubmit} >
              Post
            </Button>
          </form>
        </div>
        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <VideocamIcon style={{ color: 'red' }} />
            <h4>Live Video</h4>
          </div>
          <div className="messageSender__option">
            <PhotoLibraryIcon style={{ color: 'green' }} />
            <h4>Photo/Video</h4>
          </div>
          <div className="messageSender__option">
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={getLocation} 
                startIcon={<LocationOnIcon />}
              >
                Share Location
              </Button>
            
          </div>
        </div>
      </div>
    )
}

export default MessageSender


