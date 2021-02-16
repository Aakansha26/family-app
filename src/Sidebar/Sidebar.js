import React from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom"
import SidebarRow from './SidebarRow/SidebarRow'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PeopleIcon from '@material-ui/icons/People';
import PaymentIcon from '@material-ui/icons/Payment';
import MyEvents from '../MyEvents/MyEvents'

//Sidebar Component 
function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink activeClassName='activeLink' to="/myEvents">
                 <SidebarRow Icon={EventAvailableIcon} title="My Events"/>
            </NavLink>
            
            <NavLink activeClassName='activeLink' to="/myFamily">
                <SidebarRow Icon={SupervisedUserCircleIcon} title="My Family"/>
            </NavLink>

           
            <SidebarRow Icon={PeopleIcon} title="My Groups"/>
            <SidebarRow Icon={PaymentIcon} title="Payments"/>
        </div>
    )
}

export default Sidebar
