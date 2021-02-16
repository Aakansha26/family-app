import React, {useState} from 'react'
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import Button from '@material-ui/core/Button';
import './Login.css'

function Login() {

    const [state, dispatch] = useStateValue('');
  
    // Google Authentication
    const signIn = () => {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
            });
            
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

   
    return (
        <div className="login">
            <div className="login_top">
                <img src="https://cdn2.vectorstock.com/i/1000x1000/60/31/happy-family-icon-multicolored-in-simple-figures-vector-21436031.jpg" />
                <h2>Parivaar</h2>
            </div>
            <div className="login_center">
                <h3><i>"Families are like branches on a tree. We grow in different directions yet our roots remain as one."</i></h3>
            </div>
            <Button variant="contained" color="secondary" onClick={signIn}>
                SIGN IN
            </Button>
        </div>
    )
}

export default Login
