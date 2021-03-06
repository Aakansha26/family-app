import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './CreateEventForm.css'
import db, { auth } from '../../firebase'
import firebase from "firebase"
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function CreateEventForm() {
    const [eventName, setEventName] = useState('')
    const [eventText, setEventText] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleNameChange = (event) => {
        setEventName(event.target.value);
    };

    const handleTextChange = (event) => {
        setEventText(event.target.value)
    };

    const handleDateChange = (event) => {
        setEventDate(event.target.value)
    };
  
    const invalidEventName = () => {
        if(eventName.length <= 0)
         return true;
        return false;
    }

    const invalidDate = () => {
        console.log(eventDate);
        let curdate = new Date();
        curdate.setDate(curdate.getDate()-1);
        if(new Date(eventDate) <= curdate)
           return true;
        return false;
    }

    const handleSubmit = (event) => {
       event.preventDefault();
       if(invalidEventName())
        {
            openErrorSnackbar("Event Name cannot be empty!");
        }
        else if(invalidDate())
        {
            openErrorSnackbar("Event's Date should be today or greater!");
        }
       else
       {
           const userid = auth.currentUser.uid;
           db.collection('events').add({
                    eventName: eventName,
                    eventDescription: eventText,
                    eventDate: eventDate,
                    userRef: `/users/${userid}`
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        
           
            // db.collection('events').add({
            //         eventName: eventName,
            //         eventDescription: eventText,
            //         eventDate: eventDate
            // })
            openSuccessSnackbar();
       }
      
       setEventName('');
       setEventText('');
       setEventDate('');
     
    }

    const openSuccessSnackbar = () => {
        setSuccessSnackbarOpen(true);
    }

    const closeSuccessSnackbar = () => {
        setSuccessSnackbarOpen(false);
    }

    const openErrorSnackbar = (message) => {
        setSnackbarMessage(message)
        setErrorSnackbarOpen(true);
        
    }

    const closeErrorSnackbar = () => {
        setSnackbarMessage("");
        setErrorSnackbarOpen(false);
    }

    return (
        <div className="createEventForm">
            <h2>Time to Remember Family Occassions!</h2>
            <form>
                <div className="form_field">
                  <TextField 
                  id="filled-basic"
                  inputProps={{ "data-testid": "eventName-id" }} 
                  label="Event Name" 
                  variant="filled" 
                  value={eventName} 
                  onChange={handleNameChange} 
                  required />
                </div>

                <div className="form_field">
                    <TextField
                    id="filled-multiline-flexible"
                    inputProps={{ "data-testid": "eventDescription-id" }}
                    label="Event Description"
                    multiline
                    fullWidth
                    rows={3}
                    value={eventText}
                    onChange={handleTextChange}
                    variant="filled"
                    /> 
                </div>

                <div className="form_field">
                  <TextField
                        id="date"
                        inputProps={{ "data-testid": "eventDate-id" }}
                        label="Event Date"
                        variant="filled"
                        type="date"
                        value={eventDate}
                        required
                        onChange={handleDateChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                  />
                </div>
                <div className="form_field">
                    <Button variant="contained" color="secondary" onClick={handleSubmit}> Add Event
                    </Button>
                </div>
            </form>

            <Snackbar anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={successSnackbarOpen}
                    autoHideDuration={4000}
                    onClose={closeSuccessSnackbar}>
                    <Alert elevation={6} variant="filled" onClose={closeSuccessSnackbar} severity="success">
                        Event Added Successfully!
                    </Alert>
            </Snackbar>

            <Snackbar anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={errorSnackbarOpen}
                    autoHideDuration={4000}
                    onClose={closeErrorSnackbar}>
                    <Alert elevation={6} variant="filled" onClose={closeErrorSnackbar} severity="error">
                        {snackbarMessage}
                    </Alert>
            </Snackbar>

        </div>
    )
}

export default CreateEventForm