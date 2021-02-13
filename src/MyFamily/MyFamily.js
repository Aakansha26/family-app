import React from 'react'
import Notifications from '../Notifications/Notifications'
import Sidebar from '../Sidebar/Sidebar'
import FamilyList from './FamilyList/FamilyList'
import './MyFamily.css'

//Component to show family members of user
function MyFamily() {
    return (
        <div className="myFamily">
            <Sidebar />
            <FamilyList />
            <Notifications />
            
        </div>
    )
}

export default MyFamily
