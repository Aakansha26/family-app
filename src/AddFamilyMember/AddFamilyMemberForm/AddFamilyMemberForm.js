import React, { useState } from 'react'
import './AddFamilyMemberForm.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function AddFamilyMemberForm() {

    const [email, setEmail] = useState('')
    const [relation, setRelation] = useState('')
    const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRelationChange = (event) => {
        setRelation(event.target.value)
    };

    const invalidEmail = () => {
        if(email.includes("@gmail.com"));
           return false;
        return true;
    }

    const invalidRelation = () => {
        let letters = /^[A-Za-z]+$/;
        if(!relation.match(letters))
          return true;
        return false;
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        if(invalidEmail())
        {
            openErrorSnackbar("Enter valid Email");
        }

        else if(invalidRelation())
        {
            openErrorSnackbar("Enter valid Relation");
        }
        setEmail('');
        setRelation('');
    }

    const openErrorSnackbar = (message) => {
        setErrorSnackbarOpen(true);
        setSnackbarMessage(message)
    }

    const closeErrorSnackbar = () => {
        setErrorSnackbarOpen(false);
        setSnackbarMessage("");
    }
    return (
        <div className="addFamilyMemberForm">
            <h2>Add a Family Member!</h2>
            <form>
                <div className="form_field">
                  <TextField id="filled-basic" 
                  label="Email address" 
                  variant="filled" 
                  fullWidth value={email} 
                  onChange={handleEmailChange} required />
                </div>
                
                <div className="form_field">
                <TextField 
                id="filled-basic" 
                label="Relation" 
                variant="filled" 
                value={relation} 
                fullWidth 
                onChange={handleRelationChange} required />
                </div>
                <div className="form_field">
                    <Button variant="contained" color="secondary" onClick={handleSubmit}> Send Request
                </Button>
                </div>
            </form>

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

export default AddFamilyMemberForm
