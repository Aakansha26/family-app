import React from 'react'
import {NavLink} from "react-router-dom"
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import './Header.css'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { auth, provider } from '../firebase';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from "react-router-dom";

function Header() {
    
    const [state, dispatch] = useStateValue();
    const history = useHistory();

    //Function to logout user
    const signOut = () => {
        auth.signOut().then(() => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: null,
              });
              
              history.push("/");
          }).catch((error) => {
              console.log(error.message);
          });
          
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn2.vectorstock.com/i/1000x1000/60/31/happy-family-icon-multicolored-in-simple-figures-vector-21436031.jpg" />
                <h2>Parivaar</h2>
            </div>
            {!state.user?
              null : 
              <React.Fragment>
                      <div className="header__center">
                <div className="header__input">
                   <SearchIcon />
                   <input type="text" placeholder="Search family"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__option icons">
                    <Tooltip title="Home">
                        <NavLink activeClassName='activeLink' exact to="/">
                            <HomeIcon />                                                 
                        </NavLink>
                    </Tooltip>
                   
                </div>
                <div className="header__option icons">
                    <Tooltip title="Create Event">
                        <NavLink activeClassName='activeLink' to="/createEvent">
                            <LibraryAddIcon />                                            
                        </NavLink>
                    </Tooltip>
                
                </div>
                <div className="header__option icons">
                    <Tooltip title="Add a Family member">                                 
                        <NavLink activeClassName='activeLink' to="/addFamilyMember">
                            <GroupAddIcon />
                        </NavLink>   
                    </Tooltip>
                   
                </div>
                <div className="header__option">
                    <p>Welcome, {state.user.displayName}</p>
                </div>
                <div className="header__option">
                    <Button size="small" variant="contained" onClick={signOut}>Logout</Button>
                </div>
            </div>
            </React.Fragment>
            }
        
        </div>
    )
}

export default Header
