import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Notifications from '../Notifications/Notifications'
import AddFamilyMemberForm from './AddFamilyMemberForm/AddFamilyMemberForm'
import './AddFamilyMember.css'

function AddFamilyMember() {
    return (
        <div className="addFamilyMember">
            <Sidebar />
            <AddFamilyMemberForm />
            <Notifications />
        </div>
    )
}

export default AddFamilyMember

