import React, { useState, useEffect} from 'react'
import db from '../../firebase'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'

//Home screen wall Component
function Feed() {

    const [posts, setPosts] = useState([]);

  //Retrieving posts from DB
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
  }, [])

    return (
        <div className="feed">
            <MessageSender />
             {posts.map(post => (
            <Post
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
            />
            ))}
            
        </div>
    )
}

export default Feed
