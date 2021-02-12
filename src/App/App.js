import React from 'react'
import './App.css';
import {Route, Switch} from "react-router-dom"
import Header from '../Header/Header';
import Home from '../Home/Home'
import CreateEvent from '../CreateEvent/CreateEvent';
import Login from '../Login/Login'
import MyEvents from '../MyEvents/MyEvents'
import AddFamilyMember from '../AddFamilyMember/AddFamilyMember'
import { useStateValue } from '../StateProvider'
import MyFamily from '../MyFamily/MyFamily'

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Header />
      {!user? 
          <Route exact path="/" component={Login} />
        :
        (
          <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/createEvent" component={CreateEvent} />
            <Route path="/myEvents" component={MyEvents} />
            <Route path="/addFamilyMember" component={AddFamilyMember} />
            <Route path="/myFamily" component={MyFamily} />
        </Switch>
        )
      }
      
    </div>
  );
}

export default App;
