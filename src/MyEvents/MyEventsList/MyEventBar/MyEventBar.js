import React from 'react'
import './MyEventBar.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../../../firebase'

function MyEventBar({id, eventName, eventDescription, eventDate}) {

    const deleteEvent = (event) => {
       event.preventDefault();
       db.collection("events").doc(id).delete();
    }

    return (
        <div className="myEventBar">
            <div className="eventbar__top">
                <h4>{eventName}</h4>
                <IconButton aria-label="delete" onClick={deleteEvent}>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className="eventbar__bottom">
                <p>Reminder Message : {eventDescription?eventDescription:"None"}</p>
                <p>Date : {new Date(eventDate).toDateString()}</p>
            </div>
        </div>
    )
}

export default MyEventBar
